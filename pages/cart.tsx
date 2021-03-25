import Link from "next/link";
import Layout from "../components/Layout";
import { useAppContext } from "../context/app-context";
import { getTotalPrice } from "../utils/cart";
import { Table, Row, Col } from "reactstrap";

const Cart = () => {
  const { cart, dispatch } = useAppContext();

  const title = "Your Cart";
  return (
    <Layout headerTitle={title}>
      {cart.length > 0 ? (
        <>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.item.id}>
                  <td>{<img src={product.item.image} />}</td>
                  <td>
                    {product.item.name}
                    {product.item.discountedPrice}
                    {product.item.price}
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_ONE", id: product.item.id })
                      }
                    >
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2
                      17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373
                      12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z"
                        />
                      </svg>
                    </button>
                    {product.quantity}
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_PRODUCT", item: product.item })
                      }
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
                      </svg>
                    </button>
                  </td>
                  <td>
                    {product.totalPrice.toFixed(2)}
                    <button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_PRODUCT",
                          id: product.item.id,
                        })
                      }
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M9 19a1 1 0 01-2 0V9a1 1 0 012 0v10zm4 0a1 1 0 01-2 0V9a1 1 0 012 0v10zm4 0a1 1 0 01-2 0V9a1 1 0 012 0v10zm5-17v2H2V2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2H22zm-3 4v16H5V6H3v18h18V6h-2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <Row>Total</Row>
                  <Row>{getTotalPrice(cart).toFixed(2)}</Row>
                </td>
                <td></td>
                <td></td>
                <td>
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
