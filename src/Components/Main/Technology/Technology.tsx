import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Vehicle from "./Technologies/Vehicle";
import SpacePort from "./Technologies/Spaceport";
import Capsule from "./Technologies/Capsule";

interface Props {
  setpath: (path: string) => void;
}

interface ButtonTypes {
  techpath: string;
}

export default function Destination({ setpath }: Props) {
  const [techpath, setTechPath] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    setpath(location.pathname);
  }, [location]);
  return (
    <Container>
      <h1>
        <span>03</span> SPACE LAUNCH 101
      </h1>
      <Routes>
        <Route
          path="vehicle"
          element={<Vehicle setTechPath={setTechPath} />}
        ></Route>
        <Route
          path="spaceport"
          element={<SpacePort setTechPath={setTechPath} />}
        ></Route>
        <Route
          path="capsule"
          element={<Capsule setTechPath={setTechPath} />}
        ></Route>
      </Routes>
      <ButtonContainer techpath={techpath}>
        <Link to="vehicle">
          <div className="circle vehicle">1</div>
        </Link>
        <Link to="spaceport">
          <div className="circle spaceport">2</div>
        </Link>
        <Link to="capsule">
          <div className="circle capsule">3</div>
        </Link>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 327px;
  align-items: center;

  h1 {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #ffffff;
    position: absolute;

    span {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.25;
    }
  }

  @media (min-width: 768px) {
    max-width: 573px;
    flex: 1;

    h1 {
      top: 40px;
      left: 0;
      font-size: 20px;
      line-height: 24px;

      span {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: unset;

    h1 {
      left: 10%;
      font-size: 28px;
      line-height: 34px;

      span {
        font-size: 28px;
        line-height: 34px;
      }
    }
  }
`;

const ButtonContainer = styled.div<ButtonTypes>`
  width: 152px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: absolute;
  bottom: 50%;

  a {
    text-decoration: none;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    color: #d0d6f9;
  }

  .circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
    color: #ffffff;
    border: 1px solid #ffffff;
  }

  .vehicle {
    ${(p) => (p.techpath.includes("vehicle") ? `background-color: white` : ``)};
    ${(p) => (p.techpath.includes("vehicle") ? `color: black` : ``)}
  }
  .spaceport {
    ${(p) =>
      p.techpath.includes("spaceport") ? `background-color: white` : ``};
    ${(p) => (p.techpath.includes("spaceport") ? `color: black` : ``)}
  }
  .capsule {
    ${(p) => (p.techpath.includes("capsule") ? `background-color: white` : ``)};
    ${(p) => (p.techpath.includes("capsule") ? `color: black` : ``)}
  }
  @media (min-width: 768px) {
    width: 212px;
    top: 514px;

    .circle {
      width: 60px;
      height: 60px;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 1.5;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    top: 247px;
    bottom: 100px;
    left: 7%;
    height: 304px;

    .circle {
      width: 80px;
      height: 80px;
    }
  }
`;
