import './SoftSkillsCard.css';

export default function SoftSkillsCard({
    icon,
    title,
    description
}) {
    return (
        <article className='soft-skills-card'>
            <div className='soft-skills-card-title-container'>
                <div className='soft-skills-card-icon'>
                    {icon}
                </div>
                <h4 className='soft-skills-card-title'>{title}</h4>
            </div>
            <div className='soft-skills-description-container'>
                <p className='soft-skills-description'>{description}</p>
            </div>
        </article>
    )
}