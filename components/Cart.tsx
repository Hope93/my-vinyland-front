import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAppContext } from "../context/app-context";
import {
  getTotalPrice,
  getTotalProductAmount,
  getShoppingList,
} from "../utils/cart";
import { ListGroup, Toast, ToastHeader, Row, Col, ToastBody } from "reactstrap";

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
    <Toast>
      <ToastHeader>
        <Row>
          <Col>My cart</Col>
          <Col>{amount} items</Col>
        </Row>
      </ToastHeader>
      <ToastBody>
        <ListGroup>{cartList}</ListGroup>
        {amount > 0 && (
          <Row>
            <Col>{totalPrice.toFixed(2)}</Col>
            <Col>
              <Link href="/cart">
                <a>View cart</a>
              </Link>
              <Link href="/checkout">
                <a>Finish order</a>
              </Link>
            </Col>
          </Row>
        )}
      </ToastBody>
    </Toast>
  );
};

export default React.memo(Cart);
