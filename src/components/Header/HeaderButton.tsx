import styled from "styled-components";

type HeaderButtonType = {
  color?: string;
  backgroundColor?: string;
}

const HeaderButton = styled.div<HeaderButtonType>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`

export default HeaderButton;