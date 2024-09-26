import styled from "styled-components";
import SideBar from "./components/Sidebar.jsx";
import data from "../data.json";
import ProductContainer from "./components/ProductContainer.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [newProductData, setNewProductData] = useState([]);

  useEffect(() => {
    const updateData = data.map((item, index) => ({
      ...item,
      id: index,
      order: 0,
    }));
    setNewProductData(updateData);
  }, []);

  const addOrder = (id, quantity) => {
    const updateItem = newProductData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          order: quantity,
        };
      }
      return item;
    });

    setNewProductData(updateItem);
  };

  const removeOrder = (id, quantity) => {
    const updateItem = newProductData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          order: quantity,
        };
      }
      return item;
    });
    setNewProductData(updateItem);
  };

  const handleDelete = (id) => {
    const updatedData = newProductData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          order: 0,
        };
      }
      return item;
    });
    setNewProductData(updatedData);
  };

  return (
    <Container>
      <ProductContainer
        newProductData={newProductData}
        addOrder={addOrder}
        removeOrder={removeOrder}
        onDelete={handleDelete}
      />
      <SideBar onDelete={handleDelete} newProductData={newProductData} />
    </Container>
  );
}

const Container = styled.section`
  padding: 6rem;
  max-width: 130rem;
  margin: 1rem auto;
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
