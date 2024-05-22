import styled, { css } from "styled-components"

const StyledPaymentButton = styled.button<{active: boolean}>`
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

  ${(props) => props.active && activeStyles}
  
  // Text
  font-size: 11px;
  font-weight: 500;
  line-height: 19.2px;
  color: #574F4D;

  ${(props) => !props.active && css`
    &:hover {
      color: #403937;
      background-color: #D7D5D5;
    }
  `}
`

const activeStyles = css`
  background-color: #EBE5F9;
  border: 1px solid #8047F8;
`

interface PaymentButtonInterface { 
  children: React.ReactNode;
  active: boolean;
  handleClick: () => void;
}

function PaymentButton({ children, active, handleClick }: PaymentButtonInterface) {
  return (
    <StyledPaymentButton active={active} onClick={handleClick}>
      {children}
    </StyledPaymentButton>
  )
}

export default PaymentButton;