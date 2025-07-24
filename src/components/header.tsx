import { useEffect, useState } from "react";
import "./header.css"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    // Use a small timeout to ensure the DOM is ready
    setTimeout(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 50);
  }
};

export default function Header() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120; // Offset for header + some buffer
            setIsScrolled(window.scrollY > 50);
            
            const sections = ['home', 'skills', 'projects', 'about', 'contact'];
            
            // Check if we're at the bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
                setActiveSection('contact');
                return;
            }
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const sectionId = sections[i];
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Navbar */}
            <ul className="navbar">
                <li><a 
                    href="#home" 
                    className={activeSection === 'home' ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                >Home</a></li>
                <li><a 
                    href="#skills" 
                    className={activeSection === 'skills' ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                >Skills</a></li>
                <li><a 
                    href="#projects" 
                    className={activeSection === 'projects' ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                >Projects</a></li>
                <li><a 
                    href="#about" 
                    className={activeSection === 'about' ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                >About me</a></li>
                <li><a 
                    href="#contact" 
                    className={activeSection === 'contact' ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                >Contact</a></li>
            </ul>
        </div>
    );
}