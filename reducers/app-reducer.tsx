import type { State } from "../store/app-state";
import { CartProduct } from "../store/app-state";
import { Product } from "../products";

export type Action =
  | { type: "POPULATE_PRODUCTS"; products: CartProduct[] }
  | { type: "ADD_PRODUCT"; item: Product }
  | { type: "REMOVE_ONE"; id: number }
  | { type: "REMOVE_PRODUCT"; id: number }
  | { type: "REMOVE_ALL" };

// Use this if managing complex state
const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "POPULATE_PRODUCTS":
      return action.products;
    case "ADD_PRODUCT":
      // I need to adjust the quantity
      const found = state.find((product) => product.item.id === action.item.id);
      if (found) {
        return state.map((product) => {
          if (product.item.id === action.item.id) {
            return {
              item: product.item,
              quantity: product.quantity + 1,
              totalPrice:
                product.totalPrice +
                (action.item.discountedPrice
                  ? action.item.discountedPrice
                  : action.item.price),
            };
          }
          return product;
        });
      }
      return state.concat([
        {
          item: action.item,
          quantity: 1,
          totalPrice: action.item.discountedPrice
            ? action.item.discountedPrice
            : action.item.price,
        },
      ]);
    case "REMOVE_ONE":
      return state
        .map(
          (product: CartProduct): CartProduct => {
            if (product.item.id === action.id) {
              product.quantity--;
              product.totalPrice =
                product.totalPrice -
                (product.item.discountedPrice
                  ? product.item.discountedPrice
                  : product.item.price);
            }
            return product;
          }
        )
        .filter((product: CartProduct) => product.quantity > 0);
    case "REMOVE_PRODUCT":
      return state.filter((product) => product.item.id !== action.id);
    case "REMOVE_ALL":
      return [];
    default:
      return state;
  }
};

export default appReducer;
