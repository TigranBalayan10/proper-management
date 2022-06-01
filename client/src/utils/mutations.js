import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $role: Role!, $password: String!) {
    login(email: $email, role: $role, password: $password) {
      token
      user {
        lastName
        firstName
        role
        email
        phoneNumber
        properties {
          id
          address
          city
          state
          zip
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: Role!
    $phoneNumber: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
      phoneNumber: $phoneNumber
    ) {
      token
      user {
        firstName
        lastName
        email
        role
        phoneNumber
      }
    }
  }
`;

export const ADD_PROPERTY = gql`
  mutation AddProperty(
    $name: String!
    $address: String!
    $city: String!
    $state: String!
    $zip: String!
  ) {
    addProperty(
      name: $name
      address: $address
      city: $city
      state: $state
      zip: $zip
    ) {
      name
      address
      city
      state
      zip
      id
      requests {
        id
        moreInfo
        type
        firstName
        lastName
        status
        createdAt
      }
      tenants {
        id
        firstName
        lastName
        email
        phoneNumber
      }
    }
  }
`;

export const ATTACH_TENANT = gql`
  mutation AttachTenant($propertyId: ID!) {
    attachTenant(propertyId: $propertyId) {
      id
      name
      address
      state
      city
      zip
    }
  }
`;

export const ADD_REQUEST = gql`
  mutation AddRequest(
    $propertyId: ID!
    $firstName: String!
    $lastName: String!
    $type: Type!
    $unitNumber: String!
    $moreInfo: String
  ) {
    addRequest(
      propertyId: $propertyId
      firstName: $firstName
      lastName: $lastName
      type: $type
      unitNumber: $unitNumber
      moreInfo: $moreInfo
    ) {
      id
      name
      address
      city
      state
      zip
      requests {
        id
        moreInfo
        type
        firstName
        lastName
        status
        unitNumber
        createdAt
      }
    }
  }
`;
