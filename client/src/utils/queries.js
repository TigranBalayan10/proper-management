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
