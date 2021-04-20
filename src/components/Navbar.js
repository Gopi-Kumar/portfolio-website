const Navbar = ()=>{
    const handleddButton = (e)=>{
        const ddButton = e.target;
        const ddMenu = document.querySelector(".nav");
        if(ddButton.classList[1] === "fa-bars"){
           ddButton.classList.remove("fa-bars");
           ddButton.classList.add("fa-close");
           ddMenu.style.display = "flex";

           
        }else{
            ddButton.classList.remove("fa-close");
            ddButton.classList.add("fa-bars");
            ddMenu.style.display = "none";
        }
    }

    return(
        <div className="fixedNavbar navbar">
            <div className="logo">
                <p>gkkaushik</p>
            </div>
            <div className="nav">
                <a href="#hero">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#message">Hire Me</a>
            </div>
            <i className="fa fa-bars" onClick={(e)=>handleddButton(e)}></i>
        </div>
    )
}

export default Navbar;