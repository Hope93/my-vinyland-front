import { useState, useEffect } from "react";
import type { Product } from "../products";
import { useAppContext } from "../context/app-context";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { cart, dispatch } = useAppContext();

  // initial amount in cart of this item
  const defaultAmount =
    cart.length > 0
      ? cart.filter((cartProduct) => cartProduct.id == product.id).length
      : null;
  const [amount, setAmount] = useState<number | null>(defaultAmount);

  // any updates to cart are reflected here in the amount
  useEffect(() => {
    const prodAmount = cart.filter(
      (cartProduct) => cartProduct.id == product.id
    ).length;

    setAmount(prodAmount > 0 ? prodAmount : null);
  }, [cart]);

  return (
    <div>
      <img src={product.image} />
      <p>{product.category.name}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button
        onClick={() => {
          dispatch({ type: "ADD_PRODUCT", product });
        }}
      >
        Add to cart
        <svg viewBox="0 0 24 24">
          <path
            d="M10 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5-1.5a1.5 1.5
          0 100 3 1.5 1.5 0 000-3zm1.336-5l1.977-7H0l2.938
          7h11.898zm4.969-10l-3.432 12H3.776l.839 2h13.239l3.474-12h1.929L24
          3h-4.195z"
          />
        </svg>
        <div>{amount}</div>
      </button>
    </div>
  );
};

export default ProductCard;
