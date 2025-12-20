import "./App.css";
import { useEffect, useState } from "react";
import DotGrid from "./components/backgrounds/DotGrid/DotGrid";
import Header from "./components/Header/Header";
import Avatar from "./assets/img-personal.webp";
import IconLogo from "./assets/icon.svg"
import IconLogo2 from "./assets/icon2.svg"
import { scrollToId } from "./utils/scrollToId.jsx";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFolderOpen,
  FaEnvelope,
  FaUserCircle,
  FaStar, FaCode,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaDownload,
} from "react-icons/fa";
import Slider from "./components/Slider/Slider.jsx";
import AboutCard from "./components/AboutCard/AboutCard.jsx";
import SkillsSection from "./components/SkillsSection/SkillsSection.jsx";
import ScrollStack from './components/ScrollStack/ScrollStack'

function App() {
  const [colors, setColors] = useState({ base: '#252525', active: '#a1a1a1' });
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    const base = root.getPropertyValue('--bg-baseColor').trim();
    const active = root.getPropertyValue('--bg-activeColor').trim();
    setColors({ base, active });
  }, [theme]);
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
          baseColor={colors.base}
          activeColor={colors.active}
          proximity={120}
          shockRadius={150}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="content">
        <Header theme={theme} setTheme={setTheme} />
        <main className="main-content">
          <div className="index-container" id="home">
            <div className="index-main-content">
              <div className="presentation-container">
                <div className="text-content">
                  <h1 className="title">Hola, soy Alan Heidel</h1>
                  <span className="sub-title">Desarrollador Fullstack</span>
                </div>
                <div className="description-content">
                  <p>Con +1 año de experiencia. Concibo el desarrollo como una forma de<span className="span-text"> simplificar lo complejo </span>y crear productos intuitivos, sólidos y funcionales.</p>
                </div>
                <div className="social-container">
                  <div className="social-contact">
                    <a href="https://www.linkedin.com/in/alanheidel/" target="blank">
                      <FaLinkedin
                        className={"social-icon"}
                        size={30}
                        color={"currentColor"}
                      />
                    </a>
                    <a href="https://github.com/AlanHeidel" target="blank">
                      <FaGithub
                        className={"social-icon"}
                        size={30}
                        color={"currentColor"}
                      />
                    </a>
                    <a href="https://www.instagram.com/alanheidel/" target="blank">
                      <FaInstagram
                        className={"social-icon"}
                        size={30}
                        color={"currentColor"}
                      />
                    </a>
                  </div>
                </div>
                <div className="buttons-container">
                  <button className="btn-primary" onClick={() => scrollToId('projects')}><FaFolderOpen size={18} className={"icon-btn"} /> Ver Proyectos</button>
                  <button className="btn-secondary" onClick={() => scrollToId('contact')}><FaEnvelope size={18} className={"icon-btn"} />Contáctame</button>
                </div>
              </div>
              <div className="avatar-content">
                <div className="avatar-wrapper">
                  <img
                    className="img-avatar glow-pulse"
                    src={Avatar}
                    alt="image-logo-avatar"
                  />
                </div>
                <div className="floating-icon icon-1">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="2" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
                  </svg>
                </div>

                <div className="floating-icon icon-2" data-tooltip="Code">
                  <span> {'</>'} </span>
                </div>

                <div className="floating-icon icon-3" data-tooltip="Server">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="6" rx="1.8" />
                    <rect x="3" y="14" width="18" height="6" rx="1.8" />
                    <circle cx="7" cy="7" r="0.5" fill="currentColor" />
                    <circle cx="7" cy="17" r="0.5" fill="currentColor" />
                  </svg>
                </div>

                <div className="floating-icon icon-4" data-tooltip="Database">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <ellipse cx="12" cy="6" rx="8" ry="3" />
                    <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
                    <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
                  </svg>
                </div>

              </div>
            </div>

            <div className="slider-wrapper">
              <Slider />
            </div>

            <div className="scrolldown-container">
              <button className="scrolldown-btn" onClick={() => scrollToId('projects')}>
                <svg className="scrolldown-img" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10" y1="40" x2="50" y2="80"
                    stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                  <line x1="90" y1="40" x2="50" y2="80"
                    stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                </svg>

              </button>
            </div>
          </div>

          <section className="projects-section" id="projects">
            <div className="projects-container">
              <div className="title-backdrop" data-text="Proyectos">
                <h2>Proyectos</h2>
              </div>
              <p className="section-description">Proyectos que muestran cómo abordo problemas reales y los transformo en soluciones funcionales.</p>
              <ScrollStack />
            </div>


          </section>

          <section className="about-section" id="aboutme">
            <div className="title-backdrop" data-text="Sobre mi">
              <h2>Sobre mí</h2>
            </div>
            <p className="section-description">Mi enfoque profesional, mis intereses y la manera en la que trabajo día a día.</p>
            <div className="about-container">
              <div className="about-img-container">
                <img className="about-img" src={Avatar} alt="" />
              </div>
              <div>
                <div className="about-description-container">
                  <AboutCard icon={< FaUserCircle />} title='Perfil' description='Estudiante avanzado de Ingeniería en Sistemas. Me apasiona construir soluciones a problemas reales, cuidando tanto la lógica como la experiencia de uso.' />
                  <AboutCard icon={< FaStar />} title='Intereses' description='Me motiva entender cómo funcionan las cosas en profundidad, mejorar productos existentes y aprender nuevas herramientas.' />
                  <AboutCard icon={< FaCode />} title='Tecnologías' description='Trabajo principalmente con JavaScript, React, Node.js y bases de datos relacionales gestionadas a través de ORMs.' />
                  <AboutCard icon={< FaMapMarkerAlt />} title='Ubicación' description='Actualmente resido en Rosario, Argentina. Abierto a trabajo remoto/presencial y a colaborar en proyectos de distintas partes del mundo.' />
                  <AboutCard icon={< FaGraduationCap />} title='Formación' description='Ingeniería en Sistemas en UTN. Nivel intermedio de inglés (autodidacta), con buena comprensión lectora y técnica.' />
                  <AboutCard icon={< FaEnvelope />} title='Contacto' description='Podés contactarme a través de: ' links={[
                    { icon: <FaLinkedin className={"social-icon"} size={24} color={"#f0f0f0"} />, href: 'https://linkedin.com/in/AlanHeidel' },
                    { icon: <FaGithub className={"social-icon"} size={24} color={"#f0f0f0"} />, href: 'https://github.com/AlanHeidel' },
                    { icon: <FaInstagram className={"social-icon"} size={24} color={"#f0f0f0"} />, href: 'https://instagram.com/AlanHeidel' },
                  ]} />
                </div>
                <button className="btn-secondary"><FaDownload className={"icon-btn"} /> Descargar CV</button>

              </div>
            </div>
          </section>

          <section className="skills-section" id="skills">
            <div className="skills-container">
              <div className="title-backdrop" data-text="Skills">
                <h2>Skills</h2>
              </div>
              <p className="section-description">Habilidades técnicas y conocimientos aplicados en proyectos, desarrollados mediante la práctica y el aprendizaje continuo.</p>
              <SkillsSection />
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-container">
              <div className="title-backdrop" data-text="Contacto">
                <h2>Contacto</h2>
              </div>
              <p className="section-description">Estoy abierto a nuevas oportunidades y proyectos desafiantes. No dudes en contactarme para conversar y explorar posibles colaboraciones.</p>
              <div className="buttons-container-footer">
                <a href="https://www.linkedin.com/in/AlanHeidel/" className="btn-primary" target="blank" ><FaLinkedin size={20} className={"icon-btn"} />Perfil de Linkedin</a>
                <a href="mailto:alanmax2015.aheidel@gmail.com" className="btn-secondary" target="blank"><FaEnvelope size={20} className={"icon-btn"} />Enviar e-mail</a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="creator">
            <button className="btn-footer" onClick={() => scrollToId('home')}>
              <img src={IconLogo} alt="icon-logo" />
              <img src={IconLogo2} alt="icon-logo" />
            </button>
            <span>Creado con React. © 2025 Alan Heidel</span>
          </div>
          <div className="social-links-footer">
            <a href="https://www.linkedin.com/in/AlanHeidel/" target="blank">
              <i>< FaLinkedin /></i>
            </a>

            <a href="https://github.com/AlanHeidel" target="blank">
              <i><FaGithub /></i>
            </a>

            <a href="mailto:alanmax2015.aheidel@gmail.com" target="blank">
              <i><FaEnvelope /></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
