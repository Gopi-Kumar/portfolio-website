import Navbar from './shared/Navbar';
import { useState } from 'react';
import '../styles/css/Project.css';
import NextPage from './shared/NextPage';
const projects = [
    {
        name: "KnowledgeKnot",
        about: "KnowledgeKnot is an educational platform offering computer science tutorials, coding resources, revision notes, solved papers, and technical articles.",
        thumbnail: "https://prabhattara.desync.in/images/pt-school-thumbnail.png",
        category: "web app",
        technology: "Next.js, SASS, MongoDB, KaTeX, D3.js",
        address: "https://knowledgeknot.desync.in"
    },
    {
        name: "Deto",
        about: "Deto is a design app for creating ID cards, business cards, question papers, and more with bulk upload and photo organization features.",
        thumbnail: "https://deto.desync.in/images/deto-thumbnail.png",
        category: "web app",
        technology: "Node.js, Express.js, EJS, MongoDB, PDF.js, SASS",
        address: "https://deto.desync.in"
    },
    {
        name: "GameZone",
        about: "GameZone is a browser-based platform offering classic games like Snake and Tetris, all accessible in a single place.",
        thumbnail: "https://gamezone.desync.in/images/gamezone-thumbnail.png",
        category: "web app",
        technology: "Next.js, MongoDB, SASS, HTML5 Canvas",
        address: "http://gamezone.desync.in"
    },
    {
        name: "IDSnapper",
        about: "IDSnapper simplifies ID card creation by automatically renaming photos and organizing them into date-based folders.",
        thumbnail: "https://idsnapper.desync.in/images/idsnapper-thumbnail.png",
        category: "mobile app",
        technology: "Kotlin, Firebase, OpenCV, Android Studio, Material UI",
        address: "https://idsnapper.desync.in"
    },
    {
        name: "FormScanner",
        about: "FormScanner allows data entry into Excel by scanning forms with your phone camera, offering a preview in the web portal.",
        thumbnail: "",
        category: "web app",
        technology: "Node.js, EJS, Google OCR API, Socket.io",
        address: "https://formscanner.desync.in"
    },
    {
        name: "HeavyLoadPro",
        about: "HeavyLoadPro offers logistics solutions for managing trucking operations, load tracking, and efficient freight management.",
        thumbnail: "https://heavyloadpro.desync.in/images/heavyloadpro-thumbnail.png",
        category: "mobile app",
        technology: "Kotlin, Firebase, Gradle, Android Studio, AdMob",
        address: "https://heavyloadpro.desync.in"
    },
    {
        name: "IGNOU BCA Books & More",
        about: "This app provides resources like books, notes, and assignments for IGNOU BCA students in an organized and accessible format.",
        thumbnail: "https://ignoubooks.desync.in/images/ignou-books-thumbnail.png",
        category: "mobile app",
        technology: "React Native, Firebase, Node.js, MongoDB",
        address: "https://ignoubooks.desync.in"
    },
    {
        name: "School Website (RKIS)",
        about: "A responsive website for R K International School featuring information about academics, admissions, and contact details.",
        thumbnail: "https://rkinternational.desync.in/images/rk-school-thumbnail.png",
        category: "web app",
        technology: "Node.js, Express.js, MongoDB, EJS, Bootstrap",
        address: "https://rkinternational.desync.in"
    },
    {
        name: "School Website(PTVN)",
        about: "A static website for Prabhat Tara Vidya Niketan that showcases school programs, facilities, mdd, events, and admission guidelines.",
        thumbnail: "https://prabhattara.desync.in/images/pt-school-thumbnail.png",
        category: "web app",
        technology: "Node.js, MongoDB, Bootstrap, SASS",
        address: "https://prabhattara.desync.in"
    }
];


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
