import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
import "./styles.css";
const reviews = [
  {
    title:
      "S V Interiors turned my dull space into a vibrant living area! Their attention to detail and creative ideas transformed my home completely. The quality of their work is impeccable, and I'm thrilled with the result. Highly recommended!",
    name: "Priya Sharma",
  },
  {
    title:
      "SV Interiors has been thorough professionals while guiding on the entire process of interior designing. Our home has came out as reflection of our desires to have warm place to come back to. Would recommend SV Interiors to anyone who wants their recommendations to be followed to the points",
    name: "Alok Pratap Singh",
  },
  {
    title:
      "Krishna Kant from S V Interiors is a true professional. His ability to understand my style preferences and translate them into a beautiful design was impressive. The craftsmanship in their work is top-notch, and I couldn't be happier with the outcome!",
    name: "Rajesh Gupta",
  },
  {
    title:
      "I hired S V Interiors for my office renovation, and they exceeded my expectations. The space is now functional, stylish, and has boosted productivity. Their workmanship is excellent, and I'm very satisfied with the final look.",
    name: "Neha Patel",
  },
  {
    title:
      "The team at S V Interiors is exceptional. They listened to my ideas and incorporated them seamlessly into the design. The result? A stunning and cozy home that I love coming back to every day. Their attention to detail in their work is commendable.",
    name: "Anil Kumar",
  },
  {
    title:
      "Working with S V Interiors was a pleasure. They made the entire design process smooth and stress-free. Their work is of high quality, and I'm impressed with how my home looks now!",
    name: "Deepika Singh",
  },
  {
    title:
      "S V Interiors has a keen eye for design and a knack for creating spaces that are both beautiful and practical. The quality of their work is evident in every detail, and I couldn't be happier with the results.",
    name: "Rohit Sharma",
  },
  {
    title:
      "Krishna Kant's innovative approach to design is refreshing. I appreciated his suggestions and the way he brought my vision to life. The workmanship of S V Interiors is top-notch, and I highly recommend their services!",
    name: "Shreya Jain",
  },
  {
    title:
      "From concept to execution, S V Interiors delivered excellence. Their dedication to quality and aesthetics is commendable. The craftsmanship in their work is exceptional, and I'm thrilled with the outcome!",
    name: "Ananya Mishra",
  },
  {
    title:
      "I had a fantastic experience working with S V Interiors. They were professional, creative, and delivered a design that exceeded my expectations. The quality of their work is outstanding, and I highly recommend them!",
    name: "Arjun Gupta",
  },
  {
    title:
      "S V Interiors has a talented team that knows how to create spaces that are not only visually stunning but also functional. The attention to detail and quality of their work are impressive. I'm extremely satisfied and would choose them again.",
    name: "Sneha Singhania",
  },
];
function Testimonials() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadeOut(true);
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
        setIsFadeOut(false);
      }, 500); // Wait for fade-out transition to complete before changing the content
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>S V Interior - Testimonials</title>
      </Helmet>
      <Header />
      <ScrollToTop />
      <div className="services-main-container">
        <img
          className="services-main-container-img"
          src="https://i.postimg.cc/XYyTz76B/modern-apartment-with-comfortable-sofa-decor-generated-by-ai.jpg"
          alt=""
        />
        <div className="services-overlay">
          <Container maxWidth="xl">
            <section className="services-text-content">
              <div className="services-title">Testimonials & Our Work</div>
              <br />
            </section>
          </Container>
        </div>
      </div>
      <Container maxWidth="xl">
        <div className="youtube-container">
          <iframe
            width="100%"
            height="515"
            src="https://www.youtube.com/embed/WjNPOqjyLRI?start=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
      <div className="testimonials-heading">TESTIMONIALS</div>
      <div className="testimonials-subheading">
        {["What", "Our", "Clients", "Say"].map((word, index) => (
          <span
            key={index}
            style={{
              fontWeight: "bolder",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            {word}{" "}
          </span>
        ))}
      </div>
      <section className="testimonials">
        <img src="https://i.postimg.cc/T3FWT0sH/Services.png" alt="" />
        <div className="testimonials-text-container">
          <Container maxWidth="xl">
            <div className={`testimonials-content ${isFadeOut ? "fade-out" : "fade-in"}`}>
              <div className="testimonials-image">
                <div></div>
                <div className="testimonials-text">
                  {reviews[currentReviewIndex].title}
                  <br />
                  <br />- {reviews[currentReviewIndex].name}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Testimonials;
