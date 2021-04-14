import snakeGame from '../images/snake.jpg'
import todo from '../images/todo.PNG'
import Alarm from '../images/alarm.PNG'
import ofs from '../images/file.PNG'

const Project =  () => {
    const projects = [
        {
            name : "Online File Sharing",
            about : "Online file sharing web portal where you can share your file by uploading. after uploading you will get a link and send this link to that person which person you want to share",
            thumbnail : ofs,
            technology : "MERN Stack",
            address: "https://share-link-app.herokuapp.com"
        },
        // {
        //     name : "Covid 19 Tracker",
        //     thumbnail : "",
        //     technology : "Angular",
        //     address : ""
        // },
        {
            name : "Snake Game",
            about : "A snake game is a game which founded in Nokia's older version cellphone",
            technology : "Html, Css & Javascript",
            thumbnail: snakeGame,
            address  :"http://snakegame.rf.gd"
        },
        {
            name : "Todo",
            about : "Todo help to manage your works efficiently, just you have to write what you have to do ? ",
            technology : "React & Redux",
            thumbnail : todo,
            address :"https://todobygkkaushik.netlify.com"
        },
        {
            name : "Alarm",
            about : "after setting your work time, Alarm make you productive by remiding work on time",
            thumbnail : Alarm,
            technology : "Html, Css & Javascript",
            address : "http://alarm.rf.gd"
        }
        // ,{
        //     name : "Image Website",
        //     thumbnail : "",
        //     technology : "Html, Css, Javascript, PHP & MongoDB",
        //     address : "http://chiranjivseyes.rf.gd"
        // }
    ]
    return (
        <div id="projects">
            <h1>My Projects</h1>
            <section>
            {
                projects.map(p => {
                    return (
                        <div className="project" key={Math.random()}>
                            <div className="info">
                                <p className="name">{p.name}</p>
                                <div className="about">{p.about}</div>
                                <p className="technology">Technology Used : <span>{p.technology}</span></p>
                                <a href={p.address}>Open {p.name}</a>
                            </div>
                            <div className="thumbnail">
                                <img src={p.thumbnail} alt=""/>
                            </div>
                        </div>
                    )
                })
                
            }
            </section>

        </div>
    )
}

export default Project;