import styled from "styled-components";
import { produitsPopulaires } from "../data";
import Produit from "./Produit";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Produits = () => {
  return (
    <Container>
      {produitsPopulaires.map((item) => (
        <Produit item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Produits;