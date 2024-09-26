import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Product({ items, onAddOrder, onRemoveOrder }) {
  const [quantity, setQuantity] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (items.order === 0) {
      setQuantity(0);
      setIsInCart(false);
    }
  }, [items.order]);

  const handleAddOrder = () => {
    onAddOrder(items.id, 1);
    setQuantity(1);
    setIsInCart(true);
  };

  const handleIncrement = () => {
    onAddOrder(items.id, quantity + 1);
    setQuantity((q) => q + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
      onRemoveOrder(items.id, quantity - 1);
    } else {
      setQuantity(0);
      setIsInCart(false);
      onRemoveOrder(items.id, 0);
    }
  };

  return (
    <ProductCard isInCart={isInCart}>
      <img src={items.image.desktop} alt="" />
      {quantity === 0 ? (
        <button onClick={handleAddOrder}>
          <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
          <span>Add to Cart</span>
        </button>
      ) : (
        <button>
          <img
            src="/images/icon-decrement-quantity.svg"
            alt="decrease"
            onClick={handleDecrement}
          />
          <span>{quantity}</span>
          <img
            src="/images/icon-increment-quantity.svg"
            alt="increase"
            onClick={handleIncrement}
          />
        </button>
      )}

      <figure>
        <p>{items.category}</p>
        <h3>{items.name}</h3>
        <span>${items.price}</span>
      </figure>
    </ProductCard>
  );
}

const ProductCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1.4rem;
  align-items: flex-start;
  position: relative;
  img {
    width: 100%;
    border-radius: 9px;
    overflow: hidden;
    border: ${(props) => (props.isInCart ? "3px solid var(--Red)" : "none")};
  }

  button {
    display: flex;
    align-items: center;
    border: ${(props) =>
      props.isInCart ? "none" : "1px solid var(--Rose-300)"};
    gap: 1.4rem;
    border-radius: 2.4rem;
    padding: 0.8rem 2rem;
    background: ${(props) =>
      props.isInCart ? "var(--Red)" : "var(--Rose-50)"};
    position: absolute;
    bottom: 27%;
    z-index: 999;
    right: 25%;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      border: 1px solid var(--Red);
      color: var(--Red);
    }

    @media (max-width: 64em) {
      bottom: 15%;
      z-index: 999;
      right: 35%;
    }

    @media (max-width: 47.5em) {
      bottom: 20%;
      z-index: 999;
      right: 30%;
    }

    img,
    svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    span {
      font-size: 1.4rem;
      color: ${(props) => (props.isInCart ? "var(--Rose-50)" : "var(--Red)")};
    }
  }

  figure {
    p {
      font-size: 1.6rem;
      color: var(--Rose-300);
    }

    h3 {
      font-size: 1.8rem;
      color: var(--Rose-500);
    }
    span {
      font-size: 1.4rem;
      color: var(--Red);
    }
  }

  @media (max-width: 64em) {
    img {
      width: 100%;
    }
  }

  @media (max-width: 47.5rem) {
    img {
      width: 100%;
    }
  }
`;
