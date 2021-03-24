import Layout from "../components/Layout";
import { useAppContext } from "../context/app-context";
import ProductCard from "../components/ProductCard";
import vinylProducts, { Product } from "../products";
import React from "react";

const Home = () => {
  const title = "Vinyls List";
  // need to keep track of state and local storage for cart
  const products = vinylProducts.map((product: Product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <Layout headerTitle={title}>{products}</Layout>
    </>
  );
};

export default Home;
