import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import IconLogo from "../../assets/icon.svg";
import IconLogo2 from "../../assets/icon2.svg";
import { scrollToId } from "../../utils/scrollToId.jsx";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      scrollToId("home");
      return;
    }

    navigate("/#home");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="creator">
          <button className="btn-footer" onClick={handleHomeClick}>
            <img src={IconLogo} alt="icon-logo" />
            <img src={IconLogo2} alt="icon-logo" />
          </button>
          <span>Creado con React. © 2025 Alan Heidel</span>
        </div>
        <div className="social-links-footer">
          <a href="https://www.linkedin.com/in/AlanHeidel/" target="_blank" rel="noreferrer">
            <i>
              <FaLinkedin />
            </i>
          </a>

          <a href="https://github.com/AlanHeidel" target="_blank" rel="noreferrer">
            <i>
              <FaGithub />
            </i>
          </a>

          <a href="mailto:alanmax2015.aheidel@gmail.com" target="_blank" rel="noreferrer">
            <i>
              <FaEnvelope />
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
}
