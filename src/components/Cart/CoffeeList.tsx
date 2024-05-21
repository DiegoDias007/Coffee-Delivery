import { useCart } from "../../hooks/useCart"
import CartCoffeeCard from "./CartCoffeeCard";
import styled from "styled-components";

const StyledCoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

function CoffeeList() {
  const { cart } = useCart();
  
  return (
    <StyledCoffeeList>
      {cart.map((coffee) => {
        return <CartCoffeeCard 
          key={coffee.id}
          id={coffee.id}
          name={coffee.name}
          price={coffee.price}
          src={coffee.src}
          initialCount={coffee.count}
        />
      })}
    </StyledCoffeeList>
  );
}

export default CoffeeList;