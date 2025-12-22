import "./Header.css";
import { useEffect, useState, useRef } from "react";
import Icon from "../../assets/icon.svg";
import Icon2 from "../../assets/icon2.svg";
import { scrollToId } from "../../utils/scrollToId.jsx";
import SunIcon from "../../assets/theme/sun-icon.svg"
import MoonIcon from "../../assets/theme/moon-icon.svg"
import BurgerButton from "./BurgerButton/BurgerButton.jsx";

const FULL_NAME = "Alan Heidel";
const navLinks = [
  { label: "Inicio", href: "home" },
  { label: "Proyectos", href: "projects" },
  { label: "Sobre Mi", href: "aboutme" },
  { label: "Skills", href: "skills" },
  { label: "Contacto", href: "contact" },
];


export default function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [displayName, setDisplayName] = useState(FULL_NAME);
  const typingTimeout = useRef();
  const headerRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

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

  return (
    <header ref={headerRef} className={`header-pill ${scrolled ? " scrolled" : ""} ${menuOpen ? "open" : ""}`}>
      <div className='header-container'>
        <div onClick={() => scrollToId('home')} className={`name-container${scrolled ? " scrolled" : ""}`}>
          <img src={Icon} alt="Logo" width={22} height={22} />
          <span className="name">{displayName}</span>
          <img src={Icon2} alt="Logo" width={22} height={22} />
        </div>

        <nav className="header-nav-desktop">
          <ul className="header-list-desktop">
            {navLinks.map((link, i) => (
              <li key={i}>
                <button onClick={() => scrollToId(link.href)} >{link.label}</button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="theme-container">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Change theme">
            <img src={SunIcon} alt="" className={`theme-icon sun ${theme === 'dark' ? 'show' : ''}`} />
            <img src={MoonIcon} alt="" className={`theme-icon moon ${theme === 'light' ? 'show' : ''}`} />
          </button>
        </div>


        <div className="burger-button-container">
          <div className="theme-container-mobile">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Change theme">
              <img src={SunIcon} alt="" className={`theme-icon sun ${theme === 'dark' ? 'show' : ''}`} />
              <img src={MoonIcon} alt="" className={`theme-icon moon ${theme === 'light' ? 'show' : ''}`} />
            </button>
          </div>
          <BurgerButton open={menuOpen} setOpen={setMenuOpen} />
        </div>
      </div>
      <div className={`menu-mobile ${menuOpen ? "open" : ""}`}>
        <nav className="header-nav-mobile">
          <ul className="header-list-mobile">
            {navLinks.map((link, i) => (
              <li key={i}>
                <button onClick={() => {
                  scrollToId(link.href);
                  setMenuOpen(false);
                }} >{link.label}</button>
              </li>
            ))}
          </ul>
        </nav>

      </div>

    </header>
  );
}
