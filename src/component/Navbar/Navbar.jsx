import "../../App.css";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <>
      <nav>
        <div className="nav container mx-auto xl:py-6 md:py-6  xs:py-0 ">
          <div className="nav-brand">
            <a href="App">
              <img src=".././media/navlogo2.png" alt="safenaija" />
            </a>
          </div>
          <div className="menu-trigger">
            <div className="icon-box">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon search-icon"
              />
              <FontAwesomeIcon
                icon={faBars}
                className="icon"
                onClick={showNavbar}
              />
            </div>
          </div>

          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/app">The App</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <Link to="/contact">Contact</Link>
          </ul>
          <ul className="nav-menu2">
            <li>
              <a href="home">Sign In</a>
            </li>

            <li>
              <a href="app" type="button" className="btn">
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="toggle-skin" ref={navRef}></div>
      <div className="toggle-menu" ref={navRef}>
        <div className="toggle-brand flex flex-wrap ">
          <div className="w-1/2">
            <a href="App">
              <img src="././media/navlogo2.png" alt="safenaija" />
            </a>
          </div>
          <div className="w-1/2">
            <FontAwesomeIcon
              icon={faXmark}
              className="toggle-icon"
              onClick={showNavbar}
            />
          </div>
        </div>
        <ul className="toggle-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app">The App</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
