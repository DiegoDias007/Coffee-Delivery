import styled from "styled-components";
import Form from "./Form";
import FormTitle from "./FormTitle";

const StyledCartForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  border-radius: 6px;
  gap: 30px;
  width: 100%;
  background-color: #F3F2F2;
`

interface CartFormProps {
  activePayment: string;
}

function CartForm({ activePayment }: CartFormProps) {
  return (
    <StyledCartForm>
      <FormTitle />
      <Form activePayment={activePayment}/>
    </StyledCartForm>
  );
}

export default CartForm;