import styled from "styled-components";
import Box from "../Box";
import HomeCartIcon from "../icons/HomeCartIcon";
import BoxIcon from "../icons/BoxIcon";
import ClockIcon from "../icons/ClockIcon";
import CoffeeIcon from "../icons/CoffeeIcon";

const Grid = styled.div`
  display: grid;
  text-align: left;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  max-width: 700px;
  gap: 20px;
  width: 100%;
  height: 100%;

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

function HomeGrid() {
  return (
    <Grid>
      <Box direction="row" gap="12px" align="center">
        <HomeCartIcon />
        <Text>Compra simples e segura</Text>
      </Box>
      <Box direction="row" gap="12px" align="center">
        <BoxIcon />
        <Text>Embalagem mantém o café intacto</Text>
      </Box>
      <Box direction="row" gap="12px" align="center">
        <ClockIcon />
        <Text>Entrega rápida e rastreada</Text>
      </Box>
      <Box direction="row" gap="12px" align="center">
        <CoffeeIcon />
        <Text>O café chega fresquinho até você</Text>
      </Box>
    </Grid>
  );
}

export default HomeGrid;
