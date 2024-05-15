import styled from "styled-components";

const Image = styled.img`
  @media (max-width: 1150px) {
    display: none;
  }
`

function HomeLogo() {
  return (
    <Image src="home.png" />
  )
}

export default HomeLogo;