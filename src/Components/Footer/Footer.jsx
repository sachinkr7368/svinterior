import React from "react";
import "./styles.css";
import { Container } from "@mui/material";
import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <Container maxWidth="xl">
        <div className="footer-content">
          <div>
            <div className="footer-title">
              <span style={{ color: "#AFCC21" }}>S V Interiors</span>
            </div>
            <p className="footer-subtitle">Contact Info</p>
            <p className="footer-address">
              No.73/2, Site No 6
              <br />
              Pipeline Rd, near Manjunath Chowtry,
              <br />
              Vajarahalli, Bengaluru,
              <br /> Karnataka 560062
            </p>
            <div
              className="footer-email"
              onClick={() => window.open("mailto:shreevinteriors@gmail.com")}
            >
              shreevinteriors@gmail.com
            </div>
            <div
              className="footer-phone"
              onClick={() => window.open("tel:+9036640175")}
            >
              +91 9036640175
            </div>
          </div>
          <div>
            <h1 className="footer-subtitle">Menu</h1>
            <br />
            <span>
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                Home
              </Link>
            </span>
            <br />
            <span>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/about"
              >
                About
              </Link>
            </span>
            <br />
            <span>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/contact-us"
              >
                Contact Us
              </Link>
            </span>
            <br />
            <span>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/factory-and-machinery"
              >
                Machinery
              </Link>
            </span>
            <br />
            <span>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/testimonials"
              >
                Testimonials
              </Link>
            </span>
          </div>
          <div>
            <div className="footer-subtitle">Connect Online</div>
            <div className="footer-social-icons">
              {/* Add icons with links */}
              <a
                href="https://www.youtube.com/channel/UCxBFbUj9lEfDOyN7_m-LSkg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube color="#fff" size={45} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556304023068"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook color="#fff" size={45} />
              </a>
              <a
                href="https://www.instagram.com/shreevaishnaviinteriors/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color="#fff" size={45} />
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/+919036640175?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp-enquiry"
              >
                <span>
                  <FaWhatsapp color="#fff" size={45} />
                </span>{" "}
                How can i help you?
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
