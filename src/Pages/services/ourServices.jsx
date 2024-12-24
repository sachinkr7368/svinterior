import React from "react";
import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
import "./styles.css";

function OurServices() {
  return (
    <>
      <Helmet>
        <title>S V Interior - Projects</title>
        <meta
          name="description"
          content="The heart of your home, reimagined with our beautiful design."
        />
      </Helmet>
      <Header />
      <ScrollToTop />
      <div className="services-main-container">
        <img
          className="services-main-container-img"
          src="https://i.postimg.cc/gJnb1dWL/Services-2.png"
          alt=""
        />
        <div className="services-overlay">
          <Container maxWidth="xl">
            <section className="services-text-content">
              <div className="services-title">Project Sites</div>
              <br />
              <br />
              <div className="services-sub-title">
                Your All-in-One Interior Design Solution.
              </div>
            </section>
          </Container>
        </div>
      </div>
      <div className="all-services-list">
        <Container maxWidth="xl">
          <div className="services-header">Kitchen</div>
          <div className="services-top">
            <div className="services-top-left">
              <img
                src="https://i.postimg.cc/7Y0FKWNx/beautiful-shot-modern-house-kitchen.jpg"
                alt=""
              />
            </div>
            <div className="services-top-right">
              <div className="services-topr-right-title">Kitchen</div>
              <br />
              <div className="services-topr-right-sub-title">
                The heart of your home,
              </div>
              <div className="services-topr-right-sub-title">
                reimagined with our beautiful design.
              </div>
            </div>
          </div>
          <div className="services-bottom">
            <div>
              <img
                src="https://i.postimg.cc/mkxdMTJ7/empty-modern-room-with-furniture.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.postimg.cc/jdwDZ9v3/3d-rendering-white-minimal-kitchen-with-wood-decoration.webp"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.postimg.cc/zf53DfN4/cozy-modern-kitchen-white-room-interior.jpg"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="all-services-list">
        <Container maxWidth="xl">
          <div className="services-header">Living Room</div>
          <div className="services-top">
            <div className="services-top-left">
              <img
                src="https://i.postimg.cc/FHLbYp68/gray-sofa-brown-living-room-with-copy-space.jpg"
                alt=""
              />
            </div>
            <div className="services-top-right">
              <div className="services-topr-right-title">Living Room</div>
              <br />
              <div className="services-topr-right-sub-title">
                The heart of your home,
              </div>
              <div className="services-topr-right-sub-title">
                reimagined with our beautiful design.
              </div>
            </div>
          </div>
          <div className="services-bottom">
            <div>
              <img
                src="https://i.postimg.cc/qB5JPSny/interior-design-with-photoframes-couch.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.postimg.cc/gkLzmsq5/modern-luxury-interior-living-room-is-bright-clean-3d-illustration.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.postimg.cc/R0x7Kf5F/spacious-living-room.jpg"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="all-services-list">
        <Container maxWidth="xl">
          <div className="services-header">Office Space</div>
          <div className="services-top">
            <div className="services-top-left">
              <img
                src="https://i.postimg.cc/yY2Hs6cB/3d-render-modern-home-office.jpg"
                alt=""
              />
            </div>
            <div className="services-top-right">
              <div className="services-topr-right-title">Office Space</div>
              <br />
              <div className="services-topr-right-sub-title">
                The heart of your home,
              </div>
              <div className="services-topr-right-sub-title">
                reimagined with our beautiful design.
              </div>
            </div>
          </div>
          <div className="services-bottom">
            <div>
              <img
                src="https://i.postimg.cc/YSkTCv9c/front-view-off-office-desk.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.postimg.cc/50Krgpm1/interior-design-with-photoframes-desk-arrangement.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.postimg.cc/Tw3SnBgC/view-modern-office.jpg"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="all-services-list">
        <Container maxWidth="xl">
          <div className="services-header">Bedroom</div>
          <div className="services-top">
            <div className="services-top-left">
              <img
                src="https://i.postimg.cc/qq0Rz3Jn/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv.jpg"
                alt=""
              />
            </div>
            <div className="services-top-right">
              <div className="services-topr-right-title">Bedroom</div>
              <br />
              <div className="services-topr-right-sub-title">
                The heart of your home,
              </div>
              <div className="services-topr-right-sub-title">
                reimagined with our beautiful design.
              </div>
            </div>
          </div>
          <div className="services-bottom">
            <div>
              <img
                src="https://i.postimg.cc/Px914FPm/beautiful-luxury-bedroom-suite-hotel.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.postimg.cc/qvN4fbRt/illustration-poster-frame-interior-background.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.postimg.cc/DwmzJFTC/modern-light-bedroom-with-wooden-furniture-scandinavian-style-3d-rendering.jpg"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default OurServices;
