import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar({ scrollToSection }:any) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <>
        <nav className="navbar pr-6">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/image/logo.png" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <AiOutlineClose /> : <BiMenuAltRight />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="#"
                className="nav-links"
                onClick={() => {
                  scrollToSection('ebook');
                  closeMobileMenu();
                }}
              >
                Ebook
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="#"
                className="nav-links"
                onClick={() => {
                  scrollToSection('whoweare');
                  closeMobileMenu();
                }}
              >
                Who we are
              </Link>
            </li>

            <li className="nav-item border border-black rounded-lg">
              <Link
                to="#"
                className="nav-links"
                onClick={() => {
                  scrollToSection('footer');
                  closeMobileMenu();
                }}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </nav>
      </>
    </div>
  );
}
