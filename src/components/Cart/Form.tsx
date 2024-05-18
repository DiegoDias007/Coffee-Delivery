import styled from "styled-components";
import Input from "./Input";

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(350px, 1fr);
  gap: 10px;
  width: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

function Form() {
  return (
    <FormGrid>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input colStart="1" colEnd="3"/>
    </FormGrid>
  );
}

export default Form;