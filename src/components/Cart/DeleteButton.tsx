import styled from "styled-components"
import TrashIcon from "../icons/TrashIcon"
import { useCart } from "../../hooks/useCart"

const StyledDeleteButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0px 10px;
  gap: 4px;
  cursor: pointer;
  background-color: #E6E5E5;
`

const Text = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 19.2px;
  color: #574F4D;  
`

interface DeleteButtonProps {
  id: number;
}

function DeleteButton({ id }: DeleteButtonProps) {
  const { removeCoffee } = useCart();
  
  return (
    <StyledDeleteButton onClick={() => removeCoffee(id)}>
      <TrashIcon />
      <Text>REMOVER</Text>
    </StyledDeleteButton>
  );
}

export default DeleteButton;