import styled from "styled-components";
import Logo from "../icons/LogoIcon";
import Box from "../Box";
import HeaderButton from "./HeaderButton";
import LocationIcon from "../icons/LocationIcon";
import HeaderCartIcon from "../icons/HeaderCartIcon";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 32px 20px;
  min-height: 104px;
  background-color: #FAFAFA;
  border-bottom: 3px solid #F3F2F2;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  width: 100%;
`

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Box
          direction="row"
          gap="12px"
        >
          <HeaderButton
            color="#4B2995"
            backgroundColor="#EBE5F9"
          >
            <LocationIcon />
            <span>João Pessoa, PB</span>
          </HeaderButton>
          <HeaderButton
            backgroundColor="#F1E9C9"
          >
            <HeaderCartIcon />
          </HeaderButton>
        </Box>
      </Container>
    </StyledHeader>
  );
}

export default Header;