import "./Slider.css";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiGit,
  SiDocker,
} from "react-icons/si";

const techIcons = [
  { label: "React", icon: SiReact },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Express", icon: SiExpress },
  { label: "JavaScript", icon: SiJavascript },
  { label: "HTML5", icon: SiHtml5 },
  { label: "CSS3", icon: SiCss3 },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Git", icon: SiGit },
  { label: "Docker", icon: SiDocker },
];

export default function Slider() {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {techIcons.map(({ label, icon: Icon }) => (
          <div key={label} className="tech-card">
            <Icon className={"tech-icon"} size={40} />
          </div>
        ))}

        {techIcons.map(({ label, icon: Icon }) => (
          <div key={label} className="tech-card">
            <Icon className={"tech-icon"} size={40} />
          </div>
        ))}
      </div>
    </div>
  );
}
