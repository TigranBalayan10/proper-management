import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      phoneNumber
      role
    }
  }
`;

export const QUERY_PROPERTIES = gql`
  query GetProperties {
    getProperties {
      id
      name
      address
      numberOfApartments
      city
      state
      zip
    }
  }
`;

export const QUERY_USERS = gql`
  query GetUsers {
    getUsers {
      firstName
      lastName
      role
      email
      id
      phoneNumber
      properties {
        name
        address
        id
        city
        zip
      }
    }
  }
`;
