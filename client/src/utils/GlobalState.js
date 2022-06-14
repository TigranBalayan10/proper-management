import React, { createContext, useContext } from "react";
import { useReducerWithState } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducerWithState(
    {
      propertiesData: [],
      users: [],
      requests: [],
    },
    value
  );

  console.log("StoreProvider", state);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
