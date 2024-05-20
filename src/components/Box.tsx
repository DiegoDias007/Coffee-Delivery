import styled from "styled-components";

type BoxType = {
	direction: string;
	gap: string;
  align?: string;
  justify?: string;
  width?: string;
};

const Box = styled.div<BoxType>`
	display: flex;
	align-items: ${(props) => props.align};
	justify-content: ${(props) => props.justify};
	flex-direction: ${(props) => props.direction};
	gap: ${(props) => props.gap};
  width: ${(props) => props.width};
`;

export default Box;
