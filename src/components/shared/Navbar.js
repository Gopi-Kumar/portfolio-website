import { useEffect, useRef, useState } from "react";
import "../../styles/css/Navbar.css";
import displayPage from "../../scripts/displayPage";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navbarRef = useRef(null);
    const navRef = useRef(null);
    const backdropRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavClick = (page) => {
        displayPage(page);
        closeMenu();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target) &&
                isMenuOpen
            ) {
                closeMenu();
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        // Prevent body scroll when menu is open on mobile
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <div 
                className={`navbar ${isScrolled ? "scrolled" : ""}`} 
                ref={navbarRef}
            >
                <h1 className="name" onClick={() => handleNavClick("home")}>
                    Gopi Kumar Kaushik
                </h1>
                <i
                    onClick={toggleMenu}
                    className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
                    aria-label="Toggle navigation menu"
                ></i>
                <nav 
                    ref={navRef}
                    className={isMenuOpen ? "active" : ""}
                >
                    <li onClick={() => handleNavClick("home")}>Home</li>
                    <li onClick={() => handleNavClick("skills")}>My Skills</li>
                    <li onClick={() => handleNavClick("projects")}>Projects</li>
                    <li onClick={() => handleNavClick("certificates")}>
                        Certifications
                    </li>
                    <li onClick={() => handleNavClick("contact")}>Contact Me</li>
                    <li>
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            My Resume
                        </a>
                    </li>
                </nav>
            </div>
            <div 
                ref={backdropRef}
                className={`mobile-menu-backdrop ${isMenuOpen ? "active" : ""}`}
                onClick={closeMenu}
            ></div>
        </>
    );
};

export default Navbar;
