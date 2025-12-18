import './SkillsSection.css';
import { useState } from 'react';
import SkillsCard from '../SkillsCard/SkillsCard';
import SoftSkillsCard from '../SkillsCard/SoftSkillsCard';
import { FaUsers, FaCode } from "react-icons/fa";
import { techCards, softCards } from '../../data/skills';

export default function SkillsSection() {
    const [tab, setTab] = useState('tech');
    const list = tab === 'tech' ? techCards : softCards;

    return (
        <>
            <div className="pill-toggle">
                <button className={`pill-btn ${tab === 'tech' ? 'active' : ''}`} onClick={() => setTab('tech')}><FaCode size={25} /> Técnicas</button>
                <button className={`pill-btn ${tab === 'soft' ? 'active' : ''}`} onClick={() => setTab('soft')}><FaUsers size={25} /> Blandas</button>
            </div>

            <div className="skills-cards-container">
                {list.map((card, i) =>
                    tab === 'tech' ? <SkillsCard key={i} {...card} /> : <SoftSkillsCard key={i} {...card} />
                )}
            </div>
        </>
    );
}
