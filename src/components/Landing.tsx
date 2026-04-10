import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {/* 🔥 YAHAN FIX KIYA HAI: <br /> hata kar jiddi space (&nbsp;) laga diya */}
              {lastName && <span>&nbsp;{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            {/* Title ko tere config se automatic link kar diya */}
            <h3>{config.developer.title}</h3>
            
            {/* 🔥 Dost ka "Developer" hata kar tera "Cyber Security" laga diya */}
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cyber Security</div>
              <div className="landing-h2-2">Cyber Security</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Cyber Security</div>
              <div className="landing-h2-info-1">Cyber Security</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;