import styled from "styled-components";
import Box from "../Reusable/Box";

const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;
  color: #272221;  
`

const Title2 = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
`

function HomeMainTitle() {
	return (
		<Box direction="column" gap="16px">
			<Title>Encontre o café perfeito para qualquer hora do dia</Title>
			<Title2>
				Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
			</Title2>
		</Box>
	);
}

export default HomeMainTitle;
