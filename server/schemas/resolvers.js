const { Tenant, User, Property } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log('context', context.user);
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })

        return userData;
      }
      throw new AuthenticationError('You must be logged in to view this data');

    },
    getProperties: async (parent, args, context) => {
      console.log(context.user._id)
      const properties = await Property.find({ user: context.user._id });
      return properties;
    },
    getProperty: async (parent, { id }) => {
      const property = await Property.findById(id);
      return property;
    },
    getTenants: async (parent, args) => {
      const tenants = await Tenant.find({});
      return tenants;
    },
    getTenant: async (parent, { id }) => {
      const tenant = await Tenant.findById(id);
      return tenant;
    },
    getUsers: async (parent, args, { email }) => {
      const users = await User.find()
        .select('-__v -password')
      return users;
    },
    getUser: async (parent, { id }) => {
      return User.findOne({ id })
        .select('-__v -password')
        .populate('properties');
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

    addTenant: async (parent, args, context) => {
      if (context.user) {
        const tenant = await Tenant.create({ ...args });

        await Property.findByIdAndUpdate(
          { _id: context.user._id },
          { $set: { tenant: tenant._id } },
          { new: true }
        );

        return tenant;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    addProperty: async (parent, args, context) => {
      if (context.user) {
        const property = await Property.create({ ...args, user: context.user._id }); 
        
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { properties: property._id } },
          { new: true }
        );

        return property;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
