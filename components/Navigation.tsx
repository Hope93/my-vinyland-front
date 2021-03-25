import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/app-context";
import {
  Collapse,
  Navbar,
  Nav,
  NavbarToggler,
  NavLink,
  NavItem,
  Col,
} from "reactstrap";
import { getTotalProductAmount } from "../utils/cart";

const Navigation = () => {
  const { cart } = useAppContext();

  // initial amount of products in the cart
  const defaultAmount = getTotalProductAmount(cart);
  const [amount, setAmount] = useState<number>(defaultAmount);

  // any updates to cart are reflected here in the amount
  useEffect(() => {
    setAmount(getTotalProductAmount(cart));
  }, [cart]);

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar>
      <Link href="/">
        <NavLink>
          <svg viewBox="0 0 24 24">
            <path d="M14 12c0 1.103-.896 2-2 2-1.103 0-2-.897-2-2s.897-2 2-2c1.104 0 2 .897 2 2zm10 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.205 19.507a8.025 8.025 0 01-4.699-4.714l-1.02.127a9.015 9.015 0 005.592 5.606l.127-1.019zm.26-2.077a6.03 6.03 0 01-2.895-2.896l-1.041.13a7.016 7.016 0 003.807 3.807l.129-1.041zM16 12a4 4 0 10-8 0 4 4 0 008 0zm2.473-2.665a7.026 7.026 0 00-3.807-3.807l-.131 1.041a6.036 6.036 0 012.896 2.896l1.042-.13zm2.027-.253a9.01 9.01 0 00-5.582-5.568l-.129 1.019A8.027 8.027 0 0119.48 9.21l1.02-.128z" />
          </svg>
          <h1>Vinyland</h1>
        </NavLink>
      </Link>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={collapsed}>
        <Nav>
          <NavItem>
            <Link href="/about">
              <NavLink>About</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#contact">
              <NavLink>Contact</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
      <Link href="/cart">
        <NavLink>
          <svg viewBox="0 0 24 24">
            <path d="M10 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm1.336-5l1.977-7H0l2.938 7h11.898zm4.969-10l-3.432 12H3.776l.839 2h13.239l3.474-12h1.929L24 3h-4.195z" />
          </svg>
          {amount > 0 && <div>{amount}</div>}
        </NavLink>
      </Link>
    </Navbar>
  );
};

export default React.memo(Navigation);
