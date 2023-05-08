import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import DouglasImg from "../../../../assets/starter-code/assets/crew/image-douglas-hurley.png";

interface Props {
  setDestPath: (destpath: string) => void;
}

export default function Douglas({ setDestPath }: Props) {
  const location = useLocation();
  useEffect(() => {
    setDestPath(location.pathname);
  }, [location]);
  return (
    <Container>
      <div className="Img">
        <img src={DouglasImg} alt="Douglas Hurley Photo" />
        <hr />
      </div>
      <TextContainer>
        <h2 className="profession">COMMANDER</h2>
        <h2 className="name">Douglas Hurley</h2>
        <h2 className="description">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </h2>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 32px 0 50px 0;
  gap: 74px;

  .Img {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    width: 100%;
    img {
      width: 177px;
      height: 222px;
    }

    hr {
      width: 100%;
      height: 1px;
      border: none;
      background: #383b4b;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .profession {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: 8px;
  }

  .name {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
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
  }
`;
