import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
import { Container } from "@mui/material";
import founderPicture from "../../assets/krishnakant.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import "./styles.css";
function ContactUs() {
  return (
    <>
      <Helmet>
        <title>S V Interior - Contact Us</title>
      </Helmet>
      <Header />
      <ScrollToTop />
      <div className="services-main-container">
        <img
          className="services-main-container-img"
          src="https://i.postimg.cc/9f3X0nYK/interior-living-room-white-gray-color-with-sofa-3d-illustration.jpg"
          alt=""
        />
        <div className="services-overlay">
          <Container maxWidth="xl">
            <section className="services-text-content">
              <div className="services-title" data-aos="fade-up">
                Discover love in{" "}
                <span style={{ color: "#AFCC21" }}>design</span>
              </div>
              <br />
              <br />
              <div className="services-sub-title" data-aos="fade-up">
                Contact with us for in interior inquiries
              </div>
            </section>
          </Container>
        </div>
      </div>
      <div className="contact-us-container">
        <Container maxWidth="xl">
          <div className="contact-info-wrapper">
            <div data-aos="fade-up">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>
                  <h2>Krishna Kant</h2>
                </span>
                <span>
                  <p>Managing Director, Founder</p>
                </span>
              </div>
              <br />
              <img
                src={founderPicture}
                alt=""
                style={{
                  height: "auto",
                  width: "100%",
                  background: "#d9d9d9",
                }}
              />
            </div>
            <div data-aos="fade-up">
              <h2>Let's Dive Into Your Spaces!</h2>
              <p style={{ fontSize: "20px" }} data-aos="fade-up">
                Welcome to SV Interiors, where your living spaces become a
                canvas for creativity, innovation, and unparalleled design. Our
                'Let's Discuss About Your Spaces' section is an invitation to
                embark on a collaborative journey, transforming your visions
                into bespoke realities.
              </p>
              <br />
              <br />
              <ul class="bullet-list" data-aos="fade-up">
                <li data-aos="fade-up">
                  <b>Free Consultation</b>
                </li>
                <br />
                <br />
                <li data-aos="fade-up">
                  <b>Budget Quotation</b>
                </li>
                <br />
                <br />
                <li data-aos="fade-up">
                  <b>Latest Technologies</b>
                </li>
                <br />
                <br />
                <li data-aos="fade-up">
                  <b>End-to-End Interior Solutions</b>
                </li>
                <br />
                <br />
                <li data-aos="fade-up">
                  <b>Customer Furniture Needs</b>
                </li>
                <br />
                <br />
                <li data-aos="fade-up">
                  <b>Eco Fiendly Constructions</b>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Contact Details</h2>
            <p style={{ fontSize: "22px" }}>
              Connect with us for interior inquiries
            </p>
            <div className="contact-card-container">
              <div data-aos="fade-up">
                <span>
                  <LocationOnIcon
                    fontSize="large"
                    sx={{
                      background: "#5087F2",
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                  />
                </span>
                <div>
                  <h3>Address</h3>
                  <p>
                    No.73, 2, 100 Feet Rd,
                    <br />
                    Bengaluru, Karnataka
                    <br />
                    560062
                  </p>
                </div>
              </div>
              <div data-aos="fade-up">
                <span>
                  <MailOutlineIcon
                    fontSize="large"
                    sx={{
                      background: "#5087F2",
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                  />
                </span>
                <div>
                  <h3>Email Us</h3>
                  <p>shreevinteriors@gmail.com</p>
                </div>
              </div>
              <div data-aos="fade-up">
                <span>
                  <CallIcon
                    fontSize="large"
                    sx={{
                      background: "#5087F2",
                      color: "#fff",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                  />
                </span>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 9036640175</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.523676723257!2d77.53771967629923!3d12.874012417007869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae41127225fb59%3A0x9253c9031c39b1be!2sS%20V%20Interiors!5e0!3m2!1sen!2sin!4v1710660973565!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: "0", marginBottom: "-80px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
