import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import ImageLandscape from "../../../../assets/starter-code/assets/technology/Landscape.jpg";
import ImagePortrait from "../../../../assets/starter-code/assets/technology/image-launch-vehicle-portrait.jpg";

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
        <h2 className="technology">LAUNCH VEHICLE</h2>
        <h2 className="description">
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
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
`;
