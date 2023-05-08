import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import Image from "../../../../assets/starter-code/assets/crew/image-victor-glover.png";

interface Props {
  setCrewPath: (destpath: string) => void;
}

export default function Douglas({ setCrewPath }: Props) {
  const location = useLocation();
  useEffect(() => {
    setCrewPath(location.pathname);
  }, [location]);
  return (
    <Container>
      <div className="Img">
        <img src={Image} alt="Douglas Hurley Photo" />
        <hr />
      </div>
      <TextContainer>
        <h2 className="profession">PILOT</h2>
        <h2 className="name">Victor Glover</h2>
        <h2 className="description">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
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
  gap: 90px;

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

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    flex: 1;
    padding-bottom: 0;

    .Img {
      img {
        width: 460px;
        height: 572px;
      }

      hr {
        display: none;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    gap: unset;
    .Img {
      align-self: end;
      max-width: 570px;

      img {
        width: 460px;
        height: 572px;
      }
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
    text-transform: uppercase;
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

  @media (min-width: 768px) {
    .profession {
      font-size: 24px;
      line-height: 28px;
    }

    .name {
      font-size: 40px;
      line-height: 46px;
    }

    .description {
      font-size: 16px;
      line-height: 28px;
      max-width: 458px;
    }
  }

  @media (min-width: 1024px) {
    .profession {
      font-size: 32px;
      line-height: 37px;
      margin-bottom: 15px;
    }

    .name {
      font-size: 56px;
      line-height: 64px;
      margin-bottom: 27px;
    }

    .description {
      font-size: 18px;
      line-height: 32px;
      max-width: 444px;
    }
  }
`;
