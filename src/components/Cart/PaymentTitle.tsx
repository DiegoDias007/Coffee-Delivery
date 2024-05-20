import styled from "styled-components";
import Box from "../Box";
import DollarIcon from "../icons/DollarIcon";

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

function PaymentTitle() {
  return (
    <Box direction="row" gap="5px">
      <DollarIcon />
      <Box direction="column" gap="2px">
        <H1>Pagamento</H1>
        <H2>O pagamento é feito na entrega. Escolha a forma que deseja pagar</H2>
      </Box>
    </Box>
  );
}

export default PaymentTitle;