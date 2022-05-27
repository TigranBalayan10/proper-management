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
    numberOfApartments: Int
    city: String
    state: String
    zip: Int
    owner: User
  }

  type Apartment {
    id: ID
    number: Int
    property: Property
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
    getApartments(propertyId: ID!): [Apartment]
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
      numberOfApartments: Int!
    ): Property

    attachTenant(
      apartmentId: ID!
    ): Apartment

    login(email: String!, password: String!): Auth!
    
  }
`;

module.exports = typeDefs;
