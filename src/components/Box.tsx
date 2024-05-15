import styled from "styled-components";

type BoxType = {
	direction: string;
	gap: string;
};

const Box = styled.div<BoxType>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: ${(props) => props.direction};
	gap: ${(props) => props.gap};
`;

export default Box;
