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
