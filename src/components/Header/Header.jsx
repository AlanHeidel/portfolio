import "./Header.css";
import { useEffect, useState, useRef } from "react";
import Icon from "../../assets/icon.svg";
import Icon2 from "../../assets/icon2.svg";
import { FaLinkedin } from "react-icons/fa";

const FULL_NAME = "Alan Heidel";
const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre Mi", href: "#aboutme" },
  { label: "Contacto", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [displayName, setDisplayName] = useState(FULL_NAME);
  const typingTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typingTimeout.current) clearTimeout(typingTimeout.current);

    const isDeleting = scrolled && displayName.length > 0;
    const isTyping = !scrolled && displayName.length < FULL_NAME.length;
    if (!isDeleting && !isTyping) return;

    typingTimeout.current = setTimeout(() => {
      setDisplayName((prev) =>
        scrolled ? prev.slice(0, -1) : FULL_NAME.slice(0, prev.length + 1)
      );
    }, 80);
    return () => clearTimeout(typingTimeout.current);
  }, [scrolled, displayName]);

  return (
    <header className={`header-pill${scrolled ? " scrolled" : ""}`}>
      <div className={`name-container${scrolled ? " scrolled" : ""}`}>
        <img src={Icon} alt="Logo" width={22} height={22} />
        <span className="name">{displayName}</span>
        <img src={Icon2} alt="Logo" width={22} height={22} />
      </div>

      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/alanheidel/">
          <FaLinkedin className="header-link" color={"#747474ff"} />
        </a>
      </div>
    </header>
  );
}
