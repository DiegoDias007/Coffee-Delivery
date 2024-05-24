import styled from "styled-components";

const StyledOrderLogo = styled.img`
  width: 450px;
  height: 270px;

  @media (max-width: 600px) {
    width: 320px;
    height: 235px;
  }
`

function OrderLogo() {
  return (
    <StyledOrderLogo src="order-logo.png"/>
  )
}

export default OrderLogo;