import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/destination" element={<h1>Destination</h1>}></Route>
          <Route path="/crew" element={<h1>Crew</h1>}></Route>
          <Route path="/techonolgy" element={<h1>Techonoly</h1>}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
