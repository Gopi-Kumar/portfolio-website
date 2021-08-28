import react from 'react';
import Navbar from './shared/Navbar'
import '../styles/css/Skills.css'

const Skills= () => {
    let skills = [
        {
            primary : "Full Stack",
            secondry : ["HTML","CSS","SCSS","Javscript","PHP", "MySql","MERN Stack","React Native","Electron js"]
        },
        {
            primary : "Tools",
            secondry : ["Git & Github","Figma","Photoshop","VS Code","MS Office","NPM"]
        },
        {
          primary : "Programming Languages",
          secondry : ["C++","Python","C++ SFML"]
        }, 
        {
            primary : "Computer Science",
            secondry : ["Operating System","Network and Communication", "DBMS","Compiler Design"]
        },
        {
             primary: "Ethical Hacking",
             secondry : ["XSS", "SQL Injection","Helmet js"]
        }
       
    ]
    return (
        <div className="skills">
            <Navbar/>
            <div className="skills_container">
                {skills.map(s => {
                    return (
                        <div key={Math.random()} className="skill_container">
                            <div className="skill_primary">
                                <p>{s.primary}</p>
                            </div>
                            <div className="skill_secondry">
                            {s.secondry.map(ss => {
                                    return (
                                        <p key={Math.random()}>{ss}</p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;