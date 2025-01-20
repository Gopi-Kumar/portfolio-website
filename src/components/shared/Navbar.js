import { useEffect, useRef } from "react";
import "../../styles/css/Navbar.css";
import displayPage from "../../scripts/displayPage";

const Navbar = () => {
    let dropdownOpened = false;
    const dropdownRef = useRef(null);

    const dropdown = (e) => {
        let dropdownButton = e.target;
        let dropdownMenu = dropdownButton.nextSibling;
        if (dropdownOpened) {
            dropdownOpened = false;
            dropdownMenu.style.display = "none";
        } else {
            dropdownOpened = true;
            dropdownMenu.style.display = "flex";
        }
    };

    const closeDropdown = () => {
        if (dropdownOpened) {
            let dropdownMenu = dropdownRef.current.querySelector("nav");
            dropdownOpened = false;
            dropdownMenu.style.display = "none";
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar" ref={dropdownRef}>
            <h1 className="name">Gopi Kumar Kaushik</h1>
            <i onClick={(e) => dropdown(e)} className="fas fa-bars"></i>
            <nav>
                <li onClick={(e) => displayPage("home")}>Home</li>
                <li onClick={(e) => displayPage("skills")}>My Skills</li>
                <li onClick={(e) => displayPage("projects")}>Projects</li>
                <li onClick={(e) => displayPage("certificates")}>
                    Certifications
                </li>
                <li onClick={(e) => displayPage("contact")}>Contact Me</li>
                <li>
                    {" "}
                    <a href="/resume.pdf" target="_blank">
                        My Resume
                    </a>
                </li>
            </nav>
        </div>
    );
};

export default Navbar;
