import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/starter-code/assets/shared/logo.svg";
import BurgerMenuIcon from "../../assets/starter-code/assets/shared/icon-hamburger.svg";

import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Container>
      <img src={Logo} alt="Website Logo" />
      <ButtonContainer>
        <Link to="/">HOME</Link>
        <Link to="destination">DESTINATION</Link>
        <Link to="crew">CREW</Link>
        <Link to="techonolgy">TECHNOLOGIES</Link>
      </ButtonContainer>
      <img
        onClick={() => {
          setActive(!active);
        }}
        src={BurgerMenuIcon}
        alt="Menu Icon"
      />
      <BurgerMenu active={active} setActive={setActive} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 37px;
  justify-content: center;
  display: none;
`;
