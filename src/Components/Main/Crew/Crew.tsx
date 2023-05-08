import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Douglas from "./People/Douglas";
import Mark from "./People/Mark";
import Victor from "./People/Victor";
import Anousheh from "./People/Anousheh";

interface Props {
  setPath: (path: string) => void;
}

export default function Destination({ setPath }: Props) {
  const [destPath, setDestPath] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <Container>
      <Routes>
        <Route
          path="douglas-hurley"
          element={<Douglas setDestPath={setDestPath} />}
        ></Route>
        <Route
          path="mark-shuttleworth"
          element={<Mark setDestPath={setDestPath} />}
        ></Route>
        <Route
          path="victor-glover"
          element={<Victor setDestPath={setDestPath} />}
        ></Route>
        <Route
          path="anousheh-ansari"
          element={<Anousheh setDestPath={setDestPath} />}
        ></Route>
      </Routes>
      <ButtonContainer>
        <Link to="douglas-hurley">
          <div className="circle"></div>
        </Link>
        <Link to="mark-shuttleworth">
          <div className="circle"></div>
        </Link>
        <Link to="victor-glover">
          <div className="circle"></div>
        </Link>
        <Link to="anousheh-ansari">
          <div className="circle"></div>
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

  @media (min-width: 768px) {
    max-width: 573px;
  }

  @media (min-width: 1024px) {
    max-width: unset;
  }
`;

const ButtonContainer = styled.div`
  width: 238px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: absolute;
  top: 270px;

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
    background-color: white;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    width: 285px;
    height: 34px;
    top: 480px;

    a {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7;
    }
  }

  @media (min-width: 1024px) {
    top: 130px;
    right: 20%;
  }
`;
