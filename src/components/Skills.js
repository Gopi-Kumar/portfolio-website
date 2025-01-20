import Navbar from './shared/Navbar'
import '../styles/css/Skills.css'
import NextPage from './shared/NextPage'

const Skills = () => {
    const skills = [
        {
            primary: "Full Stack Development",
            secondary: [
                "Frontend (React.js, HTML5, CSS3, JavaScript ES6+)",
                "Backend (Node.js, Express.js, PHP)",
                "State Management (Redux)",
                "Real-time Communication (Socket.io, WebSockets)",
                "Styling (SCSS, Bootstrap)",
                "API Development (REST, GraphQL)",
                "SSR Frameworks (Next.js)",
                "Package Managers (npm, yarn)",
                "Web Security (CORS, XSS)"
            ]
        },
        {
            primary: "Mobile & Cross-platform",
            secondary: [
                "Android Native (Kotlin)",
                "Cross-platform (React Native)",
                "Backend Services (Firebase)",
                "Mobile App Publishing",
                "Development Tools (Android Studio, ADB)",
                "Push Notifications",
                "App Analytics",
                "Play Store Management"
            ]
        },
        {
            primary: "Database & Data Management",
            secondary: [
                "SQL Databases (MySQL, SQLite)",
                "NoSQL (MongoDB, Firebase Realtime DB)",
                "Database Design & Architecture",
                "Query Optimization",
                "Data Modeling",
                "Backup & Recovery",
            ]
        },
        {
            primary: "DevOps & Infrastructure",
            secondary: [
                "Version Control (Git, GitHub)",
                "Containerization (Docker)",
                "Web Servers (NGINX, Apache)",
                "Linux Administration",
                "Cloud Services (GCP, AWS basics)",
                "Load Balancing"
            ]
        },
        {
            primary: "Testing & Development Tools",
            secondary: [
                "Testing (Mocha, Chai, Jest)",
                "API Testing (Postman)",
                "Code Quality (ESLint, Prettier)",
                "Version Control",
                "Chrome DevTools",
                "Performance Optimization",
                "Cross-browser Testing"
            ]
        },
        {
            primary: "Automation & Scripting",
            secondary: [
                "Python Development",
                "Web Automation (Selenium)",
                "Shell Scripting (Bash)",
                "Task Automation",
                "Google Apps Script",
                "Batch Processing",
                "Cron Jobs",
                "Browser Extensions"
            ]
        },
        {
            primary: "Design & User Experience",
            secondary: [
                "UI/UX Design",
                "Design Tools (Figma)",
                "Image Processing (OpenCV)",
                "Photo Editing (Adobe Photoshop)",
                "Video Editing (OpenShot)",
                "Responsive Design",
                "Design Systems",
                "Asset Optimization"
            ]
        },
        {
            primary: "Computer Science Core",
            secondary: [
                "Data Structures & Algorithms",
                "System Design & Architecture",
                "Operating Systems",
                "Computer Networks",
                "Database Management Systems",
                "Object-Oriented Programming",
                "Design Patterns",
                "Problem Solving"
            ]
        }
    ];

    return (
        <div className="skills">
            <Navbar />
            <div className="skills_container">
                {skills.map(skill => (
                    <div key={skill.primary} className="skill_container">
                        <div className="skill_primary">
                            <p>{skill.primary}</p>
                        </div>
                        <div className="skill_secondry">
                            {skill.secondary.map(item => (
                                <p key={`${skill.primary}-${item}`}>{item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <NextPage page={"projects"} />
        </div>
    )
}

export default Skills