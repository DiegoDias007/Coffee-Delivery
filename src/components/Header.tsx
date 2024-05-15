import styled from "styled-components";
import Logo from "./Logo";
import Box from "./Box";
import HeaderButton from "./HeaderButton";
import LocationIcon from "./LocationIcon";
import CartIcon from "./CartIcon";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  min-height: 104px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
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
            <CartIcon />
          </HeaderButton>
        </Box>
      </Container>
    </StyledHeader>
  );
}

export default Header;