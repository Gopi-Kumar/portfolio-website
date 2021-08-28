import '../../styles/css/Navbar.css';
const Navbar = ()=>{
    let dropdownOpened = false;
    const dropdown = (e) => {
        let dropdownButton = e.target;
        console.log(dropdownButton)
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
    return(
        <div className="navbar">
            <h1 className="name">Gopi Kumar Kaushik</h1>
           <i onClick={(e)=>dropdown(e)} className="fas fa-bars"></i>
            <nav>
                <li className="active">Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>More</li>
            </nav>
        </div>
    )
}

export default Navbar;