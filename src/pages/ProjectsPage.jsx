import { useEffect, useRef, useState } from "react";
import { FaEye, FaGithub, FaSearch, FaTimes } from "react-icons/fa";
import { projects } from "../data/projects.jsx";
import "./ProjectsPage.css";

function ProjectCatalogCard({ project }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const currentPointRef = useRef({ x: 0, y: 0 });
  const targetPointRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const animateCursor = () => {
    const card = cardRef.current;
    if (!card) return;

    const current = currentPointRef.current;
    const target = targetPointRef.current;

    current.x += (target.x - current.x) * 0.18;
    current.y += (target.y - current.y) * 0.18;

    card.style.setProperty("--cursor-x", `${current.x}px`);
    card.style.setProperty("--cursor-y", `${current.y}px`);

    const distance = Math.abs(target.x - current.x) + Math.abs(target.y - current.y);

    if (!isHoveredRef.current && distance < 0.5) {
      rafRef.current = null;
      return;
    }

    rafRef.current = requestAnimationFrame(animateCursor);
  };

  const ensureAnimation = () => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(animateCursor);
  };

  const updateTargetFromEvent = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    targetPointRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const handleMouseEnter = (event) => {
    const card = cardRef.current;
    if (!card) return;

    updateTargetFromEvent(event);
    currentPointRef.current = { ...targetPointRef.current };
    card.style.setProperty("--cursor-x", `${currentPointRef.current.x}px`);
    card.style.setProperty("--cursor-y", `${currentPointRef.current.y}px`);
    isHoveredRef.current = true;
    card.dataset.hovered = "true";
    ensureAnimation();
  };

  const handleMouseMove = (event) => {
    updateTargetFromEvent(event);
    ensureAnimation();
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    isHoveredRef.current = false;
    card.dataset.hovered = "false";
    ensureAnimation();
  };

  return (
    <article
      ref={cardRef}
      className="project-catalog-card"
      data-hovered="false"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-catalog-hoverfx" aria-hidden="true" />
      <span className="project-catalog-crosshair" aria-hidden="true" />
      <div className="project-catalog-media">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-catalog-body">
        <div className="project-catalog-topline">
          <span className="project-catalog-type">{project.type}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-catalog-tags">
          {project.tags.map(({ name, icon: Icon }) => (
            <span className="project-catalog-tag" key={`${project.title}-${name}`}>
              {Icon && <Icon size={16} />}
              {name}
            </span>
          ))}
        </div>
        {(project.liveUrl || project.repoUrl) && (
          <div className="project-catalog-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                <FaEye size={18} className="icon-btn" />
                Ver demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={18} className="icon-btn" />
                Ver código
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredProjects = projects.filter((project) => {
    if (!normalizedQuery) return true;

    const searchableText = [
      project.title,
      project.type,
      ...project.tags.map((tag) => tag.name),
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  return (
    <div className="projects-page">
      <main className="projects-page-main">
        <section className="projects-page-hero">
          <div className="projects-page-container">
            <div className="projects-page-copy">
              <span className="projects-page-kicker">Catálogo</span>
              <div className="title-backdrop projects-page-title" data-text="Projects">
                <h2>Todos los proyectos</h2>
              </div>
              <p className="section-description projects-page-description">
                Algunos de los proyectos que fui desarrollando para aprender, mejorar y aplicar distintas herramientas del ecosistema web.
              </p>
            </div>

            <div className="projects-search-panel">
              <label className="projects-search-field" htmlFor="projects-search">
                <FaSearch size={18} />
                <input
                  id="projects-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar por proyecto o tecnología"
                />
                {query && (
                  <button
                    type="button"
                    className="projects-search-clear"
                    onClick={() => setQuery("")}
                    aria-label="Limpiar búsqueda"
                  >
                    <FaTimes size={14} />
                  </button>
                )}
              </label>
              <div className="projects-search-meta">
                <span>
                  {filteredProjects.length} de {projects.length} proyectos
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-catalog-section">
          <div className="projects-page-container">
            {filteredProjects.length > 0 ? (
              <div className="projects-catalog-grid">
                {filteredProjects.map((project) => (
                  <ProjectCatalogCard key={project.title} project={project} />
                ))}
              </div>
            ) : (
              <div className="projects-empty-state">
                <h3>Sin resultados</h3>
                <p>
                  No se encontraron proyectos que coincidan con esa búsqueda. Probá con React, Node,
                  TypeScript o parte del título.
                </p>
                <button type="button" className="btn-secondary" onClick={() => setQuery("")}>
                  Limpiar búsqueda
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
