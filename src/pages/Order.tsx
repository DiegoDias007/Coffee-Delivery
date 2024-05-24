import styled from "styled-components";
import Box from "../components/Reusable/Box";
import OrderCard from "../components/Order/OrderCard";
import OrderLogo from "../components/Order/OrderLogo";

const StyledOrder = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
  margin: 50px 20px;
  gap: 20px;
`

const H1 = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 41.6px;
  color: #C47F17;
`

const InsideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  font-variation-settings: 'wdth' 100;
  color: #403937;
`

function Order() {
  return (
    <StyledOrder>
      <Container>
        <Box direction="column" gap="5px">
          <H1>Uhu! Pedido confirmado</H1>
          <H2>Agora é só aguardar que logo o café chegará até você</H2>
        </Box>
        <InsideContainer>
          <OrderCard />
          <OrderLogo />
        </InsideContainer>
      </Container>
    </StyledOrder>
  );
}

export default Order;