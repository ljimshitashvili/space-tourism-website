import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyles";
import Header from "./Components/Header/Header";
import Home from "./Components/Main/Home/Home";
import Destination from "./Components/Main/Destination/Destination";
import Crew from "./Components/Main/Crew/Crew";
import Technology from "./Components/Main/Technology/Technology";

import bgHomeMob from "./assets/starter-code/assets/home/background-home-mobile.jpg";
import bgHomeTab from "./assets/starter-code/assets/home/background-home-tablet.jpg";
import bgHomeDesk from "./assets/starter-code/assets/home/background-home-desktop.jpg";
import bgDestMob from "./assets/starter-code/assets/destination/background-destination-mobile.jpg";
import bgDestTab from "./assets/starter-code/assets/destination/background-destination-tablet.jpg";
import bgDestDesk from "./assets/starter-code/assets/destination/background-destination-desktop.jpg";
import bgCrewMob from "./assets/starter-code/assets/crew/background-crew-mobile.jpg";
import bgCrewTab from "./assets/starter-code/assets/crew/background-crew-tablet.jpg";
import bgCrewDesk from "./assets/starter-code/assets/crew/background-crew-desktop.jpg";
import bgTechMob from "./assets/starter-code/assets/technology/background-technology-mobile.jpg";
import bgTechTab from "./assets/starter-code/assets/technology/background-technology-tablet.jpg";
import bgTechDesk from "./assets/starter-code/assets/technology/background-technology-desktop.jpg";
import { useState } from "react";

interface ContainerTypes {
  path: string;
  setpath: (path: string) => void;
}

function App() {
  const [path, setpath] = useState<string>("");

  return (
    <Container path={path} setpath={setpath}>
      <Router>
        <GlobalStyle />
        <Header path={path} />
        <Routes>
          <Route path="/" element={<Home setpath={setpath} />}></Route>
          <Route
            path="/destination/*"
            element={<Destination setpath={setpath} />}
          ></Route>
          <Route path="/crew/*" element={<Crew setpath={setpath} />}></Route>
          <Route
            path="/technology/*"
            element={<Technology setpath={setpath} />}
          ></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div<ContainerTypes>`
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;

  ${(p) =>
    p.path === "/"
      ? `background-image: url(${bgHomeMob})`
      : p.path.includes("/destination")
      ? `background-image: url(${bgDestMob})`
      : p.path.includes("/crew")
      ? `background-image: url(${bgCrewMob})`
      : p.path.includes("/technology")
      ? `background-image: url(${bgTechMob})`
      : ``};

  @media (min-width: 768px) {
    ${(p) =>
      p.path === "/"
        ? `background-image: url(${bgHomeTab})`
        : p.path.includes("/destination")
        ? `background-image: url(${bgDestTab})`
        : p.path.includes("/crew")
        ? `background-image: url(${bgCrewTab})`
        : p.path.includes("/technology")
        ? `background-image: url(${bgTechTab})`
        : ``}
  }

  @media (min-width: 1024px) {
    ${(p) =>
      p.path == "/"
        ? `background-image: url(${bgHomeDesk})`
        : p.path.includes("/destination")
        ? `background-image: url(${bgDestDesk})`
        : p.path.includes("/crew")
        ? `background-image: url(${bgCrewDesk})`
        : p.path.includes("/technology")
        ? `background-image: url(${bgTechDesk})`
        : ``};
  }
`;
