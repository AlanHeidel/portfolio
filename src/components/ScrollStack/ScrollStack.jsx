import "./ScrollStack.css";
import { useEffect, useRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import liberty from "../../assets/projects/liberty-img.jpg";
import ppa from "../../assets/projects/ppa-img.jpg";
import saas from "../../assets/projects/image-saas.jpg";
import mediapipe from "../../assets/projects/mediapipe-img.jpg";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGooglesheets,
  SiTailwindcss,
  SiGoogle,
} from "react-icons/si";
import { TbDatabase, TbFaceId } from "react-icons/tb";

const projects = [
  {
    title: "SAAS Deportes",
    description:
      "La plataforma tiene como objetivo digitalizar la gestión de complejos deportivos, permitiendo mostrar canchas, disponibilidad y servicios de forma profesional, mientras los clientes reservan turnos online de manera rápida y sencilla. A su vez, los administradores acceden a un panel centralizado para gestionar reservas, horarios, clientes, pagos y ocupación, optimizando la operación diaria del negocio.",
    image: saas,
    tags: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Mikro ORM", icon: TbDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    repoUrl: "",
    liveUrl: "https://reservas-saas-gold.vercel.app/",
    type: "Full Stack",
  },
  // {
  //   title: "Rediseño MuOnline",
  //   description:
  //     "El proyecto partió de un template existente, sobre el cual realicé un rediseño visual completo para mejorar la estética, la identidad del servidor y la experiencia de usuario. Además, implementé una integración con Google Sheets para la gestión dinámica de contenido (noticias y datos actualizables sin necesidad de modificar el código), permitiendo una administración más simple y eficiente del sitio.",
  //   image: liberty,
  //   tags: [
  //     { name: "PHP", icon: SiPhp },
  //     { name: "HTML", icon: SiHtml5 },
  //     { name: "CSS", icon: SiCss3 },
  //     { name: "JavaScript", icon: SiJavascript },
  //     { name: "Google Sheets API", icon: SiGooglesheets },
  //   ],
  //   repoUrl: "https://github.com/AlanHeidel/webengine-mu-modernized",
  //   liveUrl: "https://alan-heidel.freedev.app/new/",
  //   type: "Frontend",
  // },
  {
    title: "AI Face Detection",
    description:
      "Aplicación web de inteligencia artificial que permite detectar landmarks faciales en tiempo real desde la cámara del usuario y renderizar los resultados sobre un canvas superpuesto al video. El proyecto demuestra integración de modelos de IA en el navegador, procesamiento client-side, manejo de webcam, renderizado dinámico y una interfaz orientada a experiencias interactivas.",
    image: mediapipe,
    tags: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "MediaPipe", icon: SiGoogle },
      { name: "Computer Vision", icon: TbFaceId },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    repoUrl: "https://github.com/AlanHeidel/proyecto-mediapipe",
    liveUrl: "",
    type: "AI Web App",
  },
  {
    title: "Restaurante",
    description:
      "Realizar reservas y pedidos, con seccion administrador que cuenta con un dashboard para la gestión de clientes, reservas, pedidos y demás entidades del negocio. El proyecto fue pensado desde un enfoque de sistema real, modelando múltiples entidades y relaciones.",
    image: ppa,
    tags: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "TypeScript", icon: SiTypescript },
      { name: "MySQL", icon: SiMysql },
      { name: "Mikro ORM", icon: TbDatabase },
    ],
    repoUrl: "https://github.com/AlanHeidel/fullstack-tp-utnfrro",
    liveUrl: "https://utnfrro-frontend.vercel.app/",
    type: "Full Stack",
  },
];

const clamp01 = (v) => Math.max(0, Math.min(1, v));

export default function ScrollStack() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    cardsRef.current = Array.from(container.querySelectorAll(".project-card"));

    const stickyTopVh = 10; // coincide con CSS top: 10vh
    const getStickyTopPx = () => (window.innerHeight * stickyTopVh) / 100;

    const enterDistance = () => window.innerHeight;

    let rafId = null;

    const isMobile = () => window.innerWidth <= 768;
    const update = () => {
      rafId = null;

      const stickyTopPx = getStickyTopPx();
      const dist = enterDistance();

      for (const card of cardsRef.current) {
        if (!isMobile()) {
          const rect = card.getBoundingClientRect();
          const start = stickyTopPx + dist;
          const end = stickyTopPx;
          const t = clamp01((start - rect.top) / (start - end));

          // Escala de 0.75 a 1
          const scale = 0.75 + 0.25 * t;

          // TranslateY de 60px a 0
          const translateY = 60 * (1 - t);

          card.style.opacity = "1";
          card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        }
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="projects-section-container">
      <div className="projects-pin" ref={containerRef}>
        <div className="projects-stack">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              description={p.description}
              image={p.image}
              tags={p.tags}
              liveUrl={p.liveUrl}
              repoUrl={p.repoUrl}
              index={i}
              type={p.type}
            />
          ))}
          <div className="projects-end" />
          <div className="projects-more">
            <a
              className="btn-secondary projects-more-link"
              href="https://github.com/AlanHeidel"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon-btn" size={18} />
              Explorar más repositorios
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
