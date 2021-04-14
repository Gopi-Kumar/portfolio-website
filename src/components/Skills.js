import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import angularLogo from '../images/angular.png'
import bootstrapLogo from '../images/bootstrap.png'
import cLogo from '../images/c.png'
import excelLogo from '../images/excel.png'
import gitLogo from '../images/git.png'
import javaLogo from '../images/java.png'
import mongoLogo from '../images/mongo.png'
import nodeLogo from '../images/node.png'
import photoshopLogo from '../images/photoshop.png'
import phpLogo from '../images/php.png'
import powerpointLogo from '../images/powerpoint.png'
import pythonLogo from '../images/python.png'
import reactLogo from '../images/react.png'
import sassLogo from '../images/sass.png'
import sqlLogo from '../images/sql.png'
import vsLogo from '../images/vs.png'
import wordLogo from '../images/word.png'


const Skills = () => {
    const hardSkills = {
        programmingLanguages : [
            {
                main : "Client Side",
                secondary : [
                    { 
                        src : htmlLogo,
                        name : "HTML"
                    },
                    { 
                        src : angularLogo,
                        name : "Angular"
                    },
                    {
                         src : reactLogo,
                        name : "React"
                    },
                    {
                         src : cssLogo,
                        name : "CSS"
                    },
                    {
                        src : sassLogo,
                        name : "SASS"
                    },
                    { 
                        src : bootstrapLogo,
                        name : "Bootstrap"
                    }
                ],
            },
            {
                main : "Server Side",
                secondary : [
                    {
                        src : phpLogo,
                         name : "PHP"
                    },
                    {
                        src : nodeLogo,
                        name : "Nodejs"
                    }
                 ]
            },
            {
                main : "Database",
                secondary : [
                    {
                        src : sqlLogo,
                        name : "SQL"
                    },
                    {
                        src : mongoLogo,
                        name : "MongoDB"
                    }
                ]
            },
            {
                main: "Programming Languages",
                secondary : [
                    {
                        src : cLogo,
                        name : "C++"
                    },
                    {
                        src : pythonLogo,
                        name : "Python"
                    },
                    {
                        src : javaLogo,
                        name : "Java"
                    }

                    ]
            },{
                main : "Tools",
                secondary : [
                    {
                        src : gitLogo,
                        name : "Git"
                    },
                    {
                        src : vsLogo,
                        name : "Visual Studio Code"
                    },
                    {
                        src : wordLogo,
                        name : "MS Word"
                    },
                    {
                        src  :excelLogo,
                        name : "MS Excel"
                    },
                    {
                        src : powerpointLogo,
                        name : "MS Powerpoint"
                    },
                    {
                        src : photoshopLogo,
                        name : "Adobe Photoshop"
                    }
                ]

            }

        ],
    }

    const softSkill = ["Well Disciplined","Good Listener","Good learner", "Team worker","Creative","Adaptability","Logical thinking"]

    return (
        <div id="skills">
            <h1 className="skills_header">My Hard Skills</h1>
            <div id="hardSkills">
                <div id="pl">
                    {
                        hardSkills["programmingLanguages"].map(pl => {
                            return (
                                <div className="plSkill">
                                    <section id="main">{pl.main}</section>
                                    <section id="secondry">
                                        {pl.secondary.map(pls => {
                                            return (
                                                <span>
                                                <img src={pls.src} alt=""/>
                                                <li>{pls.name}</li>
                                                </span>
                                            )
                                        })}
                                    </section>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <h1 className="skills_header">My Soft Skills</h1>
            <div id="softSkills">
                {softSkill.map(ss => {
                    return <li>{ss}</li>
                })}
            </div>
        </div>
    )
}


export default Skills;