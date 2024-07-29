import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  //
  const toggleNav = () => {
    setNavActive(!navActive);
  };
  //
  const closeMenu = () => {
    setNavActive(false);
  };

  // use effect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };
    window.addEventListener("resize", handleResize);
    // clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  // Return
  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo.png" alt="logo" />
      </div>
      <a
        href=""
        className={`nav_hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </a>
      <div className={`navbar-items ${navActive ? "active" : ""}`}>
        <ul>
          {/* home */}
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar-content"
            >
              Home
            </Link>
          </li>
          {/* Portfolio */}
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyProtfolio"
              className="navbar-content"
            >
              Portfolio
            </Link>
          </li>
          {/* About me */}
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar-content"
            >
              About Me
            </Link>
          </li>
          {/* Testiminoals  */}
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Testiminoals"
              className="navbar-content"
            >
              Testiminoals
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar-active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contackt"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
