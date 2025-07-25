import './collaborator-card.css'

// Card Component for User-Reviews

type CollaboratorProps = {
    avatar?: string
    name: string
    title?: string
    contribution: string
}

export default function Collaborator({avatar, name, title, contribution}: CollaboratorProps) {
    return (
        <div className="collaborator-container">
           <img src={avatar} alt="collaborator avatar" />
           <div className='collaborator-info'>
                <h1>{name}</h1>
                <h3>{title}</h3>
                <p>{contribution}</p>
           </div>
        </div>
    );
}