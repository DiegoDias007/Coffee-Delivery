import styled from "styled-components";

const Image = styled.img`
  @media (max-width: 800px) {
    width: 80%;
    height: 80%;
  }
`

function HomeLogo() {
  return (
    <Image src="home.png" />
  )
}

export default HomeLogo;