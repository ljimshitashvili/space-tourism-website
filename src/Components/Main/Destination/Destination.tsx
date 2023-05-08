import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Moon from "./Planets/Moon";
import Mars from "./Planets/Mars";
import Europa from "./Planets/Europa";
import Titan from "./Planets/Titan";

interface Props {
  setPath: (path: string) => void;
}

interface SliderTypes {
  destPath: string;
  setDestPath: (destPath: string) => void;
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
        <Route path="moon" element={<Moon setDestPath={setDestPath} />}></Route>
        <Route path="mars" element={<Mars setDestPath={setDestPath} />}></Route>
        <Route
          path="europa"
          element={<Europa setDestPath={setDestPath} />}
        ></Route>
        <Route
          path="titan"
          element={<Titan setDestPath={setDestPath} />}
        ></Route>
      </Routes>
      <ButtonContainer>
        <div>
          <Link to="moon">MOON</Link>
          <Slider destPath={destPath} setDestPath={setDestPath} />
        </div>
        <Link to="mars">MARS</Link>
        <Link to="europa">EUROPA</Link>
        <Link to="titan">TITAN</Link>
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

const Slider = styled.div<SliderTypes>`
  width: 36px;
  height: 3px;
  background-color: white;
  position: absolute;
  bottom: 0;
  transition: all 0.3s;

  ${(p) =>
    p.destPath.includes("moon")
      ? `transform: translateX(0px)`
      : p.destPath.includes("/mars")
      ? `transform: translateX(60px)`
      : p.destPath.includes("europa")
      ? `transform: translateX(127px)`
      : p.destPath.includes("titan")
      ? `transform: translateX(200px)`
      : ``};

  @media (min-width: 768px) {
    width: 41px;

    ${(p) =>
      p.destPath.includes("moon")
        ? `transform: translateX(-3px)`
        : p.destPath.includes("/mars")
        ? `transform: translateX(73px)`
        : p.destPath.includes("europa")
        ? `transform: translateX(155px)`
        : p.destPath.includes("titan")
        ? `transform: translateX(243px)`
        : ``};
  }
`;
