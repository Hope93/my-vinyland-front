import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/app-context";
import { Navbar, NavLink, Col, Row, Collapse } from "reactstrap";
import { getTotalProductAmount } from "../../utils/cart";
import Cart from "../cart-popup";
import styles from "./style.module.css";

type HeaderProps = {
  pageTitle: string;
};

const InternalTitle = ({ pageTitle }: { pageTitle: string }) => (
  <h1>{pageTitle}</h1>
);

// optional prop for search form if it's the right page
const Header = ({ pageTitle }: HeaderProps) => {
  const { cart } = useAppContext();

  // initial amount of products in the cart
  const defaultAmount = getTotalProductAmount(cart);
  const [amount, setAmount] = useState<number>(defaultAmount);

  const [cartHover, setHover] = useState(false);

  // any updates to cart are reflected here in the amount
  useEffect(() => {
    setAmount(getTotalProductAmount(cart));
  }, [cart]);

  return (
    <>
      <header>
        <Navbar className={`${styles.nav} text-uppercase`}>
          <Link href="/">
            <NavLink className={styles.link}>Vinyland</NavLink>
          </Link>
          <Link href="/cart">
            <NavLink
              onMouseEnter={() => {
                setHover(true);
              }}
              className={`${styles.link}`}
            >
              <Row>
                <Col className="p-0 mr-1">Cart</Col>
                <Col className={`p-0`}>
                  {amount > 0 && (
                    <div className={`rounded-circle ${styles.amount}`}>
                      {amount}
                    </div>
                  )}
                </Col>
              </Row>
            </NavLink>
          </Link>
        </Navbar>
        <Collapse
          onMouseLeave={() => {
            setHover(false);
          }}
          className={`${styles.collapseMotion}`}
          isOpen={cartHover}
        >
          <Cart />
        </Collapse>
        <div className="ml-2">
          <InternalTitle pageTitle={pageTitle} />
        </div>
      </header>
    </>
  );
};

export default Header;
