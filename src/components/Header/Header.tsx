import styled from "styled-components";
import Logo from "../icons/LogoIcon";
import Box from "../Reusable/Box";
import HeaderButton from "./HeaderButton";
import LocationIcon from "../icons/LocationIcon";
import HeaderCartIcon from "../icons/HeaderCartIcon";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 32px 20px;
  min-height: 104px;
  margin-bottom: 20px;
  background-color: #FAFAFA;
  border-bottom: 3px solid #F3F2F2;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  width: 100%;
`;

const CartCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -8px;
  right: -8px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #C47F17;
`;

const CountText = styled.span`
  color: white;
  font-size: 12px;
  font-weight: 700;
  line-height: 15.6px;
  letter-spacing: -0.06em;
`;

function Header() {
  const { total } = useCart();
  const navigate = useNavigate();

  function handleClick() {
    if (total > 0) {
      navigate("cart");
    }
  }

  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Box direction="row" gap="12px">
          <HeaderButton color="#4B2995" backgroundColor="#EBE5F9">
            <LocationIcon />
            <span>João Pessoa, PB</span>
          </HeaderButton>
          <HeaderButton backgroundColor="#F1E9C9" onClick={handleClick}>
            {total > 0 ? (
              <CartCount>
                <CountText>
                  {total}
                </CountText>
              </CartCount>
            ) : ""}
            <HeaderCartIcon />
          </HeaderButton>
        </Box>
      </Container>
    </StyledHeader>
  );
}

export default Header;
