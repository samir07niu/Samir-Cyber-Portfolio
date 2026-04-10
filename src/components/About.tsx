import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        
        <div className="text-container">
          {config.about.description
            .split("\n")
            .filter((line) => line.trim() !== "") /* 🔥 YE FALTU KHALI SPACE KO HATA DEGA */
            .map((line, index) => (
              <p key={index} className="cyber-text">
                {line}
              </p>
            ))}
        </div>

        {/* ========================================================
            YAHAN SE NAYA PHOTO BOX SHURU HAI
            ======================================================== */}
        <div className="profile-card-container">
          <div className="profile-card">
            {/* Left Side: Photo */}
            <div className="profile-photo-wrapper">
              {/* Apni photo public/images/samir.webp ke naam se save karna */}
              <img src="/images/samir.webp" alt="Samir Raja" className="profile-photo" />
              <div className="photo-scanline"></div>
            </div>

            {/* Right Side: Terminal Details */}
            <div className="profile-details">
              <div className="status-header">
                <span className="dot online"></span>
                <span className="status-text">STATUS: ACTIVE // SAMIR RAJA</span>
              </div>
              
              <div className="terminal-body">
                <p><span className="label">ROLE:</span> Cyber Security Researcher</p>
                <p><span className="label">SPECIALTY:</span> Ethical Hacking | OSINT | Red Teaming</p>
                <p><span className="label">CURRENT:</span> Cyber Sec Intern | X Cyber Squad Nagpur</p>
                <p><span className="label">STATION:</span> Galaxy Book 4 // Kali Linux Environment</p>
                <p className="alias-tag">_alias: CYBER07</p>
              </div>
            </div>
          </div>
        </div>
        {/* ======================================================== */}

      </div>
    </div>
  );
};

export default About;