import { ReactNode } from "react";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
// An array of product objects
import type { Product } from "../products";
import ProductCard from "./ProductCard";

type LayoutProps = {
  content: string;
  main: JSX.Element[];
};

const processLayout = (content: string, main: JSX.Element[]) => {
  switch (content) {
    case "products":
      return <main>{main}</main>;
    case "cart":
      return <p>cart</p>;
    case "description":
      return <p>product description</p>;
    case "about":
      return <p>about page</p>;
    case "checkout":
      return <p>checkout</p>;
    default:
      return <p>no main content</p>;
  }
};

const Layout = ({ content, main }: LayoutProps) => (
  <>
    <SEO />
    <Header />
    {processLayout(content, main)}
    <Footer />
  </>
);

export default Layout;
