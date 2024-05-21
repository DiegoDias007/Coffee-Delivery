import styled from "styled-components";
import CoffeeList from "./CoffeeList";
import PricesSummary from "./PricesSummary";
import ConfirmOrderButton from "./ConfirmOrderButton";

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 24px;
  border-radius: 6px 44px;
  background-color: #F3F2F2;
`

const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 22.4px;
  text-align: left;
  font-variation-settings: 'wdth' 100;
  color: white;
`

function Summary() {


  return (
    <StyledSummary>
      <CoffeeList />
      <PricesSummary />
      <ConfirmOrderButton>
        <ButtonText>
          CONFIRMAR PEDIDO
        </ButtonText>
      </ConfirmOrderButton>
    </StyledSummary>
  );
}

export default Summary;