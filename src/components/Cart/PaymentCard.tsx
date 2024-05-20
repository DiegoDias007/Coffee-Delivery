import styled from "styled-components"
import PaymentTitle from "./PaymentTitle"
import Box from "../Box"
import Buttons from "./Buttons"

const StyledPaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  gap: 32px;
  border-radius: 6px;
  background-color: #F3F2F2;
`

function PaymentCard() {
  return (
    <StyledPaymentCard>
      <PaymentTitle />
      <Box 
        direction="row"
        gap="12px"
        align="center"
        width="100%"
      >
        <Buttons />
      </Box>
    </StyledPaymentCard>
  )
}

export default PaymentCard;