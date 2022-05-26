const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    phoneNumber: String
    role: Role!
    properties: [Property]
  }

  enum Role {
    OWNER
    TENANT
  }

  type Property {
    id: ID
    address: String
    city: String
    state: String
    zip: Int
    owner: User
    tenant: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getUsers: [User]
    getUser(_id: ID!): User
    getProperties: [Property]
    getProperty(id: ID!): Property!
  }

  type Mutation {

    addUser(
      firstName: String!
      lastName: String!
      email: String!
      phoneNumber: String
      password: String!
      role: Role!
    ): Auth

    addProperty(
      address: String!
      city: String!
      state: String!
      zip: Int!
    ): Property

    attachTenant(
      propertyId: ID!
    ): Property

    login(email: String!, password: String!): Auth!

    deleteProperty(id: ID!): Property!
    deleteUser(id: ID!): User!
    
  }
`;

module.exports = typeDefs;
