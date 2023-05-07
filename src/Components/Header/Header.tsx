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
        <Link to="/">
          <span>00 </span> HOME
        </Link>
        <Link to="destination">
          <span>01 </span> DESTINATION
        </Link>
        <Link to="crew">
          <span>02 </span> CREW
        </Link>
        <Link to="techonolgy">
          <span>03 </span> TECHNOLOGIES
        </Link>
        <hr />
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
      margin: 24px 0 0 55px;
    }

    .burgerIcon {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    gap: 50px;
    padding: 40px 0;

    .logo {
      margin: 0 0 0 55px;
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

  hr {
    display: none;
  }

  a {
    text-decoration: none;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    color: #ffffff;

    span {
      display: none;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 57%;
    position: relative;

    hr {
      display: block;
      width: 473px;
      height: 1px;
      background-color: white;
      opacity: 0.25;
      position: absolute;
      left: -443px;
      top: 50%;
      border: none;
    }

    a {
      display: flex;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      gap: 11px;
      span {
        font-weight: 700;
        display: block;
      }
    }
  }
`;
