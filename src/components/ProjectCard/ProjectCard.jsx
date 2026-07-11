import "./ProjectCard.css";
import { FaGithub, FaEye } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  liveUrl,
  repoUrl,
  className = "",
  index,
  type,
}) {
  return (
    <article className={`project-card ${className}`.trim()}>
      <div className="project-1">
        <div className="project-image-1">
          <img src={image} alt={title} />
        </div>
        <div className="project-information-1">
          <span className="project-number">0{index + 1}</span>
          <span className="project-type">{type}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tags">
            {tags.map(({ name, icon: Icon }, i) => (
              <span key={i} className="tag">
                {Icon && <Icon size={16} style={{ marginRight: 6 }} />}
                {name}
              </span>
            ))}
          </div>
          {(liveUrl || repoUrl) && (
            <div className="project-links">
              {liveUrl && (
                <a
                  href={liveUrl}
                  className="project-link-demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="project-link">
                    <FaEye size={27} color="#ffff" />
                  </i>
                  Ver demo
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  className="project-link-github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="project-link">
                    <FaGithub size={27} color="#ffff" />
                  </i>
                  Ver código
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
