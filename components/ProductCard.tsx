import { useState, useEffect } from "react";
import type { Product } from "../products";
import { useAppContext } from "../context/app-context";
import { getProductAmount } from "../utils/cart";

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
    <div>
      <img src={product.image} />
      <p>{product.category.name}</p>
      <p>{product.name}</p>
      <p>{product.discountedPrice ? product.discountedPrice : product.price}</p>
      <button
        onClick={() => {
          dispatch({ type: "ADD_PRODUCT", item: product });
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
        {amount > 0 && <div>{amount}</div>}
      </button>
    </div>
  );
};

export default ProductCard;
