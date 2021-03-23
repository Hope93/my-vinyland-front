import type { State } from "../store/states/app-state";
import { Product } from "../products";

export type Action =
  | { type: "POPULATE_PRODUCTS", products: Product[] }
  | { type: "ADD_PRODUCT", product: Product }
  | { type: "REMOVE_PRODUCT", id: number }
  | { type: "REMOVE_ALL"};

// Use this if managing complex state
const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "POPULATE_PRODUCTS":
      return action.products;
    case "ADD_PRODUCT":
      return [...state, action.product];
    case "REMOVE_PRODUCT":
      return state.filter((product: Product) => product.id !== action.id);
    case "REMOVE_ALL":
      return [];
    default:
      return state;
  }
};

export default appReducer;
