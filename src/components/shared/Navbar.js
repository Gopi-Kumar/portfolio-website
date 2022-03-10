import '../../styles/css/Navbar.css';
const Navbar = ()=>{
    let dropdownOpened = false;
    const dropdown = (e) => {
        let dropdownButton = e.target;
        let dropdownMenu = dropdownButton.nextSibling;
        if(dropdownOpened){
            dropdownOpened = false;
            dropdownMenu.style.display = "none";
        }else{
            dropdownOpened = true;
            dropdownMenu.style.display = "flex";
        }
        
    }

    const displayHome = (ele)=>{
        // ele.classList.add("active")
        document.querySelector(".home").style.display = "flex";
        document.querySelector(".skills").style.display = "none";
        document.querySelector(".projects").style.display = "none";
       
    }
    const displaySkills = (ele)=>{
        // ele.classList.add("active")
        document.querySelector(".home").style.display = "none";
        document.querySelector(".skills").style.display = "block";
        document.querySelector(".projects").style.display = "none";
       
    }
    const displayProjects = (ele)=>{
        // ele.classList.add("active")
        document.querySelector(".home").style.display = "none";
        document.querySelector(".skills").style.display = "none";
        document.querySelector(".projects").style.display = "block";
       
    }

    return(
        <div className="navbar">
            <h1 className="name">Gopi Kumar Kaushik</h1>
           <i onClick={(e)=>dropdown(e)} className="fas fa-bars"></i>
            <nav>
                <li  onClick={(e) => {displayHome(e.currentTarget)}}>Home</li>
                <li onClick={(e) => displaySkills(e.currentTarget)}>Skills</li>
                <li onClick={(e) => displayProjects(e.currentTarget)}>Projects</li>
                <li> <a href="/resume.pdf" target="_blank">My Resume</a></li>
                {/* <li>Contact</li>P
                <li>More</li> */}
            </nav>
        </div>
    )
}

export default Navbar;