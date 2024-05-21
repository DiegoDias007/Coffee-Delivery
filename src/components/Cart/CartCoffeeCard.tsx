import styled from "styled-components"
import Box from "../Reusable/Box";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import CartCount from "./CartCount";
import DeleteButton from "./DeleteButton";

const StyledCartCoffeeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 4px;
  border-bottom: 1px solid #E6E5E5;
`

const Name = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
`

const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;
`

interface CoffeeListProps {
  id: number;
  name: string;
  price: number;
  src: string;
  initialCount: number;
}

function CartCoffeeCard({ id, name, price, src, initialCount }: CoffeeListProps) {
  const [count, setCount] = useState<number>(initialCount);
  const { updateCount } = useCart();

  function updateCoffeeCount(newCount: number) {
    setCount(newCount);
    updateCount(id, newCount);
  }

  return (
    <StyledCartCoffeeCard>
      <Box direction="row"gap="15px"align="center">
        <img src={src} width="64px" height="64px" />
        <Box direction="column" gap="5px" align="start">
          <Name>{name}</Name>
          <Box direction="row" gap="5px">
            <CartCount count={count} updateCount={updateCoffeeCount}/>
            <DeleteButton id={id}/>
          </Box>
        </Box>
      </Box>
      <Price>
        <span>R$ </span>
        <span>{(count * price).toFixed(2)}</span>
      </Price>
    </StyledCartCoffeeCard>
  );
}

export default CartCoffeeCard;
