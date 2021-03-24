import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import appReducer from "../reducers/app-reducer";
import type { Action } from "../reducers/app-reducer";
import type { State } from "../store/app-state";
import { defaultState } from "../store/app-state";

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

  useEffect(() => {
    const storage = localStorage.getItem("shoppingCart");
    if (storage) {
      const shoppingCartArray = JSON.parse(storage);
      if (shoppingCartArray) {
        dispatch({ type: "POPULATE_PRODUCTS", products: shoppingCartArray });
      }
      console.log({ storage: JSON.parse(storage) });
    }
  }, []);

  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("shoppingCart", JSON.stringify(cart));
    } else localStorage.removeItem("shoppingCart");
  }, [cart]);

  return (
    <AppContext.Provider value={{ cart, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
