import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import "./styles.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import fevicol from "../../assets/logo-of-partners/fevicol.png";
import greenply from "../../assets/logo-of-partners/Gren.png";
import hettich from "../../assets/hettich.png";
import ebco from "../../assets/logo-of-partners/ebco.jpeg";
import livsmart from "../../assets/logo-of-partners/livsmart.webp";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
import founderPicture from "../../assets/krishnakant.jpg";
import Carousel from "react-simply-carousel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Helmet } from "react-helmet-async";
const Links = [
  "https://i.postimg.cc/4y2NxFm7/top-image.webp",
  "https://i.postimg.cc/DwmzJFTC/modern-light-bedroom-with-wooden-furniture-scandinavian-style-3d-rendering.jpg",
  "https://i.postimg.cc/mkxdMTJ7/empty-modern-room-with-furniture.jpg",
  "https://i.postimg.cc/qB5JPSny/interior-design-with-photoframes-couch.jpg",
  "https://i.postimg.cc/qq0Rz3Jn/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv.jpg",
  "https://i.postimg.cc/7Y0FKWNx/beautiful-shot-modern-house-kitchen.jpg",
  "https://i.postimg.cc/gkLzmsq5/modern-luxury-interior-living-room-is-bright-clean-3d-illustration.jpg",
];
function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Links.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  return (
    <>
      <Helmet>
        <title>S V Interior</title>
      </Helmet>
      <Header />
      <ScrollToTop />
      <div className="main-container">
        <img className="main-container-img" src={Links[currentIndex]} alt="" />
        <div className="overlay">
          <Container maxWidth="xl">
            <section className="section-1">
              <div className="section-1-left" data-aos="fade-up">
                <div className="title">
                  Your complete interior design solution,
                  <br />
                  <span style={{ color: "#AFCC21" }}>all in one place.</span>
                </div>
                <div className="sub-title">
                  Step into a world of elegance with SV Interiors. Let&apos;s
                  craft your dream space together!
                </div>
                <div>
                  <Link to="/projects">
                    <button className="project-button">See our project</button>
                  </Link>
                </div>
              </div>
              <div className="section-1-right" data-aos="fade-up">
                <img src="https://i.postimg.cc/rwX2NkXy/chair.jpg" alt="" />
              </div>
            </section>
          </Container>
        </div>
      </div>
      <section className="section-2" id="section-2">
        <Container maxWidth="xl">
          <div className="section-2-title" data-aos="fade-up">
            A budget-friendly and user-centric design solution in Bangalore.
          </div>
        </Container>
      </section>
      <section className="our-project">
        <img
          className="our-project-img"
          src="https://i.postimg.cc/630pDQKh/3d-rendering-luxury-modern-living-room-with-leather-sofa-lamp.webp"
          alt=""
        />
        <div className="section-3-content">
          <Container maxWidth="xl">
            <div className="our-project-container" data-aos="fade-up">
              <div className="our-project-header" data-aos="fade-down">
                <span style={{ fontSize: "clamp(1.25rem, 4vw, 2.25rem)" }}>
                  Our
                </span>
                <br />
                <span style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
                  Project
                </span>
              </div>
              <p className="our-project-paragraph" data-aos="fade-up">
                At SV interiors, our interior design projects speak volumes.
                Discover how our tailored solutions have transformed spaces and
                exceeded expectations. Hear directly from our delighted clients
                about their experiences and the remarkable results achieved
                through our collaborative approach to design.
              </p>
            </div>
          </Container>
        </div>
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section className="about-us">
        <Container maxWidth="xl">
          <div className="about-us-container">
            <div data-aos="fade-up">
              <img src={founderPicture} alt="" className="founder-image" />
              <div className="founder-name">Krishna Kanth</div>
              <div className="founder-position">
                Founder and Managing director
              </div>
            </div>
            <div>
              <div className="about-us-subheader" data-aos="fade-down">
                Interior Design Firm Based in Bengaluru
              </div>
              <p className="about-us-text" data-aos="fade-up">
                Established in 2011 by Krishna Kant, S V Interiors stands as a
                beacon of inspired creativity, merging functionality with
                aesthetics in transformative projects across a diverse
                portfolio, including apartments such as Mantri Serenity
                Kanakapura Road, Balaji Residency, Godrej Eternity, Eden
                Habitat, Greenwood, Annciya Nature's Nest, Suncity Apartment,
                SGIR Silverwoods, Shriram Blue Apartment, Candeur Signature,
                Pashmina Waterfront Apartment, Asset Arcadia, Passion Elite,
                Orchid Piccadilly, and Hebron Avenue. Krishna Kant's vision for
                the company is to continuously grow, innovating and expanding
                while maintaining a commitment to excellence and client
                satisfaction.
              </p>
              <button
                data-aos="zoom-out"
                className="about-us-button"
                onClick={() => navigate("/contact-us")}
              >
                Know More
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section id="partner-companies-container">
        <Container maxWidth="xl">
          <div className="carousel-wrapper">
            <Carousel
              containerProps={{
                style: {
                  width: "auto",
                  justifyContent: "space-between",
                  userSelect: "none",
                },
              }}
              preventScrollOnSwipe
              swipeTreshold={60}
              activeSlideIndex={activeSlide}
              activeSlideProps={{
                style: {
                  background: "blue",
                },
              }}
              onRequestChange={setActiveSlide}
              forwardBtnProps={{
                children: <ChevronRightIcon fontSize="large" />,
                style: {
                  width: 60,
                  height: 60,
                  minWidth: 60,
                  alignSelf: "center",
                  border: "none",
                  background: "#fff",
                  cursor: "pointer",
                },
              }}
              backwardBtnProps={{
                children: <ChevronLeftIcon fontSize="large" />,
                style: {
                  width: 60,
                  height: 60,
                  minWidth: 60,
                  alignSelf: "center",
                  border: "none",
                  background: "#fff",
                  cursor: "pointer",
                },
              }}
              itemsToShow={3}
              speed={500}
              centerMode
            >
              <div className="item">
                <img src={fevicol} alt="fevicol" loading="lazy" />
              </div>
              <div className="item">
                <img src={greenply} alt="greenply" loading="lazy" />
              </div>
              <div className="item">
                <img src={hettich} alt="hettich" loading="lazy" />
              </div>
              <div className="item">
                <img src={ebco} alt="ebco" loading="lazy" />
              </div>
              <div className="item">
                <img src={livsmart} alt="livsmart" loading="lazy" />
              </div>
            </Carousel>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
