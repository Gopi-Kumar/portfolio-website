
import Navbar from './shared/Navbar'
import '../styles/css/Skills.css'

const Skills= () => {

    // what skills i have
     let skills = [
       
        {
            primary : "Programming Languages",
            secondry : ["Javascript","Nodejs","PHP","Python", "MySQL", "MongoDB","HTML","CSS","Bash", "C++"]
        },
        {
            primary : "Libraries and Frameworks",
            secondry : ["Reactjs","Expressjs","Tkinter","Nextjs","ejs","jQuery", "Bootstrap", "SASS"]
        },
        {
            primary : "Tools and Platform",
            secondry : ["Git","Figma","Adobe Photoshop","Docker", "MS Office","Linux", "Mocha&Chai", "NPM", "Pip"]
        },
        {
            primary : "Extra",
            secondry : ["Data Structure and Algorithm", "Computer Operating System", "Networking"]
        },
        {
            primary : "Soft Skills",
            secondry : ["Quick Learner","Presentation Skills", "Communication", "Team Player"]
        }
    ]
    // What skills should be
    // let skills = [
    //     {
    //         primary : "Web Development",
    //         secondry : ["HTML","CSS","Javscript","PHP","Nodejs","Next.js"]
    //     },
    //     {
    //         primary: "Andriod Development",
    //         secondry : ["React Native", "Flutter"]
    //     },
    //     {
    //         primary: "Desktop Development",
    //         secondry: ["Python tkinter", "Electronjs", "C++"]
    //     },
    //     {
    //         primary: "Database",
    //         secondry : ["MySql", "MongoDB", "Firebase"]
    //     },
    //     {
    //         primary : "Tools and Plateform",
    //         secondry : ["Git & Github","Figma","Photoshop","MS Office","AWS", "DevOps"]
    //     },
    //     {
    //       primary : "Programming Languages",
    //       secondry : ["C++","Python","Javascript","Go","Dart","Java"]
    //     }, 
    //     {
    //         primary : "Computer Science",
    //         secondry : ["Machine Learning","Operating System","Network and Communication", "DBMS","Compiler Design"]
    //     },
    //     {
    //         primary: "Cyber Security",
    //         secondry : ["XSS", "SQL Injection","Helmet js"]
    //     }
       
    // ]
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