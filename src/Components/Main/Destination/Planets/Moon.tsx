import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import MoonIcon from "../../../../assets/starter-code/assets/destination/image-moon.png";

interface Props {
  setDestPath: (depthPath: string) => void;
}

export default function Moon({ setDestPath }: Props) {
  const location = useLocation();
  useEffect(() => {
    setDestPath(location.pathname);
  }, [location]);

  return (
    <Container>
      <h1>
        <span>01</span>Pick your destination
      </h1>
      <img src={MoonIcon} alt="Moon" />
      <h2>MOON</h2>
      <p>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr />
      <h3>AVG. DISTANCE</h3>
      <h4>384,400 km</h4>
      <h5>Est. travel time</h5>
      <h6>3 days</h6>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px 0;
  position: relative;

  h1 {
    font-family: "Barlow Condensed";
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    letter-spacing: 2.7px;
    color: #ffffff;
    mix-blend-mode: normal;
    text-transform: uppercase;
    display: flex;
    gap: 18px;
    align-items: center;

    span {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      color: #ffffff;
      opacity: 0.25;
    }
  }

  h2 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    color: #ffffff;
  }

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #d0d6f9;
  }

  h3 {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    color: #d0d6f9;
    margin-bottom: 12px;
  }

  h4 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 32px;
  }

  h5 {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    color: #d0d6f9;
    margin-bottom: 12px;
  }

  h6 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }

  img {
    width: 170px;
    height: 170px;
    margin: 32px 0 74px 0;
  }

  hr {
    width: 100%;
    border: none;
    height: 1px;
    background: #383b4b;
    margin: 32px 0;
  }
`;
