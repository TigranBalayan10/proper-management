import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      phoneNumber
      properties {
        id
        name
        address
        city
        state
        zip
      }
    }
  }
`;

export const QUERY_PROPERTIES = gql`
  query GetProperties {
    getProperties {
      name
      address
      state
      city
      requests {
        moreInfo
        type
        firstName
        lastName
        status
        createdAt
      }
      id
      tenants {
        firstName
        lastName
        phoneNumber
        id
      }
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

export const QUERY_TENANT = gql`
  query GetTenant {
    getTenant {
      id
      firstName
      lastName
      phoneNumber
      properties {
        id
        name
        address
        city
        state
        zip
        requests {
          status
        }
      }
    }
  }
`;

export const QUERY_PROPERTY = gql`
  query GetProperty($getPropertyId: ID!) {
    getProperty(id: $getPropertyId) {
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
        createdAt
        unitNumber
      }
    }
  }
`;
