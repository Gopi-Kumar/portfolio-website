import '../../styles/css/Navbar.css';
const Navbar = ()=>{
    let dropdownOpened = false;
    const dropdown = (e) => {
        let dropdownButton = e.target;
        let dropdownMenu = dropdownButton.nextSibling;
        if(dropdownOpened){
            dropdownOpened = false;
            dropdownMenu.style.display = "none";
            dropdownButton.classList.add("fa-bars");
            dropdownButton.classList.remove("fa-window-close");
            return;
        }
            dropdownOpened = true;
            dropdownMenu.style.display = "flex";
            dropdownButton.classList.remove("fa-bars");
            dropdownButton.classList.add("fa-window-close");
        
    }

    const displayHome = ()=>{
        document.querySelector(".home").style.display = "flex";
        document.querySelector(".skills").style.display = "none";
        document.querySelector(".projects").style.display = "none";
    }
    const displaySkills = ()=>{
        document.querySelector(".home").style.display = "none";
        document.querySelector(".skills").style.display = "block";
        document.querySelector(".projects").style.display = "none";
    }
    const displayProjects = ()=>{
        document.querySelector(".home").style.display = "none";
        document.querySelector(".skills").style.display = "none";
        document.querySelector(".projects").style.display = "block";
    }

    return(
        <div className="navbar">
            <h1 className="name">Gopi Kumar Kaushik</h1>
           <i onClick={(e)=>dropdown(e)} className="fas fa-bars"></i>
            <nav>
                <li className="active" onClick={displayHome}>Home</li>
                <li onClick={displaySkills}>Skills</li>
                <li onClick={displayProjects}>Projects</li>
                <li> <a href="/resume.pdf" target="_blank">My Resume</a></li>
                {/* <li>Contact</li>P
                <li>More</li> */}
            </nav>
        </div>
    )
}

export default Navbar;