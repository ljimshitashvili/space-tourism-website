import styled from "styled-components";
import Logo from "../../assets/starter-code/assets/shared/logo.svg";
import BurgerMenuIcon from "../../assets/starter-code/assets/shared/icon-hamburger.svg";

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="Website Logo" />
      <img src={BurgerMenuIcon} alt="Menu Icon" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
