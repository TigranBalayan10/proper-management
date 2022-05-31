const { User, Property } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log("context", context.user);
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate(
          "properties"
        );

        return userData;
      }
      throw new AuthenticationError("You must be logged in to view this data");
    },

    getProperties: async (parent, args, context) => {
      if (context.user) {
        const match = context.identity.role === 'OWNER' ? { owner: context.identity._id } : {};
        const properties = await Property.find(match).populate(['owner', 'tenants'])
        return properties;
      }

      throw new AuthenticationError("You must be logged in to view this data");
    },

    getProperty: async (parent, { id }) => {
      const property = await Property.findOne({ _id: id });
      return property;
    },

    getUsers: async (parent, args) => {
      const users = await User.find()
        .select('-__v -password')
        .populate('properties');
      return users;
    },

    getUser: async (parent, { id }) => {
      return User.findOne({ id }).select("-__v -password");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(await User.find());
      const user = await User.create(args);
      console.log(user);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password, role }) => {
      const user = await User.findOne({ email, role });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addProperty: async (parent, args, context) => {
      console.log(context);
      if (context.identity?.role === "OWNER") {
        const property = await Property.create({
          ...args,
          owner: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id},
          { $push: { properties: property._id } },
          { new: true }
        );

        return property;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

<<<<<<< HEAD
    addRequest: async (parent, args, context) => {
      console.log(args);
      if (context.identity?.role === "TENANT") {
        const updateProperty = await Property.findOneAndUpdate(
          { _id: args.propertyId },
          { $push: { requests: args } },
          { new: true}
        );
        
        return updateProperty;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    attachTenant: async (parent, { apartmentId }, context) => {
      if (context.user && context.identity.role === "TENANT") {
        const apartment = await Apartment.findOneAndUpdate(
          { _id: apartmentId, tenant: null },
          { $set: { tenant: context.user._id } },
=======
    attachTenant: async (parent, { propertyId }, context) => {
      if (context.user && context.identity.role === 'TENANT') {
        const property = await Property.findOneAndUpdate(
          { _id: propertyId, tenant: null },
          { $push: { tenants: context.user._id } },
>>>>>>> dbb702a226d6fff36c020db66e9c33d8da4657a6
          { new: true }
        );

        return property;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
