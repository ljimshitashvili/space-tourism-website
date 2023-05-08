import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Douglas from "./People/Douglas";
import Mark from "./People/Mark";
import Victor from "./People/Victor";
import Anousheh from "./People/Anousheh";

interface Props {
  setpath: (path: string) => void;
}

interface ButtonTypes {
  crewPath: string;
}

export default function Destination({ setpath }: Props) {
  const [crewPath, setCrewPath] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    setpath(location.pathname);
  }, [location]);
  return (
    <Container>
      <h1>
        <span>02</span> MEET YOUR CREW
      </h1>
      <Routes>
        <Route
          path="douglas-hurley"
          element={<Douglas setCrewPath={setCrewPath} />}
        ></Route>
        <Route
          path="mark-shuttleworth"
          element={<Mark setCrewPath={setCrewPath} />}
        ></Route>
        <Route
          path="victor-glover"
          element={<Victor setCrewPath={setCrewPath} />}
        ></Route>
        <Route
          path="anousheh-ansari"
          element={<Anousheh setCrewPath={setCrewPath} />}
        ></Route>
      </Routes>
      <ButtonContainer crewPath={crewPath}>
        <Link to="douglas-hurley">
          <div className="circle douglas"></div>
        </Link>
        <Link to="mark-shuttleworth">
          <div className="circle mark"></div>
        </Link>
        <Link to="victor-glover">
          <div className="circle victor"></div>
        </Link>
        <Link to="anousheh-ansari">
          <div className="circle anousheh"></div>
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
  width: 88px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: absolute;
  top: 310px;

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
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    opacity: 0.17;
  }

  .douglas {
    ${(p) => (p.crewPath.includes("douglas") ? `opacity: 1` : `opacity: 0.17`)}
  }
  .anousheh {
    ${(p) => (p.crewPath.includes("anousheh") ? `opacity: 1` : `opacity: 0.17`)}
  }
  .mark {
    ${(p) => (p.crewPath.includes("mark") ? `opacity: 1` : `opacity: 0.17`)}
  }
  .victor {
    ${(p) => (p.crewPath.includes("victor") ? `opacity: 1` : `opacity: 0.17`)}
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
