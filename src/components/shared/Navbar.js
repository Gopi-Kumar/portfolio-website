import '../../styles/css/Navbar.css';
const Navbar = ()=>{
    let dropdownOpened = false;
    const dropdown = (e) => {
        let dropdownButton = e.target;
        let dropdownMenu = dropdownButton.parentNode.nextSibling;
        console.log();
        if(dropdownOpened){
            dropdownOpened = false;
            dropdownMenu.style.display = "none";
            dropdownButton.classList.add("fa-bars");
            dropdownButton.classList.remove("fa-window-close");
        }else{
            dropdownOpened = true;
            dropdownMenu.style.display = "flex";
            dropdownButton.classList.remove("fa-bars");
            dropdownButton.classList.add("fa-window-close");
        }
    }
    return(
        <div className="navbar">
            <h1 className="name">Gopi Kumar Kaushik</h1>
            <button onClick={(e)=>dropdown(e)}><i className="fas fa-bars"></i></button>
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