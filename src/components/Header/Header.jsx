import "./Header.css";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "../../assets/icon.svg";
import Icon2 from "../../assets/icon2.svg";
import SunIcon from "../../assets/theme/sun-icon.svg";
import MoonIcon from "../../assets/theme/moon-icon.svg";
import { scrollToId } from "../../utils/scrollToId.jsx";
import BurgerButton from "./BurgerButton/BurgerButton.jsx";

const FULL_NAME = "Alan Heidel";
const navLinks = [
  { label: "Inicio", kind: "home", id: "home" },
  { label: "Proyectos", kind: "route", to: "/projects" },
  { label: "Sobre Mi", kind: "section", id: "aboutme" },
  { label: "Skills", kind: "section", id: "skills" },
  { label: "Contacto", kind: "section", id: "contact" },
];

export default function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [displayName, setDisplayName] = useState(FULL_NAME);
  const typingTimeout = useRef();
  const headerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

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
    }, 60);

    return () => clearTimeout(typingTimeout.current);
  }, [scrolled, displayName]);

  const navigateToHomeSection = (id) => {
    if (location.pathname === "/") {
      scrollToId(id);
      return;
    }

    navigate(`/#${id}`);
  };

  const handleLogoClick = () => {
    navigateToHomeSection("home");
  };

  const handleNavClick = (link) => {
    if (link.kind === "route") {
      if (location.pathname === link.to) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
      }

      navigate(link.to);
      return;
    }

    navigateToHomeSection(link.id);
  };

  const isProjectsRoute = location.pathname === "/projects";

  return (
    <header
      ref={headerRef}
      className={`header-pill ${scrolled ? " scrolled" : ""} ${menuOpen ? "open" : ""}`}
    >
      <div className="header-container">
        <div onClick={handleLogoClick} className={`name-container${scrolled ? " scrolled" : ""}`}>
          <img src={Icon} alt="Logo" width={22} height={22} />
          <span className="name">{displayName}</span>
          <img src={Icon2} alt="Logo" width={22} height={22} />
        </div>

        <nav className="header-nav-desktop">
          <ul className="header-list-desktop">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  className={link.kind === "route" && isProjectsRoute ? "active" : ""}
                  onClick={() => handleNavClick(link)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="theme-container">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Change theme">
            <img
              src={SunIcon}
              alt=""
              className={`theme-icon sun ${theme === "dark" ? "show" : ""}`}
            />
            <img
              src={MoonIcon}
              alt=""
              className={`theme-icon moon ${theme === "light" ? "show" : ""}`}
            />
          </button>
        </div>

        <div className="burger-button-container">
          <div className="theme-container-mobile">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Change theme">
              <img
                src={SunIcon}
                alt=""
                className={`theme-icon sun ${theme === "dark" ? "show" : ""}`}
              />
              <img
                src={MoonIcon}
                alt=""
                className={`theme-icon moon ${theme === "light" ? "show" : ""}`}
              />
            </button>
          </div>
          <BurgerButton open={menuOpen} setOpen={setMenuOpen} />
        </div>
      </div>
      <div className={`menu-mobile ${menuOpen ? "open" : ""}`}>
        <nav className="header-nav-mobile">
          <ul className="header-list-mobile">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  className={link.kind === "route" && isProjectsRoute ? "active" : ""}
                  onClick={() => handleNavClick(link)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
