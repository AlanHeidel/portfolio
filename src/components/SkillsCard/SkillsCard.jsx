import './SkillsCard.css';

export default function SkillsCard({
    icon,
    title,
    skills = []
}) {
    return (
        <div className='skills-card'>
            <div className='skills-card-title-container'>
                <div className='skills-card-icon'>
                    {icon}
                </div>
                <h4 className='skills-card-title'>{title}</h4>
            </div>
            <div className='skills-items-container'>
                {skills.map((skill, i) => (
                    <span key={i} className="skill-item">
                        {skill.icon}
                        <span className="skill-name">{skill.name}</span>
                    </span>
                ))}
            </div>
        </div >
    )
}