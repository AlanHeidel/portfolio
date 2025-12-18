import "./ScrollStack.css";
import { useEffect, useRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import liberty from "../../assets/projects/liberty-img.jpg";
import ppa from "../../assets/projects/ppa-img.jpg";
import futbol from "../../assets/projects/futbol-img.jpg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiTypescript, SiMysql, SiPhp, SiHtml5, SiCss3, SiJavascript, SiGooglesheets } from 'react-icons/si';
import { TbDatabase } from 'react-icons/tb';
import { div } from "three/tsl";


<SiExpress />


const projects = [
    {
        title: "Restaurante",
        description: "Realizar reservas y pedidos, con seccion administrador que cuenta con un dashboard para la gestión de clientes, reservas, pedidos y demás entidades del negocio. El proyecto fue pensado desde un enfoque de sistema real, modelando múltiples entidades y relaciones.",
        image: ppa,
        tags: [{ name: "React", icon: FaReact }, { name: "Node.js", icon: FaNodeJs }, { name: "Express", icon: SiExpress }, { name: "TypeScript", icon: SiTypescript }, { name: "MySQL", icon: SiMysql }, { name: "Mikro ORM", icon: TbDatabase }],
        repoUrl: "https://github.com/AlanHeidel/tp/blob/main/proposal.md",
        liveUrl: "",
        type: "Full Stack",
    },
    {
        title: "Complejo Futbol 5",
        description: "La aplicación tiene como objetivo presentar el complejo de manera atractiva, destacando las canchas y el bar, mientras permite a los usuarios reservar turnos de forma simple. Por otro lado, el administrador puede acceder a un panel para visualizar y gestionar las reservas realizadas, centralizando la operación del negocio.",
        image: futbol,
        tags: [{ name: "React", icon: FaReact }, { name: "Node.js", icon: FaNodeJs }, { name: "Express", icon: SiExpress }, { name: "MySQL", icon: SiMysql }, { name: "Mikro ORM", icon: TbDatabase }],
        repoUrl: "",
        liveUrl: "",
        type: "Full Stack",
    },
    {
        title: "Rediseño MuOnline",
        description: "El proyecto partió de un template existente, sobre el cual realicé un rediseño visual completo para mejorar la estética, la identidad del servidor y la experiencia de usuario. Además, implementé una integración con Google Sheets para la gestión dinámica de contenido (noticias y datos actualizables sin necesidad de modificar el código), permitiendo una administración más simple y eficiente del sitio.",
        image: liberty,
        tags: [{ name: "PHP", icon: SiPhp }, { name: "HTML", icon: SiHtml5 }, { name: "CSS", icon: SiCss3 }, { name: "JavaScript", icon: SiJavascript }, { name: "Google Sheets API", icon: SiGooglesheets }],
        repoUrl: "https://github.com/AlanHeidel/webengine-mu-modernized",
        liveUrl: "https://libertymu2.com/",
        type: "Frontend",
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

        const enterDistance = () => window.innerHeight * 1;

        let rafId = null;

        const update = () => {
            rafId = null;

            const stickyTopPx = getStickyTopPx();
            const dist = enterDistance();

            for (const card of cardsRef.current) {
                const rect = card.getBoundingClientRect();

                const start = stickyTopPx + dist;
                const end = stickyTopPx;
                const t = clamp01((start - rect.top) / (start - end));
                const scale = 0.75 + 0.25 * t;

                card.style.opacity = "1";
                card.style.transform = `scale(${scale})`;
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
                </div>
            </div>
        </div>
    );
}
