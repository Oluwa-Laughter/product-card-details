import styled from "styled-components";
import Product from "./Product.jsx";

export default function ProductContainer({ data }) {
  console.log(data);
  return (
    <Container>
      <h1>Desserts</h1>
      <ProductList>
        {data.map((data) => (
          <Product items={data} key={data.name} />
        ))}
      </ProductList>
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  h1 {
    font-size: 3rem;
    font-weight: 900;
    color: var(--Rose-900);
    margin-bottom: 2rem;
  }
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  list-style: none;
  column-gap: 2rem;
  row-gap: 1rem;

  @media (max-width: 64em) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 47.5rem) {
    grid-template-columns: minmax(0, 1fr);
  }
`;
