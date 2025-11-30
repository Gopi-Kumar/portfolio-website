import Navbar from './shared/Navbar';
import { useState } from 'react';
import '../styles/css/Project.css';
import NextPage from './shared/NextPage';
const projects = [
    {
        id: "face-crop-ai",
        name: "FaceCropAI",
        about: "Create perfect passport photos instantly using AI-powered face detection. Upload photos, select your desired shape, and get professional quality passport photos in seconds.",
        thumbnail: "/images/products/face-crop-ai.png",
        category: "web app",
        technology: "AI Face Detection, Canvas API, Image Processing",
        address: "https://face-crop-ai.desync.in",
        youtubeVideoId: "dRlQAFQSRk8",
        features: [
            "Automatic Face Detection",
            "Customizable Cropping",
            "High-Quality Output",
            "User-Friendly Interface"
        ]
    },
    {
        id: "idsnapper",
        name: "IDSnapper",
        about: "Automatic serial renaming app for ID card makers. Streamline photo organization with auto-naming, date-based folders, and intelligent file management to reduce errors and save valuable time.",
        thumbnail: "/images/products/idsnapper.png",
        category: "mobile app",
        technology: "Kotlin, Firebase, Camera2 API, File Management",
        address: "https://play.google.com/store/apps/details?id=com.desync.idsnapper",
        youtubeVideoId: "IA5YmwcxDTY",
        features: [
            "Automatic Sequential Naming (1.jpg, 2.jpg, etc.)",
            "Smart Camera with Grid Alignment",
            "Quick Preview & Thumbnail Navigation",
            "One-tap ZIP & Share to WhatsApp",
            "Fast File Manager with Delete/Rename"
        ]
    },
    {
        id: "pdf2flipbook",
        name: "PDF2Flipbook",
        about: "Convert PDF files into interactive flipbooks with page-turning effects. Customize the look and feel to match your brand.",
        thumbnail: "/images/products/pdf-2-flipbook.png",
        category: "web app",
        technology: "PDF.js, Turn.js, JavaScript, CSS Animations",
        address: "https://pdf2flipbook.desync.in",
        youtubeVideoId: null,
        features: [
            "Interactive Page Turning",
            "Custom Branding",
            "Multiple Output Formats",
            "High-Quality Rendering"
        ]
    },
    {
        id: "BulkImageResize",
        name: "BulkImageResize",
        about: "Easily resize, crop, enhance, watermark, and batch rename images in bulk. Supports drag-and-drop, folder upload, and advanced processing options for web and mobile.",
        thumbnail: "/images/products/bulk-image-resize.png",
        category: "web app",
        technology: "Canvas API, File API, Image Processing, Web Workers",
        address: "https://bulkimageresize.desync.in",
        youtubeVideoId: null,
        features: [
            "Bulk Image Resizing",
            "Drag & Drop and Folder Upload",
            "Advanced Cropping & Filters",
            "Watermark Addition",
            "Batch Renaming",
            "Responsive & Mobile Optimized",
            "Progressive Loading & Stats"
        ]
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
                                    loading="lazy"
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
