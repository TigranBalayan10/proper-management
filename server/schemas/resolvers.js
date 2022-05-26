const { User, Property, Apartment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log('context', context.user);
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .populate('properties')

        return userData;
      }
      throw new AuthenticationError('You must be logged in to view this data');

    },

    getProperties: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user._id);
        const match = context.user.roll === 'OWNER' ? { owner: context.user._id } : {};
        const properties = await Property.find(match)
        .populate(['owner'])
        console.log(properties);
        return properties;
      }

      throw new AuthenticationError('You must be logged in to view this data');
    },

    getProperty: async (parent, { id }) => {
      const property = await Property.findOne({ _id: id })
      return property;
    },

    getApartments: async(parent, args, context) => {
      const apartments = await Apartment.find({property: args.propertyId})
      .populate(['tenant'])
      return apartments;
    },

    getUsers: async (parent, args) => {
      const users = await User.find()
        .select('-__v -password')
      return users;
    },

    getUser: async (parent, { id }) => {
      return User.findOne({ id })
        .select('-__v -password')
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(await User.find())
      const user = await User.create(args);
      console.log(user);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addProperty: async (parent, args, context) => {
      console.log(context);
      if (context.identity?.role === 'OWNER') {
        const property = await Property.create({ ...args, owner: context.user._id });

        for(let i = 1; i <= args.numberOfApartments; i++) {
          await Apartment.create({
            number: i,
            property: property._id
          })
        }

        return property;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    attachTenant: async (parent, { apartmentId }, context) => {
      if (context.user && context.identity.role === 'TENANT') {
        const apartment = await Apartment.findOneAndUpdate(
          { _id: apartmentId, tenant: null },
          { $set: { tenant: context.user._id } },
          { new: true }
        );

        return apartment;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    deleteProperty: async (parent, { id }) => {
      const property = await Property.findByIdAndDelete(id);
      return property;
    },

    deleteUser: async (parent, { id }) => {
      const user = await User.findByIdAndDelete(id);
      return user;
    }
  }
};

module.exports = resolvers;
