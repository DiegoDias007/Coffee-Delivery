import styled from "styled-components";

type InputType = {
  colStart?: string;
  colEnd?: string;
  rowStart?: string;
  rowEnd?: string;
}

const Input = styled.input<InputType>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #E6E5E5;
  background-color: #EDEDED;

  grid-column: ${({ colStart, colEnd }) => colStart && colEnd ? `${colStart} / ${colEnd}` : 'auto'};
  grid-row: ${({ rowStart, rowEnd }) => rowStart && rowEnd ? `${rowStart} / ${rowEnd}` : 'auto'};
`

export default Input;