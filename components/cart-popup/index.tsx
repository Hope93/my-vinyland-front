import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAppContext } from "../../context/app-context";
import {
  getTotalPrice,
  getTotalProductAmount,
  getShoppingList,
} from "../../utils/cart";
import { ListGroup, Toast, ToastHeader, Row, Col, ToastBody } from "reactstrap";
import styles from "./style.module.css";

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
    <Toast className={`${styles.toastList}`}>
      <ToastHeader>
        <Row>
          <Col className={styles.cart}>My cart</Col>
          <Col className={styles.cart}>items: {amount}</Col>
        </Row>
      </ToastHeader>
      <ToastBody>
      {amount === 0 && <div>Your cart is empty</div>}
        <ListGroup>{cartList}</ListGroup>
        {amount > 0 && (
          <Row>
            <Col>{totalPrice.toFixed(2)}</Col>
            <Col>
              <Row className={styles.cart}>
                <Col className="p-0">
                  <Link href="/cart">
                    <a className={styles.link}>View cart</a>
                  </Link>
                </Col>
                <Col>
                  <Link href="/checkout">
                    <a className={styles.link}>Finish order</a>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </ToastBody>
    </Toast>
  );
};

export default React.memo(Cart);
