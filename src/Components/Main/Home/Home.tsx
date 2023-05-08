import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

interface Props {
  setpath: (path: string) => void;
}

export default function Destination({ setpath }: Props) {
  const location = useLocation();

  useEffect(() => {
    setpath(location.pathname);
  }, [location]);

  return (
    <Container>
      <div>
        <h1>SO, YOU WANT TO TRAVEL TO</h1>
        <h2>SPACE</h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Circle>
        <h3>EXPLORE</h3>
      </Circle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 327px;
  gap: 16px;
  margin: 48px 0;

  h1 {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 2.7px;
    color: #d0d6f9;
  }

  h2 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 100px;
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

  @media (min-width: 768px) {
    max-width: 445px;
    gap: 24px;
    margin: 106px 0;

    h1 {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
    }

    h2 {
      font-size: 150px;
      line-height: 150px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: unset;
    justify-content: space-around;
    width: 100%;
    margin: 251px 0 131px 0;

    div {
      max-width: 445px;

      h1 {
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 4.725px;
      }

      h2 {
        line-height: 172px;
      }

      p {
        font-size: 18px;
        line-height: 32px;
        text-align: left;
      }
    }
  }
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 65px;
  cursor: pointer;

  h3 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 1.25px;
    color: #0b0d17;
  }

  @media (min-width: 768px) {
    width: 242px;
    height: 242px;
    margin-top: 50px;
  }
`;
