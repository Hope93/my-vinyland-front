import { useState, useEffect } from "react";
import Link from "next/link";
import { useAppContext } from "../context/app-context";
import {
  getProductAmount,
  getTotalPrice,
  getTotalProductAmount,
  getShoppingList
} from "../utils/cart";

const Cart = () => {
  const { cart } = useAppContext();
  // initial amount of products in the cart
  const defaultAmount = getTotalProductAmount(cart);
  const [amount, setAmount] = useState<number>(defaultAmount);

  const defaultPrice = getTotalPrice(cart);
  const [totalPrice, setPrice] = useState<number>(defaultPrice);

  const defaultList = getShoppingList(cart);
  const [cartList, setCartList] = useState(defaultList);

  // any updates to cart are reflected here in the amount
  useEffect(() => {
    setAmount(getTotalProductAmount(cart));

    setPrice(getTotalPrice(cart));

    setCartList(getShoppingList(cart));
  }, [cart]);

  return (
    <>
      <div>My cart</div>
      <div>{amount} items</div>
      <div>
        <ul>{cartList}</ul>
        {amount > 0 && (
          <div>
            <div>
              <div>{totalPrice.toFixed(2)}</div>
              <div>
                <Link href="/cart">
                  <a>View cart</a>
                </Link>
                <Link href="/checkout">
                  <a>Finish order</a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
