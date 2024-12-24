import React from "react";
import "./styles.css";
import { Container } from "@mui/material";
import { BsHouseDoorFill, BsFillPersonDashFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { AiOutlineWarning } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiCubeTransparentFill, PiMedalFill } from "react-icons/pi";
import { HiCurrencyRupee } from "react-icons/hi";
function WhyChooseUs() {
  return (
    <Container maxWidth="xl">
      <div className="why-choose-us-container">
        <div className="why-choose-us-header" data-aos="fade-up">
          Why Choose Us
        </div>
        <div className="why-choose-us-content">
          <div className="why-choose-us-title" data-aos="fade-up">
            Why Choose Us
          </div>
          <div className="why-choose-us-options">
            <div className="why-choose-us-first-row">
              <div data-aos="fade-up">
                <span>
                  <BsHouseDoorFill color="#AFCC21" size={70} />
                </span>
                <div style={{ flex: 1 }} className="why-choose-us-skills">
                  <span className="why-choose-us-subtitle">
                    Direct from the Factory
                  </span>
                  <span className="why-choose-us-text">
                    Transform your space with our precise Direct from the
                    Factory expertise, ensuring both functionality and beauty in
                    every detail.
                  </span>
                </div>
              </div>
              <div data-aos="fade-up">
                <span>
                  <HiUserGroup color="#AFCC21" size={70} />
                </span>
                <div style={{ flex: 1 }} className="why-choose-us-skills">
                  <span className="why-choose-us-subtitle">
                    Experienced Professionals
                  </span>
                  <span className="why-choose-us-text">
                    From idea to finish, we meticulously manage every design
                    detail for flawless execution and stunning outcomes.
                  </span>
                </div>
              </div>
              <div data-aos="fade-up">
                <span>
                  <BsFillPersonDashFill color="#AFCC21" size={70} />
                </span>
                <div style={{ flex: 1 }} className="why-choose-us-skills">
                  <span className="why-choose-us-subtitle">
                    Client-Centric Approach
                  </span>
                  <span className="why-choose-us-text">
                    Your satisfaction is key. We listen closely to your needs,
                    crafting a design that reflects your unique style.
                  </span>
                </div>
              </div>
            </div>
            <div className="why-choose-us-second-row">
              <div data-aos="fade-up">
                <span>
                  <PiMedalFill color="#AFCC21" size={70} />
                </span>
                <div style={{ flex: 1 }} className="why-choose-us-skills">
                  <span className="why-choose-us-subtitle">
                    Quality Craftsmanship
                  </span>
                  <span className="why-choose-us-text">
                    From idea to finish, we meticulously manage every design
                    detail for flawless execution and stunning outcomes.
                  </span>
                </div>
              </div>
              <div data-aos="fade-up">
                <span>
                  <PiCubeTransparentFill color="#AFCC21" size={70} />
                </span>
                <div style={{ flex: 1 }} className="why-choose-us-skills">
                  <span className="why-choose-us-subtitle">
                    Transparent Communication
                  </span>
                  <span className="why-choose-us-text">
                    We believe in open and transparent communication throughout
                    the project, keeping you informed and involved at every
                    stage.
                  </span>
                </div>
              </div>
              <div data-aos="fade-up">
                <span>
                  <HiCurrencyRupee color="#AFCC21" size={70} />
                </span>
                <div style={{ flex: 1 }} className="why-choose-us-skills">
                  <span className="why-choose-us-subtitle">
                    Value for Money
                  </span>
                  <span className="why-choose-us-text">
                    Our portfolio speaks for itself. Explore our past projects
                    and testimonials to see the exceptional standards we
                    consistently deliver.
                  </span>
                </div>
              </div>
            </div>
            <div className="why-choose-us-third-row">
              <div data-aos="fade-up">
                <span>
                  <CiDeliveryTruck color="#AFCC21" size={70} />
                </span>
                <div style={{ flex: 1 }} className="why-choose-us-skills">
                  <span className="why-choose-us-subtitle">
                    Timely Delivery
                  </span>
                  <span className="why-choose-us-text">
                    From idea to finish, we meticulously manage every design
                    detail for flawless execution and stunning outcomes.
                  </span>
                </div>
              </div>
              <div data-aos="fade-up">
                <span>
                  <AiOutlineWarning color="#AFCC21" size={70} />
                </span>
                <div style={{ flex: 1 }} className="why-choose-us-skills">
                  <span className="why-choose-us-subtitle">
                    Attention to Detail
                  </span>
                  <span className="why-choose-us-text">
                    We believe in open and transparent communication throughout
                    the project, keeping you informed and involved at every
                    stage.
                  </span>
                </div>
              </div>
              <div data-aos="fade-up">
                <span>
                  <RiVerifiedBadgeLine color="#AFCC21" size={70} />
                </span>
                <div style={{ flex: 1 }} className="why-choose-us-skills">
                  <span className="why-choose-us-subtitle">warranty</span>
                  <span className="why-choose-us-text">
                    Experience worry-free design with our warranty services,
                    providing assurance and support for the longevity and
                    quality of your project.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WhyChooseUs;
