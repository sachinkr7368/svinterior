import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/8J25Mqdf/1-39.jpg",
  "https://i.postimg.cc/ykXd3pDW/18e521d228bb47b78223620a44c813b4.jpg",
  "https://i.postimg.cc/87pCRdv4/3103516-df27b.jpg",
  "https://i.postimg.cc/jLKqT6MT/42f6bd805932139a2ad48b28ac9fbe23.jpg",
  "https://i.postimg.cc/TKt3Cyq6/add-a-spiral-grill-into-your-contemporary-home-window-0-1200.jpg",
  "https://i.postimg.cc/HcyWY6GY/cast-iron-balcony-grill-500x500.webp",
  "https://i.postimg.cc/svRxXCDt/decorative-aluminium-door-grill-for-residential-2220211175-s32bkoio.avif",
  "https://i.postimg.cc/64xWyCwd/easy-installation-sturdy-construction-chrome-finish-stainless-steel-designs-grill-for-home-354.jpg",
  "https://i.postimg.cc/sB1D8VwZ/Elegant-window-grill-designs-for-your-home-image-01-533x400.jpg",
  "https://i.postimg.cc/QKDDXskm/f66c984901cc6466608c63d5b2cef695.jpg",
  "https://i.postimg.cc/kBnCzJ5X/grill-colour.jpg",
  "https://i.postimg.cc/8JR8X9Q6/modern-balcony-grill-design.jpg",
  "https://i.postimg.cc/QFdX98Ln/modern-stainless-steel-balcony-grills-for-apartment-500x500.webp",
  "https://i.postimg.cc/RNRSZ3YH/modern-stainless-steel-staircase-grill-500x500.webp",
  "https://i.postimg.cc/TKNTnzf2/product-500x500.webp",
  "https://i.postimg.cc/G8Grw9Y9/product-jpeg.jpg",
  "https://i.postimg.cc/SXXkdgx6/simple-stainless-steel-balcony-grills-for-house-500x500.webp",
  "https://i.postimg.cc/s1PyTQsN/stainless-steel-balcony-grill.jpg",
  "https://i.postimg.cc/BPC0bym0/stainless-steel-window-grill-for-home-material-grade-ss304-2189807032-8ocjszk1.avif",
  "https://i.postimg.cc/06J1DrVZ/Untitled.jpg",
  "https://i.postimg.cc/62JJ0wSK/vidya-steels-main-door-grill-for-home-and-appartments-stainless-steel-2220113268-49ma02gk.avif",
];

export default function Grills() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setSelectedIndex(index);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % Links.length;
    setSelectedImage(Links[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const handlePreviousImage = (e) => {
    e.stopPropagation();
    const previousIndex = (selectedIndex - 1 + Links.length) % Links.length;
    setSelectedImage(Links[previousIndex]);
    setSelectedIndex(previousIndex);
  };
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="all-services-layout">
        <Container maxWidth="xl">
          <div className="services-title-2">Grills</div>
          <div className="services-photo-container">
            {Links.map((link, index) => (
              <div className="grid-item" key={index}>
                <div className="image-overlay">
                  <FullscreenIcon
                    fontSize="large"
                    sx={{ color: "#fff" }}
                    onClick={() => handleImageClick(link, index)}
                  />
                </div>
                <img
                  src={link}
                  alt=""
                  loading="lazy"
                  onClick={() => handleImageClick(link, index)}
                />
              </div>
            ))}
            {selectedImage && (
              <div className="modal" onClick={() => setSelectedImage(null)}>
                <ChevronLeftIcon
                  fontSize="large"
                  sx={{ color: "#fff", cursor: "pointer" }}
                  className="left-arrow"
                  onClick={handlePreviousImage}
                />
                <img src={selectedImage} alt="" />
                <ChevronRightIcon
                  fontSize="large"
                  sx={{ color: "#fff", cursor: "pointer" }}
                  className="right-arrow"
                  onClick={handleNextImage}
                />
              </div>
            )}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
