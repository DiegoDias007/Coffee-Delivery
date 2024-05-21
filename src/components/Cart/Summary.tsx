import styled from "styled-components";
import CoffeeList from "./CoffeeList";

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 24px;
  border-radius: 6px 44px;
  background-color: #F3F2F2;
`

function Summary() {
  return (
    <StyledSummary>
      <CoffeeList />   
    </StyledSummary>
  );
}

export default Summary;