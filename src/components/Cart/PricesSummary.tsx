import styled from "styled-components"
import { useCart } from "../../hooks/useCart";

const StyledPricesSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Small = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20.8px;
  color: #574F4D;
`

const Medium = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
  color: #574F4D;
`

const Big = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  color: #403937;
`

function PricesSummary() {
  const { cart } = useCart();
  const DELIVERY = 3.50;
  let totalCoffeePrice = 0; cart.forEach((c) => totalCoffeePrice += c.price * c.count);

  return (
    <StyledPricesSummary>
      <Container>
        <Small>Total de itens</Small>
        <Medium>R$ {totalCoffeePrice.toFixed(2)}</Medium>
      </Container>
      <Container>
        <Small>Entrega</Small>
        <Medium>R$ {DELIVERY.toFixed(2)}</Medium>
      </Container>
      <Container>
        <Big>Total</Big>
        <Big>R$ {(totalCoffeePrice + DELIVERY).toFixed(2)}</Big>
      </Container>
    </StyledPricesSummary>
  );
}

export default PricesSummary;