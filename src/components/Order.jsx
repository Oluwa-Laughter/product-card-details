import styled from "styled-components";

export default function Order() {
  return (
    <Container>
      <img src="/images/icon-order-confirmed.svg" alt="confirm" />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>

      <OrderedItem>
        <li>
          <img src="" alt="" />
        </li>
      </OrderedItem>
    </Container>
  );
}

const Container = styled.article`
  max-width: 50rem;
  padding: 1.6rem;
`;

const OrderedItem = styled.ul``;
