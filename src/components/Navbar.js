import logo from '../images/logo.png'
const Navbar = ()=>{
    // const handleddButton = (e)=>{
    //     const ddButton = e.target;
    //     const ddMenu = document.querySelector(".nav");
    //     if(ddButton.classList[1] === "fa-bars"){
    //        ddButton.classList.remove("fa-bars");
    //        ddButton.classList.add("fa-close");
    //        ddMenu.style.display = "flex";

           
    //     }else{
    //         ddButton.classList.remove("fa-close");
    //         ddButton.classList.add("fa-bars");
    //         ddMenu.style.display = "none";
    //     }
    // }

    return(
        <div className="navbar-section">
            <div className="logo">
                <img src={logo} alt="Gopi Kumar Kaushik"/>
            </div>
            <div className="navbar">
                <div className="items">
                        <a href="#skills" className="navbar-item">Home</a>
                        <a href="#skills" className="navbar-item">Skills</a>
                        <a href="#projects" className="navbar-item">Projects</a>
                        <a href="#message" className="navbar-item">Message me</a>
                </div>
                <div className="dropdown">
                    <div className="stick"></div>
                    <div className="stick"></div>
                    <div className="stick"></div>
                </div>
            </div>   
        </div>
    )
}

export default Navbar;