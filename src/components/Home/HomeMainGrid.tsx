import styled from "styled-components";

const HomeMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  width: 100%;
  gap: 15px;  
`

export default HomeMainGrid;
