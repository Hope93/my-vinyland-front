import type {Product} from '../products'

// TODO: add quantity and price of each product to state and total
// of all products
export type CartProduct = {
  item: Product;
  quantity: number;
  totalPrice: number;
}

export type State = CartProduct[];

export const defaultState: State = [];