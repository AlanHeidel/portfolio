import { useState } from "react";
import { FaEye, FaGithub, FaSearch } from "react-icons/fa";
import { projects } from "../data/projects.jsx";
import "./ProjectsPage.css";

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
              </label>
              <div className="projects-search-meta">
                <span>
                  {filteredProjects.length} de {projects.length} proyectos
                </span>
                {query && (
                  <button type="button" className="projects-clear-btn" onClick={() => setQuery("")}>
                    Limpiar
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="projects-catalog-section">
          <div className="projects-page-container">
            {filteredProjects.length > 0 ? (
              <div className="projects-catalog-grid">
                {filteredProjects.map((project) => (
                  <article className="project-catalog-card" key={project.title}>
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
                ))}
              </div>
            ) : (
              <div className="projects-empty-state">
                <h3>Sin resultados</h3>
                <p>
                  No encontré proyectos que coincidan con esa búsqueda. Probá con React, Node,
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
