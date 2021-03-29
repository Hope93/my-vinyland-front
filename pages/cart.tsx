import Link from "next/link";
import Layout from "../components/layout";
import { useAppContext } from "../context/app-context";
import { getTotalPrice } from "../utils/cart";
import { Table, Row, Col, ButtonGroup, Button } from "reactstrap";

const Cart = () => {
  const { cart, dispatch } = useAppContext();

  const title = "Your Cart";
  return (
    <Layout headerTitle={title}>
      {cart.length > 0 ? (
        <>
          <Table>
            <thead>
              <tr className="row mx-0">
                <th className="col"></th>
                <th className="col">Product</th>
                <th className="col">Qty</th>
                <th className="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr className="row mx-0" key={product.item.id}>
                  <td className="col">{<img src={product.item.image} />}</td>
                  <td className="col">
                    <Row>{product.item.name}</Row>
                    <Row>
                      {product.item.discountedPrice
                        ? product.item.discountedPrice
                        : product.item.price}
                    </Row>
                  </td>
                  <td className="col">
                    <ButtonGroup>
                      <Button
                        onClick={() =>
                          dispatch({ type: "REMOVE_ONE", id: product.item.id })
                        }
                        className="p-1"
                      >
                        -
                      </Button>
                      <Button disabled className="p-1">
                        {product.quantity}
                      </Button>
                      <Button
                        onClick={() =>
                          dispatch({ type: "ADD_PRODUCT", item: product.item })
                        }
                        className="p-1"
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td className="col">
                    <div className="mr-1">
                      {product.totalPrice.toFixed(2)}
                    </div>
                    <Button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_PRODUCT",
                          id: product.item.id,
                        })
                      }
                      className="p-1"
                    >
                      <div>Remove All</div>
                    </Button>
                  </td>
                </tr>
              ))}
              <tr className="row mx-0">
                <td className="col">
                  <Row className="ml-1">Total</Row>
                  <Row className="ml-1">{getTotalPrice(cart).toFixed(2)}</Row>
                </td>
                <td className="col"></td>
                <td className="col"></td>
                <td className="col">
                  <Link href="/checkout">
                    <a>Go to checkout</a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      ) : (
        <>
          <div>Your cart is empty</div>
          <Link href="/">
            <a>Go back to shopping</a>
          </Link>
        </>
      )}
    </Layout>
  );
};

export default Cart;
