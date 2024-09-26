import styled from "styled-components";

export default function Product({ item, addOrder }) {
  console.log(item);
  return (
    <Card>
      <img src={item.image.desktop} alt="" />
      <button onClick={addOrder}>
        <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
        <span>Add to Cart</span>
      </button>

      <figure>
        <p>{item.category}</p>
        <h3>{item.name}</h3>
        <span>${item.price}</span>
      </figure>
    </Card>
  );
}

const Card = styled.li`
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
  }

  button {
    display: flex;
    gap: 1rem;
    align-items: center;
    border: 1px solid var(--Rose-300);
    border-radius: 2.4rem;
    padding: 0.8rem 1.6rem;
    background: var(--Rose-50);
    position: absolute;
    bottom: 27%;
    z-index: 999;
    right: 25%;
    cursor: pointer;
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
      width: 2rem;
      height: 2rem;
    }

    span {
      font-size: 1.4rem;
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
