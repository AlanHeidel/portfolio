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
import { useRef, useEffect, useState } from "react";

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
  const trackRef = useRef(null);
  const [shift, setShift] = useState(0);
  const copies = 3;

  useEffect(() => {
    if (trackRef.current) {
      const halfWidth = trackRef.current.scrollWidth / copies;
      setShift(halfWidth);
    }
  }, [copies]);
  return (
    <div className="slider-container">
      <div
        className="slider-track"
        ref={trackRef}
        style={{ "--shift": `${shift}px` }}
      >
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

        {techIcons.map(({ label, icon: Icon }) => (
          <div key={label} className="tech-card">
            <Icon className={"tech-icon"} size={40} />
          </div>
        ))}
      </div>
    </div>
  );
}
