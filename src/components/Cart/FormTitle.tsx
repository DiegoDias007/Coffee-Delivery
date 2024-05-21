import styled from "styled-components";
import Box from "../Reusable/Box";
import CartLocationIcon from "../icons/CartLocationIcon";

const H1 = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
`

const H2 = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
`

function FormTitle() {
  return (
    <Box direction="row" gap="5px">
      <CartLocationIcon />
      <Box direction="column" gap="2px">
        <H1>Endereço de entrega</H1>
        <H2>Informe o endereço onde deseja receber seu pedido</H2>
      </Box>
    </Box>
  );
}

export default FormTitle;