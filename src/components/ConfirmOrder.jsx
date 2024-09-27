import styled from "styled-components";

export default function ConfirmOrder({
  cartItems,
  handleResetCart,
  totalAmount,
}) {
  return (
    <Container>
      <Content>
        <article>
          <div>
            <img src="/images/icon-order-confirmed.svg" alt="confirm" />
            <h3>Order Confirmed</h3>
            <p>We hope you enjoy your food!</p>
          </div>

          <Orders>
            {cartItems.map((item) => (
              <li key={item.id}>
                <figure>
                  <img src={item.image.thumbnail} alt="" />
                  <span>
                    <p>{item.name}</p>
                    <p>
                      <span>{item.order}X</span>
                      <span>@ ${item.price.toFixed(2)}</span>
                    </p>
                  </span>
                </figure>

                <p>${(item.order * item.price).toFixed(2)}</p>
              </li>
            ))}
            <TotalAmount>
              <span>Order Total</span>
              <h4>${totalAmount.toFixed(2)}</h4>
            </TotalAmount>
          </Orders>

          <RestartBtn onClick={handleResetCart}>Start New Order</RestartBtn>
        </article>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  width: 100%;
  max-width: 40rem;
  background-color: #fff;
  height: fit-content;
  overflow: initial;
  border-radius: 0.5rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;

  article {
    display: flex;
    gap: 1.4rem;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      width: 100%;

      img {
        width: 4rem;
        height: 4rem;
      }

      h3 {
        font-size: 3rem;
        color: var(--Rose-900);
        font-weight: 900;
      }

      p {
        font-size: 1.2rem;
        color: var(--Rose-500);
      }
    }
  }
`;

const Orders = styled.ul`
  width: 100%;
  background: var(--Rose-50);
  padding: 1.2rem;
  list-style: none;
  margin: 0;
  border-radius: 1rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid var(--Rose-300);
    padding: 1rem 1.4rem;
    width: 100%;
    figure {
      display: flex;
      gap: 1rem;

      flex: 90%;
      img {
        width: 4rem;
        height: 4rem;
        border-radius: 0.5rem;
      }

      span {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        p {
          font-size: 1.2rem;

          &:first-child {
            font-size: 1.4rem;
            font-weight: 400;
            color: var(--Rose-900);
          }
        }
      }
    }
    p {
      font-size: 1.4rem;
      color: var(--Rose-500);
    }
  }
`;

const TotalAmount = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  span {
    font-size: 1.2rem;
    color: var(--Rose-500);
  }

  h4 {
    font-size: 2rem;
    color: var(--Rose-900);
    font-weight: 900;
  }
`;

const RestartBtn = styled.button`
  margin-top: 2rem;
  padding: 1rem;
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
