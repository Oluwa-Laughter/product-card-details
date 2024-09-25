import styled from "styled-components";
import SideBar from "./components/Sidebar.jsx";
import data from "../data.json";
import ProductContainer from "./components/ProductContainer.jsx";
// import { useEffect, useState } from "react";

export default function App() {
  const productData = data;
  return (
    <Container>
      <ProductContainer data={productData} />
      <SideBar />
    </Container>
  );
}

const Container = styled.section`
  padding: 6rem;
  max-width: 130rem;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 3rem;

  @media (max-width: 64em) {
    grid-template-columns: 1fr;
    margin: 1rem auto;
    padding: 1rem;
  }

  @media (max-width: 47.5rem) {
    grid-template-columns: 1fr;
    margin: 1rem auto;
    padding: 1rem;
  }
`;
