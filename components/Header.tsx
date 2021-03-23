import { useState, useEffect } from "react";
import Link from "next/link";
import { useAppContext } from "../context/app-context";
import Navigation from "./Navigation";

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
  const defaultAmount = cart.length > 0 ? cart.length : null;
  const [amount, setAmount] = useState<number | null>(defaultAmount);

  // any updates to cart are reflected here in the amount
  useEffect(() => {
    setAmount(cart.length > 0 ? cart.length : null)
  }, [cart]);

  return (
    <>
      <header>
        <Navigation />
        <form>
          <input />
        </form>
        <Link href="/cart">
          <a>
            <svg viewBox="0 0 24 24">
              <path
                d="M10 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5-1.5a1.5 1.5
              0 100 3 1.5 1.5 0 000-3zm1.336-5l1.977-7H0l2.938
              7h11.898zm4.969-10l-3.432 12H3.776l.839
              2h13.239l3.474-12h1.929L24 3h-4.195z"
              />
            </svg>
            <div>{amount}</div>
          </a>
        </Link>
        <InternalTitle pageTitle={pageTitle} />
      </header>
    </>
  );
};

export default Header;
