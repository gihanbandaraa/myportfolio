import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const sendMessageOnWhatsApp = () => {
    const phoneNumber = "+94782872802";
    const message = "I'm interested in hiring you!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -60; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setOpenMenu(false); 
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src="/assets/images/logo.svg"
            alt="Profile logo"
          />

          <ul>
            <li>
              <a className="menu-item" onClick={() => scrollToSection("hero")}>
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection("projects")}>
                Completed Projects
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection("contact")}>
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={sendMessageOnWhatsApp}>
              Hire Me
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-icons" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
