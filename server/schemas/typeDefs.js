const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    propertyName: String
    companyName: String
    phoneNumber: String
    properties: [Property]
  }

  type Tenant {
    id: ID
    firstName: String!
    lastName: String!
    propertyName: String!
    email: String
    password: String
    user: [User]
  }

  type Property {
    id: ID
    address: String
    city: String
    state: String
    zip: Int
    user: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getUsers: [User]
    getUser(id: ID!): User
    getTenants(email: String): [Tenant]
    getTenant(id: ID!): Tenant!
    getProperties: [Property!]
    getProperty(id: ID!): Property!
  }

  type Mutation {

    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      propertyName: String
      companyName: String
      phoneNumber: String
    ): Auth

    addTenant(
      firstName: String!
      lastName: String!
      propertyName: String!
      email: String!
      password: String!
    ): Tenant

    addProperty(
      address: String!
      city: String!
      state: String!
      zip: Int!
      userId: ID!
    ): Property

    login(email: String!, password: String!): Auth!

    deleteProperty(id: ID!): Property!
    deleteUser(id: ID!): User!
    deleteTenant(id: ID!): Tenant!
    
  }
`;

module.exports = typeDefs;
