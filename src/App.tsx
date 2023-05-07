import Header from "./Components/Header/Header";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
