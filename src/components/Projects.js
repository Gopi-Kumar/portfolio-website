import snakeGame from '../images/snake.jpg'
import ofs from '../images/file.PNG'
import cj from '../images/cj.PNG'
import sf from '../images/sf.PNG'
const Project =  () => {
    const projects = [
        {
            name : "Online File Sharing",
            about : "Online file sharing web portal where you can share your file by uploading. after uploading you will get a link and send this link to that person which person you want to share",
            thumbnail : ofs,
            technology : "MERN Stack",
            address: "https://share-link-app.netlify.com"
        },
        {
            name : "Student Friend",
            about : "A students friend who helps students to manage his routine and much more thing so student can focus on study.",
            thumbnail : sf,
            technology : "Html, Css & Javascript",
            address: "https://student-friend.netlify.com"
        },
        {
            name : "Snake Game",
            about : "A snake game is a game which founded in Nokia's older version cellphone",
            technology : "Html, Css & Javascript",
            thumbnail: snakeGame,
            address  :"http://snakegame.rf.gd"
        },
        {
            name : "Image Website",
            thumbnail : cj,
            technology : "Html, Css, Javascript, PHP & MongoDB",
            address : "http://chiranjivseyes.rf.gd",
            about : "Beautiful full photos clicked by chiranjiv sharma, where you can download and use photo for free."
        }
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
                                <a target="blank" href={p.address}>Open {p.name}</a>
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