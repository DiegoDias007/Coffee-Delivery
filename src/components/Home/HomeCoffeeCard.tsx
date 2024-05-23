import { useState } from "react";
import { Coffee } from "../../@types/coffee.type";
import styled from "styled-components";
import HomePrice from "./HomePrice";
import HomeCount from "./HomeCount";
import HomeMainCartIcon from "../icons/HomeMainCartIcon";
import { useCart } from "../../hooks/useCart";
import { toast } from "sonner";

const StyledHomeCoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #F3F2F2;
  border-radius: 6px 36px;
  min-height: 260px;
  margin: 25px 0px;
  gap: 10px;
  padding: 20px; 
`

const Image = styled.img`
  position: absolute;
  top: -20px;
`

const Name = styled.h1`
  font-family: "Baloo 2", sans-serif;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  margin-top: 100px;
  color: #403937;
`

const Description = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18.2px;
  text-align: center;
  color: #706765;
`

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  gap: 10px;
`

const BottomRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`

function HomeCoffeeCard({ id, name, description, src, price }: Coffee) {
  const [count, setCount] = useState<number>(1);
  const { addCoffee } = useCart(); 
  
  function handleClick() {
    const newCoffee = {
      id,
      name,
      description,
      src,
      price,
      count,
    }
    addCoffee(newCoffee);
    setCount(1);
    toast.success(`${newCoffee.name} adicionado ao carrinho.`)
  }

  return (
    <StyledHomeCoffeeCard>
      <Image src={src} />
      <Name>{name}</Name>
      <Description>{description}</Description>
      <BottomContainer >
        <HomePrice price={price} />
        <BottomRightContainer>
          <HomeCount 
            count={count}
            setCount={setCount}
          />
          <HomeMainCartIcon 
            onClick={handleClick}
          />
        </BottomRightContainer>
      </BottomContainer>
    </StyledHomeCoffeeCard>
  )
}

export default HomeCoffeeCard;