import "./project-card.css"

type ProjectProps = {
    id?: string;
    image: string;
    title: string;
    description?: string;
    tags: string[];
}

export default function Project({image, title, description, tags}: ProjectProps) {
    return(
        <div className="project-card">
            <img className="project-image" src={image} alt="Project Image"/>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                {description && <p className="project-description">{description}</p>}
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

