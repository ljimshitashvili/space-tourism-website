import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import TitanIcon from "../../../../assets/starter-code/assets/destination/image-titan.png";

interface Props {
  setDestPath: (depthPath: string) => void;
}

export default function Titan({ setDestPath }: Props) {
  const location = useLocation();
  useEffect(() => {
    setDestPath(location.pathname);
  }, [location]);

  return (
    <Container>
      <h1>
        <span>01</span>Pick your destination
      </h1>
      <img src={TitanIcon} alt="Titan" />
      <h2>TITAN</h2>
      <p>
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>
      <hr />

      <InfoContainer>
        <div>
          <h3>AVG. DISTANCE</h3>
          <h4>1.6 BIL. km</h4>
        </div>
        <div>
          <h5>Est. travel time</h5>
          <h6>7 years</h6>
        </div>
      </InfoContainer>
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

  @media (min-width: 768px) {
    padding: 40px 0 70px 0;
  }

  h1 {
    width: 100%;
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
    text-align: center;
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

    @media (min-width: 768px) {
      font-size: 20px;
      letter-spacing: 3.375px;
      text-align: left;
      line-height: 24px;

      span {
        font-size: 20px;
        letter-spacing: 3.375px;
        line-height: 24px;
      }
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

    @media (min-width: 768px) {
      font-size: 80px;
      line-height: 92px;
    }
  }

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #d0d6f9;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 18px;
    }
  }

  img {
    width: 170px;
    height: 170px;
    margin: 32px 0 74px 0;

    @media (min-width: 768px) {
      width: 300px;
      height: 300px;

      margin: 60px 0 119px 0;
    }
  }

  hr {
    width: 100%;
    border: none;
    height: 1px;
    background: #383b4b;
    margin: 32px 0;

    @media (min-width: 768px) {
      margin: 49px 0;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

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

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 100px;
    align-items: center;

    h4 {
      margin-bottom: 0;
    }
  }
`;
