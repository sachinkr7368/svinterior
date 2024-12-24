import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
import { Container } from "@mui/material";
import allteam from "../../assets/allteam.jpg";
import wallteam from "../../assets/3.jpg";
import decoteam from "../../assets/4.jpg";
import popteam from "../../assets/1.jpg";
import electricalteam from "../../assets/5.jpg";
import directorpic from "../../assets/krishnakant.jpg";
import codirectorpic from "../../assets/2.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CountUp from "react-countup";
import "./styles.css";
function AboutUs() {
  return (
    <>
      <Helmet>
        <title>S V Interior - About Us</title>
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
              <div className="services-title">
                Meet our{" "}
                <span style={{ color: "#AFCC21" }}>design dream team</span>
              </div>
              <br />
              <br />
              <div className="services-sub-title">
                where creativity thrives and magic happens
              </div>
            </section>
          </Container>
        </div>
      </div>
      <div className="about-us">
        <Container maxWidth="xl">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>
              <div style={{ fontSize: "clamp(1.25rem,4vw,2.5rem)" }}>
                <b>Krishna Kant</b>
              </div>
            </span>
            <span>
              <div>Managing Director, Founder</div>
            </span>
          </div>
          <div className="founder-container">
            <div>
              <p>
                S V Interiors, established in 2011 by Krishna Kant, is where
                inspired visions come to life. With a focus on blending
                functionality with aesthetics, Krishna Kant brings his expertise
                to every project, ensuring spaces resonate with personality and
                style. As the creative mind behind both the opening and interior
                designs, Krishna Kant's passion for innovation and commitment to
                excellence shine through in every detail.
              </p>
            </div>
            <div>
              <img src={directorpic} alt="director" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>
              <div style={{ fontSize: "24px" }}>
                <b>Kamal Kishore</b>
              </div>
            </span>
            <span>
              <div>Co Director</div>
            </span>
          </div>
          <div className="founder-container">
            <div>
              <p>
                Introducing Kamal Kishor, our Co-Director who orchestrates our
                marketing efforts and financial management with finesse. With
                his expertise in both realms, Kamal ensures our projects not
                only captivate but also remain financially sound. Join us as we
                embark on a journey of design excellence and financial prudence
                under Kamal's guidance.
              </p>
            </div>
            <div>
              <img src={codirectorpic} alt="director" />
            </div>
          </div>
          <div className="business-number-container">
            <div>
              <div>
                <CountUp end={300} duration={4} suffix=" +" />
              </div>
              <div>PROJECTS COMPLETED</div>
              <div>
                <TaskAltIcon fontSize="large" sx={{ color: "#AFCC21" }} />
              </div>
            </div>
            <div>
              <div>
                <CountUp end={300} duration={4} suffix=" +" />
              </div>
              <div>SATISFIED CUSTOMER</div>
              <div>
                <PersonIcon fontSize="large" sx={{ color: "#AFCC21" }} />
              </div>
            </div>
            <div>
              <div>
                <CountUp end={13} duration={2} suffix=" +" />
              </div>
              <div>YEARS IN SERVICE</div>
              <div>
                <CalendarMonthIcon fontSize="large" sx={{ color: "#AFCC21" }} />
              </div>
            </div>
          </div>
          <div className="meet-our-team-header">Meet Our Team</div>
          <div className="meet-our-team-subheader">Interior Team</div>
          <img className="all-team-image" src={allteam} alt="team" />
          <p className="meet-our-team-text-content">
            Dynamic interior team with Errol Andrade & Krishna Sharma, 12+ years
            of expertise.
          </p>
          <div className="all-team-container">
            <div>
              <div className="meet-our-team-subheader">Wall Paint</div>
              <img src={wallteam} alt="wall team" />
              <p className="meet-our-team-text-content">
                Vishwajeet Saxena leads our expert paint team.
              </p>
            </div>
            <div>
              <div className="meet-our-team-subheader">Deco & Polish</div>
              <img src={decoteam} alt="deco team" />
              <p className="meet-our-team-text-content">
                Jitendra Singh leads our deco and polish team.
              </p>
            </div>
          </div>
          <div className="all-team-container">
            <div>
              <div className="meet-our-team-subheader">POP / False Ceiling</div>
              <img src={popteam} alt="pop team" />
              <p className="meet-our-team-text-content">
                Md Ishtiyak heads our expert POP team.
              </p>
            </div>
            <div>
              <div className="meet-our-team-subheader">Electrical Work</div>
              <img src={electricalteam} alt="electrical team" />
              <p className="meet-our-team-text-content">
                Manjunath J leads our electrical team{" "}
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
