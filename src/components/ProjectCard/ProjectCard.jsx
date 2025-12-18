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
        <article className="project-card">
            <div className={`project-1`}>
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
                    <div className="project-links">
                        <a href={liveUrl} className="project-link-demo" target="blank">
                            <i className="project-link" >
                                <FaEye size={27} color={"#ffff"} />
                            </i>
                            Ver demo
                        </a>
                        <a href={repoUrl} className="project-link-github" target="blank">
                            <i className="project-link">
                                <FaGithub size={27} color={"#ffff"} />
                            </i>
                            Ver código
                        </a>
                    </div>
                </div>
            </div>
        </article >


    );
}
