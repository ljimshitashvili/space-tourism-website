import { styled } from "styled-components";

import CloseIcon from "../../assets/starter-code/assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

interface Props {
  active: boolean;
  setactive: (active: boolean) => void;
}

export default function BurgerMenu({ active, setactive }: Props) {
  return (
    <Container active={active}>
      <img
        onClick={() => {
          setactive(!active);
        }}
        src={CloseIcon}
        alt="sda"
      />
      <ButtonContainer>
        <Link to="/">
          00 <span>HOME</span>
        </Link>
        <Link to="destination/moon">
          01 <span>DESTINATION</span>
        </Link>
        <Link to="crew/douglas-hurley">
          02 <span>CREW</span>
        </Link>
        <Link to="technology/vehicle">
          03 <span>TECHNOLOGIES</span>
        </Link>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div<Props>`
  width: 100%;
  max-width: 254px;
  height: 100vh;
  display: flex;
  position: ${(props) => (props.active ? "absolute" : "fixed")};
  right: ${(props) => (props.active ? "0" : "-254px")};
  top: 0;
  padding: 32px;
  transition: all 0.2s;
  z-index: 10;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  img {
    position: absolute;
    top: 24px;
    right: 24px;
  }

  a {
    font-family: "Barlow Condensed";
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #ffffff;

    span {
      font-weight: 400;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: start;
  margin-top: 118px;
`;
