import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import { scrollToId } from "./utils/scrollToId.jsx";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      if (location.hash) {
        scrollToId(location.hash.slice(1));
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => cancelAnimationFrame(rafId);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  const [colors, setColors] = useState({ base: "#252525", active: "#a1a1a1" });
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);

    const root = getComputedStyle(document.documentElement);
    const base = root.getPropertyValue("--bg-baseColor").trim();
    const active = root.getPropertyValue("--bg-activeColor").trim();
    setColors({ base, active });
  }, [theme]);

  return (
    <>
      <ScrollManager />
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<HomePage colors={colors} />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
