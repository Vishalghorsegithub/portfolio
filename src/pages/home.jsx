import React, { useState, useEffect } from 'react';

// SVG Icon for the mobile menu toggle
const MenuIcon = ({ isOpen }) => (
    <div className="mobile-toggle">
        <span className={isOpen ? 'span1-open' : ''}></span>
        <span className={isOpen ? 'span2-open' : ''}></span>
        <span className={isOpen ? 'span3-open' : ''}></span>
    </div>
);

// SVG Icon for the download button
const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to handle header background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["Home", "About", "Portfolio", "Skills", "Contact"];

    return (
        <header className={`portfolio-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <h2>John Doe</h2>
                </div>
                
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        {navLinks.map(link => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <div className="header-actions">
                    <button className="btn-download-cv">
                        <DownloadIcon />
                        Download CV
                    </button>
                    <button className="mobile-toggle-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <MenuIcon isOpen={isMenuOpen} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
