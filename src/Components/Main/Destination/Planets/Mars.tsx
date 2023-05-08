import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

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
      <h1>moon</h1>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    color: white;
  }
`;
