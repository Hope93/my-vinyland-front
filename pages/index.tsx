import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import vinylProducts, { Product } from "../products";

const Home = () => {
  // need to keep track of state and local storage for cart
  const products = vinylProducts.map((product: Product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <Layout>
        {products}
      </Layout>
    </>
  );
};

export default Home;
