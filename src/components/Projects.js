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
        name: "Deto",
        about: "Deto is a designing app that helps you in design things easily like ID Cards, Business Card, Question Paper and more",
        thumbnail: deto,
        category: "web app",
        technology: "Nodejs, Expressjs, ejs, MongoDB, pdfjs, SASS",
        address: "https://deto.desync.in"
    },
    {
        name: "GameZone",
        about: "A snake game is a game. you can play it in both PC And Mobile",
        technology: "Html, Css & Javascript",
        thumbnail: snakeGame,
        category: "web app",
        address: "http://snake-game.desync.in"
    },

    {
        name: "IDSnapper - Automatic Serial Renaming Camera App",
        about: "Deto is a designing app that helps you in design things easily like ID Cards, Business Card, Question Paper and more",
        thumbnail: deto,
        category: "web app",
        technology: "Nodejs, Expressjs, ejs, MongoDB, pdfjs, SASS",
        address: "https://deto.desync.in"
    },
    {
        name: "HeavyLoadPro - Online Trucking Solution",
        about: "Deto is a designing app that helps you in design things easily like ID Cards, Business Card, Question Paper and more",
        thumbnail: deto,
        category: "mobile app",
        technology: "Nodejs, Expressjs, ejs, MongoDB, pdfjs, SASS",
        address: "https://deto.desync.in"
    },
    {
        name: "RGB Timer - A Simple Timer App",
        about: "Deto is a designing app that helps you in design things easily like ID Cards, Business Card, Question Paper and more",
        thumbnail: deto,
        category: "mobile app",
        technology: "Nodejs, Expressjs, ejs, MongoDB, pdfjs, SASS",
        address: "https://deto.desync.in"
    },
    {
        name: "IGNOU BCA Books & More",
        about: "Deto is a designing app that helps you in design things easily like ID Cards, Business Card, Question Paper and more",
        thumbnail: deto,
        category: "mobile app",
        technology: "Nodejs, Expressjs, ejs, MongoDB, pdfjs, SASS",
        address: "https://deto.desync.in"
    },
    {
        name: "School Website (R K International School)",
        about: "Deto is a designing app that helps you in design things easily like ID Cards, Business Card, Question Paper and more",
        thumbnail: deto,
        category: "web app",
        technology: "Nodejs, Expressjs, ejs, MongoDB, pdfjs, SASS",
        address: "https://deto.desync.in"
    },
    {
        name: "School Website (Prabhat Tara Vidya Niketan)",
        about: "Deto is a designing app that helps you in design things easily like ID Cards, Business Card, Question Paper and more",
        thumbnail: deto,
        category: "web app",
        technology: "Nodejs, Expressjs, ejs, MongoDB, pdfjs, SASS",
        address: "https://deto.desync.in"
    },

]


const Project = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web app', label: 'Web Apps' },
        { id: 'mobile app', label: 'Android Apps' },
    ];

    const filteredProjects = projects.filter(project =>
        activeCategory === 'all' ? true : project.category === activeCategory
    );

    return (
        <div className="projects">
            <Navbar />
            <div className="projects_container">

                {/* Category Filter Buttons */}
                <div className="category_selector">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className="category_selector_button"
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {filteredProjects.length > 0 ? (
                    <div className="projects_contiainer">
                        {filteredProjects.map((project, index) => (
                            <div key={index} className="project_card">
                                <img
                                    src={project.thumbnail}
                                    alt={project.name}
                                    className="project_img"
                                />
                                <h2 className="project_title">{project.name}</h2>
                                <p className="project_description">{project.about}</p>
                                <p className="project_tech">
                                    <strong>Technologies:</strong> {project.technology}
                                </p>
                                <a
                                    href={project.address}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project_link"
                                >
                                    View Project
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No projects found in this category.</p>
                    </div>
                )}

                <NextPage page={"certificates"} />
            </div>
        </div>
    );
};

export default Project;