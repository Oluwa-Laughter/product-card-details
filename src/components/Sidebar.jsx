import styled from "styled-components";

export default function SideBar({ newProductData, onDelete }) {
  const cartItems = newProductData.filter((item) => item.order > 0);
  const totalAmount = cartItems.reduce(
    (price, item) => price + item.price * item.order,
    0
  );

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <Cart>
      <h2>Your Card ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <div>
          <img src="/images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <figure>
                  <p>{item.name}</p>
                  <p>
                    <span>{item.order}X</span>
                    <span>@ ${item.price.toFixed(2)}</span>
                    <span>${(item.order * item.price).toFixed(2)}</span>
                  </p>
                </figure>

                <button onClick={() => handleDelete(item.id)}>
                  <img src="/images/icon-remove-item.svg" alt="remove" />
                </button>
              </li>
            ))}
          </ul>

          <Total>
            <p>Order Total</p>
            <h4>${totalAmount.toFixed(2)}</h4>
          </Total>

          <Carbon>
            <img src="/images/icon-carbon-neutral.svg" alt="carbon-icon" /> This
            is a carbon-neutral delivery
          </Carbon>

          <ConfirmBtn>Confirm Order</ConfirmBtn>
        </>
      )}
    </Cart>
  );
}

const Cart = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  max-width: 35rem;
  height: fit-content;
  padding: 1.6rem;
  background: #fff;
  h2 {
    font-size: 1.6rem;
    color: var(--Red);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50%;
    }
    p {
      font-size: 1rem;
      color: var(--Rose-500);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.5px solid var(--Rose-300);
      padding: 1.2rem 0;

      figure {
        flex: 90%;
        p {
          display: flex;
          gap: 1rem;
          font-size: 1.2rem;
          &:first-child {
            margin-bottom: 1rem;
            font-size: 1.4rem;
            font-weight: 400;
            color: var(--Rose-900);
          }

          span:first-child {
            color: var(--Red);
            font-weight: 500;
          }
          &:first-child {
            color: var(--Rose-900);
            font-weight: 700;
          }

          &:nth-child(2) {
            color: var(--Rose-500);
          }
        }
      }

      button {
        flex: 10%;
        border-radius: 50%;
        background: none;
        border: none;
        cursor: pointer;
        img,
        svg {
          fill: var(--Red);
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
  }
`;

const Total = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;

  p {
    font-size: 1.2rem;
    color: var(--Rose-500);
  }

  h4 {
    font-size: 2rem;
    color: var(--Rose-900);
    font-weight: 900;
  }
`;

const Carbon = styled.p`
  text-align: center;
  background: var(--Rose-100);
  padding: 1.2rem;
  font-size: 1.2rem;
  color: var(--Rose-500);

  img,
  svg {
    height: 1.6rem;
    width: 1.6rem;
    margin-right: 0.5rem;
  }
`;

const ConfirmBtn = styled.button`
  margin-top: 2rem;
  padding: 1.4rem;
  font-size: 1.4rem;
  color: var(--Rose-50);
  width: 100%;
  background: var(--Red);
  border: 1px solid var(--Rose-500);
  border-radius: 2.5rem;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--Red);
    color: var(--Rose-300);
  }
`;
