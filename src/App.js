import { useState, useEffect, useRef } from "react";
import { Menu, X,  Mail, User, MessageCircle, Facebook, Twitter, Linkedin, Instagram,  XCircle, CheckCircle  } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./navbar.css";
import "./projects.css";
import "./Contact.css";
import Typical from "react-typical";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-dark p-3 shadow-md">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="navbar-brand custom-navbrand">Shaun Arceta</h1>
        <button className="navbar-toggler ms-auto" type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className={`side-menu ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
        <button className="close-btn" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
          <X size={28} />
        </button>
        <ul className="navbar-nav text-center">
          <li className="nav-item"><a href="#home" className="nav-link custom-navlink">Home</a></li>
          <li className="nav-item"><a href="#skills" className="nav-link custom-navlink">Skills</a></li>
          <li className="nav-item"><a href="#graphics" className="nav-link custom-navlink">Graphics Design</a></li>
          <li className="nav-item"><a href="#education" className="nav-link custom-navlink">Education</a></li>
          <li className="nav-item"><a href="#about" className="nav-link custom-navlink">About</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link custom-navlink">Projects</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link custom-navlink">Contact</a></li>
        </ul>
       {/* <div className="social-icons text-center mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white"><FaFacebook size={24} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white"><FaInstagram size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white"><FaLinkedin size={24} /></a>
        </div>*/}
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section id="home" className="home-section d-flex align-items-center justify-content-center text-center" style={{ minHeight: "90vh", background: "#111", color: "white", position: "relative" }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6">
          <h1 className="display-4 fw-bold text-white">
              <Typical
                steps={["Hello, I'm Shaun", 2000, "", 500]}
                loop={Infinity}
                wrapper="span"
              />
            </h1>
            <p className="lead text-white-50">a Passionate Web Developer crafting beautiful and functional experiences.</p>
            <div className="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
              <a href="#projects" className="btn btn-outline-light btn-block">View My Work</a>
              <a href="#contact" className="btn btn-outline-light btn-block">Contact Me</a>
            <a href="/my-portfolio/resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-block">
  Download My CV
</a>

            </div>
          </div>
          {/* Hide image on small screens */}
          <div className="col-md-6 d-none d-md-flex justify-content-center">
            <div className="profile-picture-container rounded-circle overflow-hidden bg-light d-flex align-items-center justify-content-center" 
              style={{ width: "200px", height: "200px", border: "5px solid white" }}>
      <img src="/my-portfolio/me.jpg" alt="Shaun Arceta" className="img-fluid rounded-circle" />

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          .scroll-indicator {
            display: flex;
            flex-direction: column;
            align-items: center;
            bottom: 20px;
            position: absolute;
            animation: fadeIn 2s ease-in-out;
          }

          .mouse {
            width: 25px;
            height: 40px;
            border: 2px solid white;
            border-radius: 50px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .wheel {
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            animation: scrollDown 1.5s infinite;
          }

          .scroll-text {
            margin-top: 8px;
            font-size: 14px;
            color: white;
            opacity: 0.7;
          }

          @keyframes scrollDown {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(10px); opacity: 0.5; }
            100% { transform: translateY(0); opacity: 1; }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}




function Skills() {
  // Skill Levels (Percentage)
  const skills = [
    { name: "Node", value: 60 },
    { name: "C#", value: 75 },
    { name: "JavaScript", value: 75 },
    { name: "Java", value: 85 },
    { name: "PHP", value: 85 },
    { name: "SQL", value: 80 },
  ];

  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= window.innerHeight * 0.25) {
          setIsVisible(true);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case already in view
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = skills.map((skill, index) =>
        setTimeout(() => {
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = skill.value;
            return newValues;
          });
        }, index * 200) // Delay each skill animation
      );
      return () => timers.forEach(clearTimeout);
    }
  }, [isVisible]);

  return (
    <section id="skills" className="skills-section py-5 text-center" style={{ background: "#111", color: "white" }}>
      <div className="container">
        <h1 className="display-4 fw-bold text-white">My Skills</h1>
        <p className="lead text-white-50 mb-4">Here are my technical skills with proficiency levels.</p>

        {/* Skills Grid */}
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-2 col-6 mb-4">
              <div className="skill-circle">
                <CircularProgressbar 
                  value={animatedValues[index]} 
                  text={`${animatedValues[index]}%`} 
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "#FFF",
                    trailColor: "#444",
                    textSize: "12px",
                    pathTransitionDuration: 1.5,
                  })}
                />
                <h5 className="mt-2">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Proficiency Section */}
        <div className="proficiency-section mt-5">
          <h2 className="fw-bold text-white">Tools & Platforms</h2>
          <p className="lead text-white-50 mb-4">I am proficient in using the following tools</p>
          <div className="row justify-content-center">
            {["MySQL Workbench", "phpMyAdmin", "Postman", "Visual Studio Code", "Android Studio", "SQL Management Studio", "GitHub", "Eclipse"].map((tool, index) => (
              <div key={index} className="col-md-3 col-6 mb-3">
                <div className="tool-card p-3 border rounded hover-effect" style={{ background: "#222" }}>
                  <h5 className="text-white">{tool}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .tool-card {
          background: #222;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tool-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}


function Extras() {
  // Sample Graphic Design Images
  const graphics = [
    { title: "", image: "/my-portfolio/design1.png" },
    { title: "", image: "/my-portfolio/design2.png" },
    { title: "", image: "/my-portfolio/design3.png" },
    { title: "", image: "/my-portfolio/design5.png" },
    { title: "", image: "/my-portfolio/design6.png" },
    { title: "", image: "/my-portfolio/design7.png" },
  ];

  return (
    <section id="graphics" className="extras-section py-5 text-center" style={{ background: "#111", color: "white" }}>
      <div className="container">
        <h1 className="display-4 fw-bold text-white">My Graphic Designs</h1>
        <p className="lead text-white-50 mb-4">Here are some of my graphic designs made with Adobe Photoshop</p>
        <div className="row justify-content-center">
          {graphics.map((graphic, index) => (
            <div key={index} className="col-md-4 col-6 mb-3">
              <div className="graphic-card p-3 border rounded hover-effect">
                <img src={graphic.image} alt={graphic.title} className="img-fluid rounded" />
                <h5 className="text-white mt-2">{graphic.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .graphic-card {
          background: #222;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .graphic-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
function Education() {
  // Sample Education Data
  const educationHistory = [
    {
      school: "Las Pinas East National High",
      degree: "Junior High School",
      year: "2014 - 2019",
    },
    {
      school: "STI College Las Pinas",
      degree: "Senior High School",
      year: "2019 - 2020",
    },
    {
      school: "STI College Las Pinas",
      degree: "1st - 4th Year College",
      year: "2021 - Present",
    },
  ];

  return (
    <section
      id="education"
      className="education-section py-5 text-light position-relative"
      style={{
        background: "#222",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Ensures dots don't overflow
      }}
    >
      {/* Floating Dots */}
      <div className="floating-dots">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="dot"></div>
        ))}
      </div>

      <div className="container">
        <h1 className="display-4 fw-bold text-center">My Education</h1>
        <p className="lead text-white-50 mb-5 text-center">
          A visual representation of my educational background
        </p>

        {/* Timeline Container */}
        <div className="timeline d-none d-md-block">
          {educationHistory.map((edu, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="content">
                <h4>{edu.school}</h4>
                <p>{edu.degree}</p>
                <span>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Mobile View (Bootstrap Cards) */}
        <div className="d-block d-md-none">
          {educationHistory.map((edu, index) => (
            <div key={index} className="card bg-dark text-white mb-3 p-3">
              <h4>{edu.school}</h4>
              <p>{edu.degree}</p>
              <span className="text-white">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Styles for Floating Dots and Timeline */}
      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 1000px;
          width: 90%;
          margin: auto;
          padding-top: 20px;
        }

        /* The vertical timeline line */
        .timeline::after {
          content: "";
          position: absolute;
          width: 6px;
          background-color: #fff;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
          animation: growLine 2s ease-in-out forwards;
        }

        @keyframes growLine {
          0% {
            height: 0;
          }
          100% {
            height: 100%;
          }
        }

        /* Timeline item styles */
        .timeline-item {
          position: relative;
          width: 45%;
          padding: 40px;
          text-align: right;
          color: white;
        }

        .timeline-item.right {
          left: 55%;
          text-align: left;
        }

        /* Floating Dots */
        .floating-dots {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .dot {
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: floatAnimation 5s infinite alternate ease-in-out;
        }

        /* Randomly Position Dots */
        ${[...Array(15)]
          .map(
            (_, i) => `
          .dot:nth-child(${i + 1}) {
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation-duration: ${3 + Math.random() * 4}s;
            animation-delay: ${Math.random() * 2}s;
          }
        `
          )
          .join("")}

        /* Floating Animation */
        @keyframes floatAnimation {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-20px);
          }
        }

        /* Content Box Styling */
        .content {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          font-size: 1.2rem;
          line-height: 1.6;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .content:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
        }

        /* Mobile Card Styling */
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}


function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold for earlier/later visibility
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);


  return (
    <section
      id="about"
      ref={aboutRef}
      className={`about-section text-center ${isVisible ? "fade-in" : "hidden"}`}
      style={{ minHeight: "100vh", background: "#111", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold text-white">About Me</h1>
        <p className="lead text-white-50 mx-auto" style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
          I'm Shaun Arceta, a passionate PHP Developer with expertise in building dynamic web applications.
          I specialize in backend development, database management, and crafting scalable web solutions.
        </p>
      </div>
    </section>
  );
}


function Projects() {
  const projects = [
    {
      title: "Dental Clinic Website",
      description: "A modern and responsive Dental Clinic reservation website made with PHP and SQL.",
      images: ["/project1.png", "/project1-2.png", "/project1-4.png", "/project1-5.png", "/project1-6.png", "/project1-7.png"]
    },
    {
      title: "Wall of Pictures Website",
      description: "A website where users can upload pictures, share them with others, and win prizes.",
      images: ["/project2.png", "/project2-2.png", "/project2-3.png"]
    },
    {
      title: "Permit Fecthing Website",
      description: "A simple website that fetches user submitted permits from a database and displays them in a table using Node and React",
      images: ["/project3.png", "/blogcms2.jpg", "/blogcms3.jpg"]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (projectIndex) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
      setCurrentImageIndex(0);
    }, 300);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projects[selectedProject].images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projects[selectedProject].images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="projects" 
      className="projects-section py-5 text-center" 
      style={{ background: "#111", color: "white", paddingTop: "80px" }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold text-white">My Projects</h1>
        <p className="lead text-white-50 mb-4">Some of my latest work.</p>
        
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="project-card position-relative overflow-hidden shadow-lg">
                <img src={project.images[0]} className="card-img-top" alt={project.title} />
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">{project.title}</h5>
                  <button className="btn btn-outline-light mt-2" onClick={() => openModal(index)}>View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with Animation */}
      {selectedProject !== null && (
  <div className={`modal-overlay ${isClosing ? "fade-out" : "fade-in"}`} onClick={closeModal}>
    <div className={`modal-dialog modal-lg ${isClosing ? "slide-down" : "slide-up"}`} onClick={(e) => e.stopPropagation()}>
      <div className="modal-content text-white position-relative">
        <div className="modal-header border-0"></div>
        <div className="modal-body text-center position-relative">
          {/* Left Arrow */}
          <button className="arrow-btn left-arrow" onClick={prevImage}>
            <ChevronLeft size={40} color="white" />
          </button>

          {/* Image Container with Blur Effect */}
          <div className="image-blur-container">
            <img 
              src={projects[selectedProject].images[currentImageIndex]} 
              alt="Project Screenshot" 
              className="img-fluid rounded image-blur"
            />
          </div>

          {/* Right Arrow */}
          <button className="arrow-btn right-arrow" onClick={nextImage}>
            <ChevronRight size={40} color="white" />
          </button>

          <p className="mt-3">{projects[selectedProject].description}</p>
        </div>
      </div>
    </div>
  </div>
)}

    </section>
  );
}



function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, message: "", success: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setModal({ show: true, message: "✅ Message Sent Successfully!", success: true });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setModal({ show: true, message: "❌ Failed to Send Message.", success: false });
      }
    } catch (error) {
      setModal({ show: true, message: "❌ Error Sending Message.", success: false });
    }

    setLoading(false);

    setTimeout(() => {
      setModal({ ...modal, show: false });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section text-center py-5 mt-5" style={{ background: "#111", color: "white" }}>
      <div className="container">
        <h1 className="display-4 fw-bold text-white">Let's work together!</h1>
        <p className="lead text-white-50 mb-4">Get in touch for projects or collaborations.</p>

        <div className="d-flex justify-content-center">
          <div className="card text-dark p-4  shadow-sm d-flex flex-row align-items-center" style={{ maxWidth: "500px", width: "100%", background: "white" }}>
            
            {/* Form Section */}
            <div className="card-body w-75">
              <form onSubmit={handleSubmit}>
                {/* Name Field with Floating Label */}
                <div className="form-group mb-3 position-relative">
              
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={`form-control floating-input ${formData.name ? "has-value" : ""}`} required />
                  <label className="floating-label">Your Name</label>
                </div>

                {/* Email Field with Floating Label */}
                <div className="form-group mb-3 position-relative">
          
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={`form-control floating-input ${formData.email ? "has-value" : ""}`} required />
                  <label className="floating-label">Your Email</label>
                </div>

                {/* Message Field with Floating Label */}
                <div className="form-group mb-3 position-relative">
       
                  <textarea name="message" value={formData.message} onChange={handleChange} className={`form-control floating-input ${formData.message ? "has-value" : ""}`} rows="3" required></textarea>
                  <label className="floating-label">Your Message</label>
                </div>
 
                {/* Submit Button */}
                <button type="submit" className="btn btn-dark w-1" style={{ backgroundColor: "#000", border: "2px solid #000", fontWeight: "normal", borderRadius: "30px", transition: "all 0.3s ease-in-out" }}
                  onMouseOver={(e) => { e.target.style.backgroundColor = "#FFF"; e.target.style.color = "#000"; }}
                  onMouseOut={(e) => { e.target.style.backgroundColor = "#000"; e.target.style.color = "#FFF"; }}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Divider Line */}
            <div className="vr mx-3" style={{ height: "100%", width: "2px", backgroundColor: "#222" }}></div>

            {/* Social Media Icons */}
            <div className="d-flex flex-column align-items-center justify-content-center w-25">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={22} className="text-dark" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={22} className="text-dark mt-2" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={22} className="text-dark mt-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {modal.show && (
        <div className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow-lg" style={{ zIndex: 1050, minWidth: "300px", textAlign: "center" }}>
          {modal.success ? <CheckCircle size={40} className="text-success" /> : <XCircle size={40} className="text-danger" />}
          <p className="mt-2 text-dark">{modal.message}</p>
          <button className="btn btn-dark mt-2" onClick={() => setModal({ ...modal, show: false })}>
            Close
          </button>
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer mt-5 py-4 text-white" style={{ backgroundColor: "#080808" }}>
      <div className="container text-center">
        {/* Logo & Branding */}
        <h3 className="fw-bold" style={{ color: "#FFF" }}>My Portfolio Website</h3>
        <p className="" style={{ color: "#FFF" }}>Creating beautiful and functional web experiences.</p>

        {/* Navigation Links */}
        <ul className="list-inline mt-3">
          <li className="list-inline-item mx-3">
            <a href="#about" className=" text-decoration-none" style={{ color: "#FFF" }}>About</a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="#projects" className=" text-decoration-none" style={{ color: "#FFF" }}>Projects</a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="#contact" className=" text-decoration-none" style={{ color: "#FFF" }}>Contact</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="social-icons mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" mx-2" style={{ color: "#FFF" }}> 
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" mx-2" style={{ color: "#FFF" }}>
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" mx-2" style={{ color: "#FFF" }}>
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=" mx-2" style={{ color: "#FFF" }}>
            <Instagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className=" mt-3 mb-0" style={{ color: "#FFF" }}>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Extras />
      <Education />
      <About />
      <Projects /> {/* Added Projects Section */}
      <Contact />
      <Footer/>
     
    </div>
  );
}
 

export default App;
