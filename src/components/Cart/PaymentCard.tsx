import styled from "styled-components"
import PaymentTitle from "./PaymentTitle"
import Box from "../Reusable/Box"
import Buttons from "./Buttons"

const StyledPaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  gap: 32px;
  border-radius: 6px;
  background-color: #F3F2F2;

  @media (max-width: 500px) {
    padding: 20px 10px;
  }
`

interface PaymentCardProps {
  activePayment: string;
  setActivePayment: React.Dispatch<React.SetStateAction<string>>;
}

function PaymentCard({ activePayment, setActivePayment }: PaymentCardProps) {
  return (
    <StyledPaymentCard>
      <PaymentTitle />
      <Box 
        direction="row"
        gap="12px"
        align="center"
        width="100%"
      >
        <Buttons 
          activePayment={activePayment}
          setActivePayment={setActivePayment}
        />
      </Box>
    </StyledPaymentCard>
  )
}

export default PaymentCard;