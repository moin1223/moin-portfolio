import "./App.css";
import MyCarousal from "./components/MyCarousal/MyCarousal";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import TitleMessage from "./components/TitleMessage/TitleMessage";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import ProjectsTimeline from "./pages/ProjectsTimeLine/ProjectsTimeline";
import Contact from "./pages/Contact/Contact";
import Particles from "react-particles-js";
import { particlesOptions } from "./particleOptions";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />

      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/background/1.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <div style={{backgroundColor: '#EEE6E6'}}>
              <Container className="container-box rounded">
                <AboutMe />
              </Container>
            </div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Skills />
                <ProjectsTimeline />
                <Blogs />
                <Contact />
              </Fade>
            </Container>
          </div>
        </Parallax>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
