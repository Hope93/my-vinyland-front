import React, { createContext, useContext, useReducer } from "react";
import appReducer from "../reducers/app-reducer";
import type { Action } from "../reducers/app-reducer";
import type { State } from "../store/states/app-state";
import { defaultState } from "../store/states/app-state";

// TODO change this
interface ContextProps {
  cart: State;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext({} as ContextProps);

type AppWrapperProps = {
  children: React.ReactNode;
};

export function AppWrapper({ children }: AppWrapperProps) {
  const [cart, dispatch] = useReducer(appReducer, defaultState);

  return (
    <AppContext.Provider value={{ cart, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
