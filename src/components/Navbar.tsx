import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Lenis Smooth Scroll Initialize
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.stop(); // Initial stop for loading

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Navigation Links Handling (Smooth Scroll to section)
    let links = document.querySelectorAll(".nav-links-slim a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let section = element.getAttribute("data-href");
          if (section && lenis) {
            const target = document.querySelector(section) as HTMLElement;
            if (target) {
              lenis.scrollTo(target, { offset: 0, duration: 1.5 });
            }
          }
        }
      });
    });

    // 3. Navbar Appearance on Scroll (Glassmorphism effect)
    ScrollTrigger.create({
      start: "top -20",
      onEnter: () => {
        gsap.to(navRef.current, { 
          backgroundColor: "rgba(0, 0, 0, 0.7)", 
          padding: "10px 0", 
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          duration: 0.4 
        });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, { 
          backgroundColor: "transparent", 
          padding: "20px 0", 
          borderBottom: "1px solid transparent",
          duration: 0.4 
        });
      },
    });

    window.addEventListener("resize", () => lenis?.resize());
    return () => lenis?.destroy();
  }, []);

  return (
    <>
      <nav className="header-slim" ref={navRef}>
        <div className="nav-container-slim">
          <a href="/#" className="nav-logo-slim" data-cursor="disable">
            SAMIR RAJA<span className="dot">.</span>
          </a>

          <ul className="nav-links-slim">
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/19415048891?text=Hi%20Samir,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!" 
            target="_blank" 
            rel="noreferrer" 
            className="nav-whatsapp-btn"
            data-cursor="disable"
          >
            WHATSAPP
          </a>
        </div>
      </nav>

      {/* Background gradients jo purane code mein the */}
      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;