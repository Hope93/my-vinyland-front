import { useState, useEffect } from "react";
import type { Product } from "../../products";
import { useAppContext } from "../../context/app-context";
import { getProductAmount } from "../../utils/cart";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  ButtonGroup,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import styles from "./style.module.css";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { cart, dispatch } = useAppContext();

  // initial amount in cart of this item
  const defaultAmount = getProductAmount(cart, product.id);
  const [amount, setAmount] = useState<number>(defaultAmount);

  // any updates to cart are reflected here in the amount
  useEffect(() => {
    setAmount(getProductAmount(cart, product.id));
  }, [cart]);

  return (
    <Card>
      <CardImg top src={product.image} />
      <CardBody>
        <CardTitle className="font-weight-bold ">
          {product.category.name}
        </CardTitle>
        <CardSubtitle className="text-secondary">{product.name}</CardSubtitle>

        <Container>
          <Row className={`${styles.row}`}>
            <div className="mr-1">
              {product.discountedPrice
                ? product.discountedPrice
                : product.price}
            </div>
            <ButtonGroup>
              <Button
                onClick={() => {
                  dispatch({ type: "ADD_PRODUCT", item: product });
                }}
              >
                Add to cart
              </Button>
              <Button disabled>{amount > 0 && amount}</Button>
            </ButtonGroup>
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
