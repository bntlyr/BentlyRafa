import { useState, useEffect } from 'react';
import ProjectHeader from "../components/project-header";
import { Projects } from "../data";
import "./projects.css";

export default function Project() {
    const [currentProject, setCurrentProject] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [showAllCollaborators, setShowAllCollaborators] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Get project ID from URL parameters
        const params = new URLSearchParams(window.location.search);
        const projectId = params.get('id');
        
        if (projectId) {
            const project = Projects.find(p => p.id === projectId);
            if (project) {
                setCurrentProject(project);
                setSelectedImage(project.gallery[0]);
            }
        }
    }, []);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!isModalOpen || !currentProject) return;
            
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                navigatePrevious();
            } else if (e.key === 'ArrowRight') {
                navigateNext();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen, currentImageIndex, currentProject]);

    const openModal = (imageIndex: number) => {
        setCurrentImageIndex(imageIndex);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigateNext = () => {
        if (currentProject && currentImageIndex < currentProject.gallery.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const navigatePrevious = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    if (!currentProject) {
        return (
            <>
                <ProjectHeader />
                <div className="project-not-found">
                    <h1>Project not found</h1>
                    <p>The project you're looking for doesn't exist.</p>
                </div>
            </>
        );
    }

    return (
        <>  
            <ProjectHeader/>

            {/* Project Hero Section */}
            <section className="project-hero-section">
                <div className="project-hero-content">
                    {/* Gallery image displays current selected image */}
                    <div className="project-main-image" onClick={() => openModal(currentProject.gallery.indexOf(selectedImage))}>
                        <img src={selectedImage} alt={currentProject.title} />
                    </div>
                    
                    {/* Gallery to showcase the other screenshots or videos */}
                    <div className="project-gallery">
                        {currentProject.gallery.map((image: string, index: number) => (
                            <div 
                                key={index} 
                                className={`gallery-item ${selectedImage === image ? 'active' : ''}`}
                                onClick={() => setSelectedImage(image)}
                            >
                                <img src={image} alt={`${currentProject.title} screenshot ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="project-hero-text">
                    <h1>{currentProject.title}</h1>
                    <h3>{currentProject.longDescription || currentProject.description}</h3>
                    <div className="project-tags">
                        {currentProject.tags.map((tag: string, index: number) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                    <div className="project-buttons">
                        <button 
                            className="btn btn-primary"
                            onClick={() => window.open(currentProject.githubLink, '_blank')}
                            disabled={!currentProject.githubLink}
                        >
                            See Github
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => window.open(currentProject.liveDemoLink, '_blank')}
                            disabled={!currentProject.liveDemoLink}
                        >
                            Try it out!
                        </button>
                    </div>
                </div>
            </section>
            

            {/* Image Modal */}
            {isModalOpen && currentProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            ×
                        </button>
                        
                        <button 
                            className="modal-nav modal-prev" 
                            onClick={navigatePrevious}
                            disabled={currentImageIndex === 0}
                        >
                            ‹
                        </button>
                        
                        <div className="modal-image-container">
                            <img 
                                src={currentProject.gallery[currentImageIndex]} 
                                alt={`${currentProject.title} screenshot ${currentImageIndex + 1}`}
                                className="modal-image"
                            />
                        </div>
                        
                        <button 
                            className="modal-nav modal-next" 
                            onClick={navigateNext}
                            disabled={currentImageIndex === currentProject.gallery.length - 1}
                        >
                            ›
                        </button>
                        
                        <div className="modal-counter">
                            {currentImageIndex + 1} / {currentProject.gallery.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}