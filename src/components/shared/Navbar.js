import '../../styles/css/Navbar.css';
import displayPage from '../../scripts/displayPage'
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

   

  
    return(
        <div className="navbar">
            <h1 className="name">Gopi Kumar Kaushik</h1>
           <i onClick={(e)=>dropdown(e)} className="fas fa-bars"></i>
            <nav>
                <li  onClick={(e) => {displayPage("home")}}>Home</li>
                <li onClick={(e) => displayPage("skills")}>Skills</li>
                <li onClick={(e) => displayPage("projects")}>Projects</li>
                <li onClick={(e) => displayPage("certificates")}>Certifications</li>
                <li> <a href="/resume.pdf" target="_blank">My Resume</a></li>

                {/* <li>Contact</li>P
                <li>More</li> */}
            </nav>  
        </div>
    )
}

export default Navbar;
