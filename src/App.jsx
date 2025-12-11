import "./App.css";
import LiquidEther from "./components/backgrounds/LiquidEther/LiquidEther";
import DotGrid from "./components/backgrounds/DotGrid/DotGrid";
import Header from "./components/Header/Header";
import Avatar from "./assets/img-avatar.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Slider from "./components/Slider/Slider.jsx";
import Scrolldown from "./assets/scrolldown.svg";

function App() {
  return (
    <>
      <div className="background-container">
        {/* <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        /> */}
        <DotGrid
          dotSize={3}
          gap={25}
          baseColor="#271e37"
          activeColor="#7c3aed"
          proximity={120}
          shockRadius={150}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="content">
        <Header />
        <main className="main-content">
          <div className="index-container" id="home">
            <div className="index-main-content">
              <div className="presentation-container">
                <div className="text-content">
                  <h1>Hola, soy Alan!</h1>
                  <h3>Desarrollador Fullstack</h3>
                </div>
                <div className="buttons-container">
                  <button className="btn-primary">Ver Proyectos</button>
                  <div className="social-contact">
                    <a href="https://www.linkedin.com/in/alanheidel/">
                      <FaLinkedin
                        className={"social-icon"}
                        size={30}
                        color={"#f0f0f0"}
                      />
                    </a>
                    <a href="https://github.com/AlanHeidel">
                      <FaGithub
                        className={"social-icon"}
                        size={30}
                        color={"#f0f0f0"}
                      />
                    </a>
                    <a href="https://www.instagram.com/alanheidel/">
                      <FaInstagram
                        className={"social-icon"}
                        size={30}
                        color={"#f0f0f0"}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div></div>
              <img
                className="img-avatar glow-pulse"
                src={Avatar}
                alt="image-logo-avatar"
              />
            </div>

            <div className="slider-wrapper">
              <Slider />
            </div>

            <div className="scrolldown-container">
              <img className="scrolldown-img" src={Scrolldown} alt="" />
            </div>
          </div>

          <section className="projects-section" id="projects">
            <div className="title-backdrop" data-text="Proyectos">
              <h2>Proyectos</h2>
            </div>
          </section>

          <section className="about-section" id="aboutme">
            <div className="title-backdrop" data-text="Sobre mi">
              <h2>Sobre mí</h2>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="title-backdrop" data-text="Contacto">
              <h2>Contacto</h2>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
