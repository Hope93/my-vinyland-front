import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import vinylProducts, { Product } from "../products";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const Home = () => {
  const title = "Vinyls List";
  // need to keep track of state and local storage for cart
  const products = vinylProducts.map((product: Product) => (
    <Col key={product.id}>
      <ProductCard product={product} />
    </Col>
  ));

  return (
    <>
      <Layout headerTitle={title}>
        <Container>
          <Row>{products}</Row>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
