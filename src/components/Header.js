import React, { useEffect, useState } from "react"
import Fade from "./animations/Fade"
import { Link } from "react-scroll"
import imgUrl from "../images/amsaself.webp"

const AnimatedLetters = ({ text }) => (
  <>
    {text.split('').map((char, i) => (
      <span key={i} className={`letter${char === ' ' ? ' letter-space' : ''}`}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </>
)

const Header = () => {
  // Track orientation for responsive adjustments, initialize with a default value
  const [isLandscape, setIsLandscape] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // This code only runs in the browser after component mounts
    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      // Detect iOS
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      setIsIOS(iOS);

      // Detect if desktop
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
      setIsDesktop(!isMobile);

      // Set initial value
      setIsLandscape(window.innerWidth > window.innerHeight);

      const handleResize = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
        setIsDesktop(window.innerWidth >= 1024); // Consider devices with width >= 1024px as desktop
      };

      try {
        window.addEventListener("resize", handleResize);
      } catch (error) {
        console.warn('Error adding resize listener:', error);
      }
      // Initial check
      handleResize();

      return () => {
        try {
          window.removeEventListener("resize", handleResize);
        } catch (error) {
          console.warn('Error removing resize listener:', error);
        }
      };
    }
  }, []);

  // For iOS devices, use an img tag approach
  if (isIOS) {
    return (
      <div className="section" id="home">
        <div className="container">
          <div className="header-wrapper ios-device">
            {/* Background image for iOS */}
            <div
              className="ios-background"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(${imgUrl})`,
              }}
            />

            <div className="content-wrapper">
              <Fade bottom>
                <h2><AnimatedLetters text="Hi, I'm Asma," /></h2>
                <h2><AnimatedLetters text="a software developer." /></h2>
              </Fade>
              <Fade bottom>
                <p>Computer Science &amp; Mathematics, 2026 at the University of Tulsa</p>
              </Fade>
              <Fade bottom>
                <Link to="contact" smooth={true} duration={800} className="contact-btn">
                  CONTACT ME
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // For non-iOS devices, use the original implementation
  return (
    <div className="section" id="home">
      <div className="container">
        <div
          className={`header-wrapper ${isLandscape ? 'landscape' : 'portrait'} ${isDesktop ? 'desktop' : 'mobile'}`}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
              imgUrl +
              ")",
          }}
        >
          <Fade bottom>
            <h2><AnimatedLetters text="Hi, I'm Asma," /></h2>
            <h2><AnimatedLetters text="a robotic research assistant." /></h2>
          </Fade>
          <Fade bottom>
            <p>Computer Science &amp; Mathematics, 2026 at the University of Tulsa</p>
          </Fade>
          <Fade bottom>
            <Link to="contact" smooth={true} duration={800} className="contact-btn">
              CONTACT ME
            </Link>
          </Fade>

        </div>
      </div>
    </div>
  );
}

export default Header
