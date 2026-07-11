import "./ScrollStack.css";
import { useEffect, useRef } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";
import { featuredProjects } from "../../data/projects.jsx";

const clamp01 = (v) => Math.max(0, Math.min(1, v));

export default function ScrollStack() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    cardsRef.current = Array.from(container.querySelectorAll(".project-card"));

    const getStickyTopPx = () => {
      const firstCard = cardsRef.current[0];
      if (!firstCard) return 0;

      const computedTop = window.getComputedStyle(firstCard).top;
      return Number.parseFloat(computedTop) || 0;
    };

    const enterDistance = () => window.innerHeight;

    let rafId = null;

    const isMobile = () => window.innerWidth <= 768;
    const update = () => {
      rafId = null;

      const stickyTopPx = getStickyTopPx();
      const dist = enterDistance();

      for (const card of cardsRef.current) {
        if (isMobile()) {
          card.style.opacity = "1";
          card.style.transform = "none";
          continue;
        }

        const rect = card.getBoundingClientRect();
        const start = stickyTopPx + dist;
        const end = stickyTopPx;
        const t = clamp01((start - rect.top) / (start - end));
        const scale = 0.75 + 0.25 * t;
        const translateY = 60 * (1 - t);

        card.style.opacity = "1";
        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
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
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              index={index}
              type={project.type}
            />
          ))}
          <div className="projects-end" />
          <div className="projects-more">
            <Link
              className="btn-secondary projects-more-link"
              to="/projects"
            >
              <FaFolderOpen className="icon-btn" size={18} />
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
