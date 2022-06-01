const { gql } = require("apollo-server-express");

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

  type Request {
    id: String!
    moreInfo: String
    type: Type!
    firstName: String!
    lastName: String!
    status: Status!
    unitNumber: String!
    createdAt: String!
  }

  enum Role {
    OWNER
    TENANT
  }

  enum Status {
    PENDING
    APPROVED
    REJECTED
  }

  enum Type {
    PLUMBING
    ELECTRIC
    HEATING
    CARPENTRY
    OTHER
  }

  type Property {
    id: ID!
    name: String!
    address: String
    city: String
    state: String
    zip: String
    owner: User
    tenants: [User]
    requests: [Request]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getUsers: [User]
    getUser(_id: ID!): User
    getTenant: User
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
      name: String!
      address: String!
      city: String!
      state: String!
      zip: String!
    ): Property
    
    attachTenant(
      propertyId: ID!
    ): Property
    
    addRequest(
      propertyId: ID!
      moreInfo: String
      firstName: String!
      lastName: String!
      type: Type!
      unitNumber: String!
    ): Property!

    login(email: String!, password: String!, role: Role!): Auth!
  }
`;

module.exports = typeDefs;
