const Skills = () => {
    const hardSkills = {
        programmingLanguages : [
            {
                main : "Client Side",
                secondary : ["HTML","Angular","React","CSS","SASS","Bootstrap"],
            },
            {
                main : "Server Side",
                secondary : ["PHP", "Nodejs"]
            },
            {
                main : "Database",
                secondary : ["SQL", "MongoDB"]
            },
            {
                main: "Programming Languages",
                secondary : ["C++","Python","Java"]
            }
        ],
        tools: [
            "Git",
            "Visual Studio Code",
            "MS Word",
            "MS Excel",
            "MS Powerpoint",
            "Adobe Photoshop"
        ]
    }

    const softSkill = ["Well Disciplined","Good Listener","Good learner", "Team worker","Creative","Adaptability","Logical thinking"]

    return (
        <div id="skills">
            <h1 className="skills_header">My Hard Skills</h1>
            <div id="hardSkills">
                <p>Programming Languages</p>
                <div id="pl">
                    {
                        hardSkills["programmingLanguages"].map(pl => {
                            return (
                                <div className="plSkill">
                                    <section id="main">{pl.main}</section>
                                    <section id="secondry">
                                        {pl.secondary.map(pls => {
                                            return (
                                                <li>{pls}</li>
                                            )
                                        })}
                                    </section>
                                </div>
                            )
                        })
                    }
                </div>
                <div id="t">
                <p>Tools</p>
                {hardSkills.tools.map(t => {
                    return (
                        <p>{t}</p>
                    )
                })}
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