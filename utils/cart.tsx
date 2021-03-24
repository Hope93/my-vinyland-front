import type { CartProduct } from "../store/app-state";

export const getTotalProductAmount = (cart: CartProduct[]) =>
  cart.reduce((accumulator, product) => accumulator + product.quantity, 0);

export const findProduct = (cart: CartProduct[], productID: number) =>
  cart.find((cartProduct) => cartProduct.item.id === productID);

export const getProductAmount = (cart: CartProduct[], productID: number) => {
  const found = findProduct(cart, productID);
  return found ? found.quantity : 0;
};

export const getTotalPrice = (cart: CartProduct[]) =>
  cart.reduce((accumulator, product) => accumulator + product.totalPrice, 0);

export const getShoppingList = (cart: CartProduct[]) =>
  cart.map((product) => {
    const productAmount = getProductAmount(cart, product.item.id);
    return (
      <li key={product.item.id}>
        <img src={product.item.image} alt={product.item.name} />
        <div>
          <div>{product.item.name}</div>
          <div>Quantity: {productAmount}</div>
        </div>
        <div>{(product.totalPrice).toFixed(2)}</div>
      </li>
    );
  });
