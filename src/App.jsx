import styled from "styled-components";
import SideBar from "./components/Sidebar.jsx";
import data from "../data.json";
import ProductContainer from "./components/ProductContainer.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [newProductData, setNewProductData] = useState([]);
  const [orderConfirm, setOrderConfirm] = useState(false);

  const handleDelete = (id) => {
    const deleteItem = newProductData.filter((item) => item.id !== id);
    setNewProductData(deleteItem);
  };

  useEffect(() => {
    const updateData = data.map((item, index) => ({
      ...item,
      order: 0,
      id: index,
    }));
    setNewProductData(updateData);
  }, []);

  const addOrder = (index) => {
    const addItem = newProductData.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          order: item.order + 1,
        };
      }
      return item;
    });

    setNewProductData(addItem);
  };

  return (
    <Container>
      <ProductContainer newProductData={newProductData} addOrder={addOrder} />
      <SideBar onDelete={handleDelete} newProductData={newProductData} />
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
