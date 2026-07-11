import liberty from "../assets/projects/liberty-img.jpg";
import ppa from "../assets/projects/ppa-img.jpg";
import saas from "../assets/projects/image-saas.jpg";
import mediapipe from "../assets/projects/mediapipe-img.jpg";
import { FaReact, FaNodeJs } from "react-icons/fa";
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

export const projects = [
  {
    title: "SAAS Deportes",
    featured: true,
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
  {
    title: "Rediseño MuOnline",
    featured: false,
    description:
      "El proyecto partió de un template existente, sobre el cual realicé un rediseño visual completo para mejorar la estética, la identidad del servidor y la experiencia de usuario. Además, implementé una integración con Google Sheets para la gestión dinámica de contenido, permitiendo una administración más simple y eficiente del sitio.",
    image: liberty,
    tags: [
      { name: "PHP", icon: SiPhp },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Google Sheets API", icon: SiGooglesheets },
    ],
    repoUrl: "https://github.com/AlanHeidel/webengine-mu-modernized",
    liveUrl: "https://alan-heidel.freedev.app/new/",
    type: "Frontend",
  },
  {
    title: "AI Face Detection",
    featured: true,
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
    liveUrl: "https://proyecto-mediapipe.vercel.app/",
    type: "AI Web App",
  },
  {
    title: "Restaurante",
    featured: true,
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

export const featuredProjects = projects.filter((project) => project.featured);
