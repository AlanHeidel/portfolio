import './AboutCard.css';

export default function AboutCard({
    icon,
    title,
    description,
    links = []
}) {
    return (
        <div className='about-card'>
            <div className='about-card-title-container'>
                <div className='about-card-icon'>
                    {icon}
                </div>
                <h4 className='about-card-title'>{title}</h4>
            </div>
            <div>
                <p className='about-card-description'>{description}</p>
            </div>
            <div className='social-contact'>
                {links.map((link, i) => (
                    <a href={link.href} key={i} target="_blank" rel="noreferrer" className="social-icon" >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div >
    )
}
