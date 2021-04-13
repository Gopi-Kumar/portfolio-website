export default () => {
    const projects = [
        {
            name : "Online File Sharing",
            thumbnail : "",
            technology : "MERN Stack",
            address: "https://share-link-app.herokuapp.com"
        },
        {
            name : "Covid 19 Tracker",
            thumbnail : "",
            technology : "Angular",
            address : ""
        },
        {
            name : "Snake Game",
            thumbnail : "",
            technology : "Html, Css & Javascript",
            address  :"http://snakegame.rf.gd"
        },
        {
            name : "Todo",
            thumbnail : "",
            technology : "React & Redux",
            address :"https://todobygkkaushik.netlify.com"
        },
        {
            name : "Alarm",
            thumbnail : "",
            technology : "Html, Css & Javascript",
            address : "http://alarm.rf.gd"
        },{
            name : "Image Website",
            thumbnail : "",
            technology : "Html, Css, Javascript, PHP & MongoDB",
            address : "http://chiranjivseyes.rf.gd"
        }
    ]
    return (
        <div id="projects">
            <h1>My Projects</h1>
            {
                projects.map(p => {
                    return (
                        <div className="project">
                            <div className="info">
                                <p className="name">{p.name}</p>
                                <p className="technology">Technology Used : <span>{p.technology}</span></p>
                                <a href={p.address}>Open {p.name}</a>
                            </div>
                            <div className="thumbnail"></div>
                        </div>
                    )
                })
            }

        </div>
    )
}
