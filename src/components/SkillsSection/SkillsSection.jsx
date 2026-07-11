import "./SkillsSection.css";
import { useEffect, useState } from "react";
import { FaUsers, FaCode } from "react-icons/fa";
import SkillsCard from "../SkillsCard/SkillsCard";
import SoftSkillsCard from "../SkillsCard/SoftSkillsCard";
import { techCards, softCards } from "../../data/skills";

const EXIT_DURATION_MS = 380;
const ENTER_DURATION_MS = 520;

export default function SkillsSection() {
  const [renderTab, setRenderTab] = useState("tech");
  const [pendingTab, setPendingTab] = useState(null);
  const [phase, setPhase] = useState("idle");

  const visibleTab = pendingTab ?? renderTab;
  const list = renderTab === "tech" ? techCards : softCards;

  useEffect(() => {
    if (phase !== "exit" || !pendingTab) return undefined;

    const timeoutId = window.setTimeout(() => {
      setRenderTab(pendingTab);
      setPhase("enter");
    }, EXIT_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [phase, pendingTab]);

  useEffect(() => {
    if (phase !== "enter") return undefined;

    const timeoutId = window.setTimeout(() => {
      setPhase("idle");
      setPendingTab(null);
    }, ENTER_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [phase]);

  const handleTabChange = (nextTab) => {
    if (nextTab === visibleTab || phase !== "idle") return;

    setPendingTab(nextTab);
    setPhase("exit");
  };

  return (
    <>
      <div className="pill-toggle">
        <button
          className={`pill-btn ${visibleTab === "tech" ? "active" : ""}`}
          onClick={() => handleTabChange("tech")}
        >
          <FaCode size={25} /> Técnicas
        </button>
        <button
          className={`pill-btn ${visibleTab === "soft" ? "active" : ""}`}
          onClick={() => handleTabChange("soft")}
        >
          <FaUsers size={25} /> Blandas
        </button>
      </div>

      <div className="skills-cards-stage">
        <div className={`skills-cards-container skills-cards-container--${phase}`}>
          {list.map((card, index) =>
            renderTab === "tech" ? (
              <SkillsCard key={card.title ?? index} {...card} />
            ) : (
              <SoftSkillsCard key={card.title ?? index} {...card} />
            )
          )}
        </div>
      </div>
    </>
  );
}
