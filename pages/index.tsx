import { InferGetServerSidePropsType } from "next";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import vinylProducts, { Product } from "../products";

const Home = () => {
  const products = vinylProducts.map((product: Product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <Layout content="products" main={products} />
    </>
  );
};

export default Home;
