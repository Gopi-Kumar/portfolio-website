import Navbar from './shared/Navbar'
import snakeGame from '../images/snake-game.png'
import ofs from '../images/file.PNG'
import lb from '../images/letter-box.png'
import sf from '../images/sf.PNG'
import deto from '../images/deto.png'
import { useState } from 'react'
import '../styles/css/Project.css'
import NextPage from './shared/NextPage'
const projects = [
   
    {
        name : "Deto",
        about : "Deto is a designing app that helps you in design things easily like ID Cards, Business Card, Question Paper and more",
        thumbnail : deto,
        technology : "Nodejs, Expressjs, ejs, MongoDB, pdfjs, SASS",
        address: "https://deto.desync.in"
    },

    {
        name : "Bubble Grader",
        about : "Deto is a designing app that helps you in design things easily like ID Cards, Business Card, Question Paper and more",
        thumbnail : deto,
        technology : "Nodejs, Expressjs, ejs, MongoDB, pdfjs, SASS",
        address: "https://deto.desync.in"
    },
   
    {
        name : "School Website of R K International School",
        about : "Deto is a designing app that helps you in design things easily like ID Cards, Business Card, Question Paper and more",
        thumbnail : deto,
        technology : "Nodejs, Expressjs, ejs, MongoDB, pdfjs, SASS",
        address: "https://deto.desync.in"
    },
   
    {
        name : "Student Friend",
        about : "Student Friend is a web app that helps students to manage his routine, todo, notes and much more thing so student can focus on study. In student friend there is login-logout option that make student friend to use from anywhere and any device. For data management javascript localstorage api also used .",
        thumbnail : sf,
        technology : "Html, Css & Javascript,Nodejs, MongoDB",
        address: "https://student-friend.desync.in"
    },
    {
        name : "Share Link",
        about : "Share Link is an online file sharing web portal where you can share your file by uploading. after uploading you will get a link and send this link to that person which person you want to share",
        thumbnail : ofs,
        technology : "Nodejs, MongoDB, React, Express",
        address: "https://share-link.desync.in"
    },
  
    {
        name : "Snake Game",
        about : "A snake game is a game. you can play it in both PC And Mobile",
        technology : "Html, Css & Javascript",
        thumbnail: snakeGame,
        address  :"http://snake-game.desync.in"
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
                   {/* <img src={projects[currentProjectIndex].thumbnail}alt="" /> */}
                   <iframe src={projects[currentProjectIndex].address} title={projects[currentProjectIndex].name} ></iframe>
               </section>
               <section>
                   <h1>{projects[currentProjectIndex].name}</h1>
                   <p>{projects[currentProjectIndex].about}</p>
                   <div>
                       <p>Technologies Used</p>
                       <p>{projects[currentProjectIndex].technology}</p>
                   </div>
                   <a href={projects[currentProjectIndex].address}>Open in Browser</a>
                   {/* <a href={projects[currentProjectIndex].address}>Github Source Code</a> */}
               </section>
           </div>
            <div className="next_prev_container">
                <button onClick={decreaseCurrentIndex}><i className="fas fa-arrow-left"></i><i>Prev</i></button>
                <p>{currentProjectIndex+1}/{projects.length}</p>
                <button onClick={increaseCurrentIndex}><i>Next</i><i className="fas fa-arrow-right"></i></button>
            </div>
            <NextPage page={"certificates"}/>
       </div>
    )
}

export default Project;