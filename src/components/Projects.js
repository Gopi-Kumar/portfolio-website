import Navbar from './shared/Navbar'
import snakeGame from '../images/snake-game.png'
import ofs from '../images/file.PNG'
import lb from '../images/letter-box.png'
import sf from '../images/sf.PNG'
import { useState } from 'react'
import '../styles/css/Project.css'
const projects = [
    {
        name : "Share Link",
        about : "Share Link is an online file sharing web portal where you can share your file by uploading. after uploading you will get a link and send this link to that person which person you want to share",
        thumbnail : ofs,
        technology : "Nodejs, MongoDB, React, Express",
        address: "https://share-link-app.netlify.com"
    },
    {
        name : "Deto",
        about : "Share Link is an online file sharing web portal where you can share your file by uploading. after uploading you will get a link and send this link to that person which person you want to share",
        thumbnail : ofs,
        technology : "Nodejs, MongoDB, React, Express",
        address: "https://share-link-app.netlify.com"
    },
    {
        name : "Student Friend",
        about : "Student Friend is a web app that helps students to manage his routine, todo, notes and much more thing so student can focus on study. In student friend there is login-logout option that make student friend to use from anywhere and any device. For data management javascript localstorage api also used .",
        thumbnail : sf,
        technology : "Html, Css & Javascript,Nodejs, MongoDB",
        address: "https://student-friend.netlify.com"
    },
    {
        name : "Snake Game",
        about : "A snake game is a game which founded in Nokia's older version cellphone. ",
        technology : "Html, Css & Javascript",
        thumbnail: snakeGame,
        address  :"http://snake-game-gopi.netlify.com"
    },
    {
        name : "Letter Box",
        thumbnail : lb,
        technology : "Nodejs, MongoDB, HTML, CSS",
        address : "https://letter-box.herokuapp.com/",
        about : "Letter box is a free api that can you use to get message and retrive message without writing single line of code for backend"
    }
]

const Project =  () => {
    const [currentProjectIndex, setcurrentProjectIndex] = useState(0)
    const increaseCurrentIndex = ()=>{
        if(currentProjectIndex === projects.length - 1){
            setcurrentProjectIndex(0);
        }else{
            setcurrentProjectIndex(currentProjectIndex+1);
        }
    }
    const decreaseCurrentIndex = ()=>{
        if(currentProjectIndex === 0){
            setcurrentProjectIndex(projects.length - 1);
        }else{
            setcurrentProjectIndex(currentProjectIndex-1);
        }
    }

    return (
       <div className="projects">
           <Navbar/>
           <div className="project_container">
               <section className="img_container">
                   <img src={projects[currentProjectIndex].thumbnail}alt="" />
               </section>
               <section>
                   <h1>{projects[currentProjectIndex].name}</h1>
                   <p>{projects[currentProjectIndex].about}</p>
                   <div>
                       <p>Technologies Used</p>
                       <p>{projects[currentProjectIndex].technology}</p>
                   </div>
                   <a href={projects[currentProjectIndex].address}>See Preview</a>
                   <a href={projects[currentProjectIndex].address}>Github Source Code</a>
               </section>
           </div>
            <div className="next_prev_container">
                <button onClick={decreaseCurrentIndex}><i className="fas fa-arrow-left"></i><i>Prev</i></button>
                <p>{currentProjectIndex+1}/{projects.length}</p>
                <button onClick={increaseCurrentIndex}><i>Next</i><i className="fas fa-arrow-right"></i></button>
            </div>
       </div>
    )
}

export default Project;