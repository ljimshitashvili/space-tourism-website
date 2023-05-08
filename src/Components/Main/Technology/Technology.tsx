import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Vehicle from "./Technologies/Vehicle";
import SpacePort from "./Technologies/Spaceport";
import Capsule from "./Technologies/Capsule";

interface Props {
  setPath: (path: string) => void;
}

interface ButtonTypes {
  techPath: string;
}

export default function Destination({ setPath }: Props) {
  const [techPath, setTechPath] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
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
      <ButtonContainer techPath={techPath}>
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
    padding: 90px 0 0;

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
    ${(p) =>
      p.techPath.includes("vehicle")
        ? `background-color: white; color: black`
        : ``}
  }
  .spaceport {
    ${(p) =>
      p.techPath.includes("spaceport") ? `opacity: 1` : `opacity: 0.17`}
  }
  .capsule {
    ${(p) => (p.techPath.includes("capsule") ? `opacity: 1` : `opacity: 0.17`)}
  }
  @media (min-width: 768px) {
    width: 88px;
    top: 346px;

    a {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7;
    }
  }

  @media (min-width: 1024px) {
    top: unset;
    bottom: 100px;
    left: 17%;
    width: 132px;

    .circle {
      width: 15px;
      height: 15px;
    }
  }
`;
