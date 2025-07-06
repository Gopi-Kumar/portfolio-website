import React, { useEffect, useState } from 'react';
import profilePic from '../images/profile_pic.png';
import '../styles/css/Hero.css';
import Social from './Social';
import NextPage from './shared/NextPage';

const ROLES = [
  'Full Stack Developer 🖥️',
  'Android Developer 📱',
  'Graphic Designer 🎨',
  'Problem Solver 🧩',
  'Tech Enthusiast 🚀'
];

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 2000;

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const role = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < role.length) {
          setText(role.substring(0, text.length + 1));
        } else {
          // Pause at full text before deleting
          setTimeout(() => setIsDeleting(true), PAUSE_TIME);
        }
      } else {
        if (text.length > 0) {
          setText(role.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [text, roleIndex, isDeleting]);

  const handleImageLoad = () => {
    // Add any additional actions when image loads
    console.log('Profile image loaded successfully');
  };

  return (
    <div className={`hero ${isVisible ? 'visible' : ''}`}>
      <section className="about">
        <p className="greeting">Welcome to my portfolio</p>
        <p className="designation">
          I am <span className="text-blue-500">{text}</span>
          <span className="animate-pulse">|</span>
        </p>
        <p className="max-w-md description">
          Experienced Full Stack Developer with 5+ years of expertise in designing, 
          developing, and deploying scalable and efficient web applications, 
          android applications, and more. I'm passionate about creating digital 
          solutions that make a difference.
        </p>
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
        <Social />
      </section>
      <section className="profile_pic">
        <div className="img_container">
          <img
            id="profile_pic"
            src={profilePic}
            alt="Gopi Kumar Kaushik - Full Stack Developer"
            onLoad={handleImageLoad}
            loading="lazy"
          />
          <div className="floating-icons">
            <span className="floating-icon" style={{ '--delay': '0s' }}>💻</span>
            <span className="floating-icon" style={{ '--delay': '0.5s' }}>📱</span>
            <span className="floating-icon" style={{ '--delay': '1s' }}>🎨</span>
            <span className="floating-icon" style={{ '--delay': '1.5s' }}>⚡</span>
          </div>
        </div>
      </section>
      <NextPage page="skills" />
    </div>
  );
};

export default Hero;