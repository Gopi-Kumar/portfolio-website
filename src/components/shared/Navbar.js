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

    const display = ( ele ) => {
        let divs = document.querySelectorAll(".App>div")
        divs.forEach(div => {
            if(div.classList[0] == ele){
                div.style.display = "block"
            }else{
                div.style.display = "none"
            }
        });
    }


    // const displayHome = (ele)=>{
    //     // ele.classList.add("active")
    //     document.querySelector(".home").style.display = "flex";
    //     document.querySelector(".skills").style.display = "none";
    //     document.querySelector(".projects").style.display = "none";

    // }
    // const displaySkills = (ele)=>{
    //     // ele.classList.add("active")
    //     document.querySelector(".home").style.display = "none";
    //     document.querySelector(".skills").style.display = "block";
    //     document.querySelector(".projects").style.display = "none";

    // }
    // const displayProjects = (ele)=>{
    //     // ele.classList.add("active")
    //     document.querySelector(".home").style.display = "none";
    //     document.querySelector(".skills").style.display = "none";
    //     document.querySelector(".projects").style.display = "block";

    // }
    // const displayCertificates = (ele)=>{
    //     // ele.classList.add("active")
    //     document.querySelector(".home").style.display = "none";
    //     document.querySelector(".skills").style.display = "none";
    //     document.querySelector(".projects").style.display = "block";

    // }

    return(
        <div className="navbar">
            <h1 className="name">Gopi Kumar Kaushik</h1>
           <i onClick={(e)=>dropdown(e)} className="fas fa-bars"></i>
            <nav>
                <li  onClick={(e) => {display("home")}}>Home</li>
                <li onClick={(e) => display("skills")}>Skills</li>
                <li onClick={(e) => display("projects")}>Projects</li>
                <li onClick={(e) => display("certificates")}>Certifications</li>
                <li> <a href="/resume.pdf" target="_blank">My Resume</a></li>

                {/* <li>Contact</li>P
                <li>More</li> */}
            </nav>
        </div>
    )
}

export default Navbar;
