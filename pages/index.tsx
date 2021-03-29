import Layout from "../components/layout";
import ProductCard from "../components/product-card";
import vinylProducts, { Product } from "../products";
import React from "react";
import {
  Container,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
} from "reactstrap";

const Home = () => {
  const title = "Vinyls List";
  // need to keep track of state and local storage for cart
  const products = vinylProducts.map((product: Product) => (
    <Col key={product.id} className="p-3 myCol">
      <ProductCard product={product} />
    </Col>
  ));

  return (
    <>
      <Layout headerTitle={title}>
        <div className="container myContainer">{products}</div>
      </Layout>
    </>
  );
};

export default Home;
