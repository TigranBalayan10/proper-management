import { SET_PROPERTIES, SET_REQUEST, SET_USER } from "../utils/actions";
import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_REQUEST:
      return {
        ...state,
        requests: [...state.requests, action.payload],
      };
    case SET_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case SET_PROPERTIES:
      return {
        ...state,
        propertiesData: [...state.propertiesData, action.payload],
      };

    default:
      return state;
  }
};

export function useReducerWithState(initialState) {
  return useReducer(reducer, initialState);
}
