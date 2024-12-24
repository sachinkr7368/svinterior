import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
import { Container } from "@mui/material";
import Machine1 from "../../assets/machinerys/Factory-Price-Wood-Cutting-Machine-Sliding-Table-Saw.jpg";
import Machine2 from "../../assets/machinerys/Hf0dba3943e204739be1a3cf28f904a4bN.jpg_300x300.webp";
import Machine3 from "../../assets/machinerys/Mf360A-Factory-Price-Automatic-Edge-Bander-Edge-Banding-Machine.webp";
import Machine4 from "../../assets/machinerys/foratrice_multipla_scm_startech_27.jpeg.webp";
import "./styles.css";
function Factory() {
  return (
    <>
      <Helmet>
        <title>S V Interior - Factory & Machinery</title>
      </Helmet>
      <Header />
      <ScrollToTop />
      <div className="services-main-container">
        <img
          className="services-main-container-img"
          src="https://i.postimg.cc/sx5RZjfh/armchair-green-living-room-with-copy-space.jpg"
          alt=""
        />
        <div className="services-overlay">
          <Container maxWidth="xl">
            <section className="services-text-content">
              <div className="services-title">Machinery</div>
              <br />
              <br />
              <div className="services-sub-title">
                machinerys we use to craft exceptional interior designs
              </div>
            </section>
          </Container>
        </div>
      </div>
      <div className="factory-container">
        <Container maxWidth="xl">
          <div className="factory-card">
            <div>
              <span>
                <img src={Machine1} alt="" />
              </span>
              <span>Wood Cutting Machine</span>
            </div>
            <div>
              <span>
                <img src={Machine2} alt="" />
              </span>
              <span>Wood Pressing Machine</span>
            </div>
            <div>
              <span>
                <img src={Machine3} alt="" />
              </span>
              <span>Edge Banding Machine</span>
            </div>
            <div>
              <span>
                <img src={Machine4} alt="" />
              </span>
              <span>Boring Machine</span>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Factory;
