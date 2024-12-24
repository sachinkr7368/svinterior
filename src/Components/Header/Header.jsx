import React, { useState } from "react";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Squash as Hamburger } from "hamburger-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./styles.css";
function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const scrollToTop = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <React.Fragment>
      <div className="header-container">
        <Container maxWidth="xl">
          <div className="header-content">
            <div className="logo">
              <span style={{ cursor: "pointer" }} onClick={scrollToTop}>
                <img src={logo} alt="logo" />
              </span>
            </div>
            <div className="list-items">
              <ul className={menuOpen ? "menu-open" : "menu-not-open"}>
                <li onClick={scrollToTop}>Home</li>
                <li onClick={() => navigate("/about")}>About</li>
                <li onMouseEnter={toggleOptions} onMouseLeave={toggleOptions}>
                  <span
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={toggleOptions}
                  >
                    <span>Services</span>
                    <KeyboardArrowDownIcon />
                  </span>
                  {showOptions ? (
                    <div className="options-card">
                      <div>
                        <div
                          onClick={() => {
                            navigate("/modular-kitchen");
                          }}
                        >
                          Modular Kitchen
                        </div>
                        <div onClick={() => navigate("/modular-wardrobe")}>
                          Modular Wardrobe
                        </div>
                        <div onClick={() => navigate("/tv-cabinets")}>
                          TV Cabinets
                        </div>
                        <div onClick={() => navigate("/crockery-cabinets")}>
                          Crockery Cabinets
                        </div>
                        <div onClick={() => navigate("/furnitures")}>
                          Furnitures
                        </div>
                        <div onClick={() => navigate("/partitions")}>
                          Partitions
                        </div>
                        <div onClick={() => navigate("/kids-room")}>
                          Kids Room
                        </div>
                      </div>
                      <div>
                        <div onClick={() => navigate("/pooja-units")}>
                          Pooja Units
                        </div>
                        <div onClick={() => navigate("/pop-ceiling")}>
                          Pop Ceiling
                        </div>
                        <div onClick={() => navigate("/foyer-area")}>
                          Foyer Area
                        </div>
                        <div onClick={() => navigate("/handles-and-brackets")}>
                          Handles & Brackets
                        </div>
                        <div onClick={() => navigate("/grills")}>Grills</div>
                        <div onClick={() => navigate("/living-room")}>
                          Living Room
                        </div>
                        <div onClick={() => navigate("/all-interior-works")}>
                          All Interior Works
                        </div>
                      </div>
                    </div>
                  ) : null}
                </li>
                <li onClick={() => navigate("/testimonials")}>Testimonials</li>
                <li onClick={() => navigate("/contact-us")}>
                  <button className="contact-button">Contact</button>
                </li>
              </ul>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              <div className="menu-bars" animate={menuOpen ? "open" : "closed"}>
                <Hamburger />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Header;
