import styled from "styled-components"

const StyledPaymentButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 12px;
  border: 0;
  padding: 16px;
  border-radius: 6px;
  gap: 12px;
  width: 100%;
  background-color: #E6E5E5;
  
  // Text
  font-size: 11px;
  font-weight: 500;
  line-height: 19.2px;
  color: #574F4D;

  &:hover {
    color: #403937;
    background-color: #D7D5D5;
  }
`

interface PaymentButtonInterface { 
  children: React.ReactNode
}

function PaymentButton({ children }: PaymentButtonInterface) {
  return (
    <StyledPaymentButton>
      {children}
    </StyledPaymentButton>
  )
}

export default PaymentButton;