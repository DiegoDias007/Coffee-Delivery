import styled from "styled-components";
import CartForm from "../components/Cart/CartForm";
import PaymentCard from "../components/Cart/PaymentCard";
import Summary from "../components/Cart/Summary";
import { useState } from "react";

const StyledCart = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  max-width: 1120px;
  width: 100%;
  margin: 0px 20px;
  gap: 30px;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  gap: 10px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 23.4px;
`

function Cart() {
  const [activePayment, setActivePayment] = useState<string>("");

  return (
    <StyledCart>
      <Container>
        <LeftContainer>
          <Title>Complete seu pedido</Title>
          <CartForm 
            activePayment={activePayment}
          />
          <PaymentCard 
            activePayment={activePayment}
            setActivePayment={setActivePayment}
          />
        </LeftContainer>
        <RightContainer>
          <Title>Cafés selecionados</Title>
          <Summary />
        </RightContainer>
      </Container>
    </StyledCart>
  );
}

export default Cart;