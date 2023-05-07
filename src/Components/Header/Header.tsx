import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

import BurgerMenu from "./BurgerMenu";

import Logo from "../../assets/starter-code/assets/shared/logo.svg";
import BurgerMenuIcon from "../../assets/starter-code/assets/shared/icon-hamburger.svg";

export default function Header() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Container>
      <img src={Logo} alt="Website Logo" className="logo" />
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
        className="burgerIcon"
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

  @media (min-width: 768px) {
    padding: 0;

    .logo {
      margin: 24px 0 0 39px;
    }

    .burgerIcon {
      display: none;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 37px;
  justify-content: center;
  padding: 39px 48px;
  display: none;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);

  a {
    text-decoration: none;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;
