import styled from "styled-components";

const RS = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
  color: #574F4D;
  margin-right: 2px;
`

const Price = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 31.2px;  
  color: #574F4D;
`

interface HomePriceProps {
  price: number;
}

function HomePrice({ price }: HomePriceProps) {
  return (
    <div>
      <RS>R$</RS>
      <Price>{price + '0'}</Price>
  </div>
  );
}

export default HomePrice;