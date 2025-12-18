// src/data/skills.jsx
import { FaDesktop, FaServer, FaGithub, FaTools, FaLightbulb, FaSearchPlus, FaBolt, FaUserFriends } from 'react-icons/fa';
import {
    SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
    SiExpress, SiMysql, SiDocker, SiPnpm, SiGit, SiVite, SiVercel
} from 'react-icons/si';
import { TbDatabase, TbApi, TbMessageCircle } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';

export const techCards = [
    {
        icon: <FaDesktop />,
        title: 'Desarrollo Frontend',
        skills: [
            { icon: <SiReact size={22} />, name: 'React' },
            { icon: <SiTypescript size={22} />, name: 'TypeScript' },
            { icon: <SiJavascript size={22} />, name: 'JavaScript' },
            { icon: <SiHtml5 size={22} />, name: 'HTML5' },
            { icon: <SiCss3 size={22} />, name: 'CSS3' },
            { icon: <SiTailwindcss size={22} />, name: 'Tailwind CSS' },
        ],
    },
    {
        icon: <FaServer />,
        title: 'Desarrollo Backend',
        skills: [
            { icon: <FaNodeJs size={22} />, name: 'Node.js' },
            { icon: <SiExpress size={22} />, name: 'Express.js' },
            { icon: <SiJavascript size={22} />, name: 'JavaScript' },
            { icon: <TbDatabase size={22} />, name: 'MikroORM' },
            { icon: <SiMysql size={22} />, name: 'MySQL' },
            { icon: <TbApi size={22} />, name: 'REST APIs' },
        ],
    },
    {
        icon: <FaTools />,
        title: 'Herramientas de Desarrollo',
        skills: [
            { icon: <SiDocker size={22} />, name: 'Docker' },
            { icon: <SiPnpm size={22} />, name: 'PNPM' },
            { icon: <SiGit size={22} />, name: 'Git' },
            { icon: <FaGithub size={22} />, name: 'GitHub' },
            { icon: <SiVite size={22} />, name: 'Vite' },
            { icon: <SiVercel size={22} />, name: 'Vercel' },
        ],
    },
];

export const softCards = [
    {
        icon: <TbMessageCircle />,
        title: 'Comunicación',
        description: 'Capacidad para expresar ideas de forma clara y escuchar activamente, facilitando el entendimiento dentro del equipo.'
    },
    {
        icon: <FaLightbulb />,
        title: 'Resolución de problemas',
        description: 'Enfoque analítico para identificar problemas, evaluar alternativas y aplicar soluciones efectivas.'
    },
    {
        icon: <FaSearchPlus />,
        title: 'Atención al detalle',
        description: 'Cuidado por los pequeños aspectos que marcan la diferencia en la calidad final de un producto o solución.'
    }, {
        icon: <FaDesktop />,
        title: 'Adaptabilidad',
        description: 'Capacidad para ajustarse a nuevos contextos, herramientas o desafíos, manteniendo una actitud flexible y abierta al aprendizaje.'
    },
    {
        icon: <FaBolt />,
        title: 'Proactividad',
        description: 'Iniciativa para anticipar necesidades, proponer mejoras y asumir responsabilidades de forma autónoma.'
    },
    {
        icon: <FaUserFriends />,
        title: 'Colaboración en equipo',
        description: 'Trabajo conjunto con otras personas, valorando distintas perspectivas y aportando de manera constructiva a los objetivos comunes.'
    },
];
