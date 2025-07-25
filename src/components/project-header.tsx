import { useEffect, useState } from "react";
import "./header.css"

export default function ProjectHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (section: string) => {
        // Navigate back to main portfolio with hash
        window.location.href = `/#${section}`;
    };

    return (
        <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Back button on the left */}
            <div className="back-button-container">
                <a 
                    href="../../index.html#projects" 
                    onClick={(e) => { e.preventDefault(); handleNavigation('projects'); }}
                    className="back-button"
                >
                    ← Back to Portfolio
                </a>
            </div>
            
            {/* Navbar on the right */}
            <ul className="navbar">
                <li><a 
                    href="../../index.html#home"
                    onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}
                >Home</a></li>
                <li><a 
                    href="../../index.html#skills"
                    onClick={(e) => { e.preventDefault(); handleNavigation('skills'); }}
                >Skills</a></li>
                <li><a 
                    href="../../index.html#projects"
                    onClick={(e) => { e.preventDefault(); handleNavigation('projects'); }}
                >Projects</a></li>
                <li><a 
                    href="../../index.html#about"
                    onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}
                >About me</a></li>
                <li><a 
                    href="../../index.html#contact"
                    onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}
                >Contact</a></li>
            </ul>
        </div>
    );
}
