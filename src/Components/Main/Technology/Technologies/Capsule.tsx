import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import ImageLandscape from "../../../../assets/starter-code/assets/technology/image-space-capsule-landscape.jpg";
import ImagePortrait from "../../../../assets/starter-code/assets/technology/image-space-capsule-portrait.jpg";

interface Props {
  setTechPath: (techPath: string) => void;
}

export default function Vehicle({ setTechPath }: Props) {
  const location = useLocation();
  useEffect(() => {
    setTechPath(location.pathname);
  }, [location]);
  return (
    <Container>
      <div className="Img"></div>
      <TextContainer>
        <h2 className="terminology">THE TERMINOLOGY…</h2>
        <h2 className="technology">SPACE CAPSULE</h2>
        <h2 className="description">
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </h2>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px 0;
  align-items: center;
  gap: 100px;

  .Img {
    background-image: url(${ImageLandscape});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    width: 100vw;
    aspect-ratio: 2.477419355/1;
    max-height: 200px;
  }

  @media (min-width: 768px) {
    gap: 160px;
    padding: 124px 0;
    .Img {
      max-height: 350px;
    }
  }

  @media (min-width: 1024px) {
    gap: 10%;
    padding: 136px 0 101px 0;
    flex-direction: row-reverse;
    max-width: 100%;
    align-self: flex-end;
    margin-left: 190px;
    .Img {
      background-image: url(${ImagePortrait});
      width: 515px;
      height: 527px;
      max-height: unset;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .terminology {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2.3625px;
    color: #d0d6f9;
    margin-bottom: 9px;
  }

  .technology {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 16px;
    width: 100%;
  }

  .description {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #d0d6f9;
    max-width: 327px;
  }

  @media (min-width: 768px) {
    .terminology {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      margin-bottom: 16px;
    }

    .technology {
      font-size: 40px;
      line-height: 46px;
    }

    .description {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (min-width: 1024px) {
    align-items: start;
    .terminology {
      margin-bottom: 16px;
    }

    .technology {
      font-size: 56px;
      line-height: 64px;
      text-align: left;
    }

    .description {
      font-size: 18px;
      line-height: 32px;
      max-width: 444px;
      text-align: left;
    }
  }
`;
