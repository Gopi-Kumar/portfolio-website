
import Navbar from './shared/Navbar'
import '../styles/css/Skills.css'
import NextPage from './shared/NextPage'
const Skills= () => {

    // what skills i have
     let skills = [
       
        {
            primary : "Frontent & Backend Development",
            secondry : ["MERN Stack", "PHP", "SQL", "SQLite", "MongoDB", "d3.js", ]
        },
        {
            primary : "Mobile and Desktop Development",
            secondry : ["Flutter", "Electron.js", "Tkinter", "Firebase"]
        },
        {
            primary : "Tools and Platform",
            secondry : ["MS Office","Git","Github","Figma","Adobe Photoshop","Docker", "Linux", "Mocha&Chai", "NGINX", "Pip"]
        },
        {
            primary : "Automation and Scripting",
            secondry : ["Selenium","Python","Shell", "GoogleScript", "Adobe Photoshop"]
        },
        {
            primary : "Design and Multimedia Manipulation",
            secondry : ["OpenCV","Adobe Photoshop", "Figma", "Openshot"]
        },
        {
            primary : "Subject",
            secondry : ["Data Structure and Algorithm", "System Design and Analysis", "Database Management System", "Accountancy"]
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
            <NextPage page={"projects"}/>
        </div>
    )
}

export default Skills;