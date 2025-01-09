import profilePic from '../images/profile_pic.png';
import '../styles/css/Hero.css';
import Social from './Social'
import { useEffect, useState } from 'react';
import NextPage from './shared/NextPage';
const ROLES = [
  'Full Stack Developer 🖥️',
  'Android Developer 📱',
  'Graphic Designer 🎨'
];

const TYPING_SPEED = 150;
const DELETING_SPEED = 50;
const PAUSE_TIME = 2000;

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <div className="hero">
      <section className="about">
        <p>Welcome</p>
        <p className="designation">
          I am <span className="text-blue-500">{text}</span>
          <span className="animate-pulse">|</span>
        </p>
        <p className="max-w-md">
          Experienced Full Stack Developer with 5+ years of expertise in designing, developing, and deploying scalable and efficient web applications, android applications, and more.
        </p>
        <Social />
      </section>
      <section className="profile_pic">
        <div className="img_container">
          <img
            id="profile_pic"
            src={profilePic}
            alt="Gopi Kumar Kaushik"
          />
        </div>
      </section>
      <NextPage page="skills" />
    </div>
  );
};

export default Hero;