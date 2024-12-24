import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/nc3Mz9QT/15415.jpg",
  "https://i.postimg.cc/Wpn1WqSj/20809.jpg",
  "https://i.postimg.cc/3xkVvzWV/3d-rendering-modern-kitchen-counter-with-white-biege-design.jpg",
  "https://i.postimg.cc/rwtckDGD/3d-rendering-white-minimal-kitchen-with-wood-decoration.jpg",
  "https://i.postimg.cc/bJvSL0bG/beautiful-green-kitchen-interior-design.jpg",
  "https://i.postimg.cc/grbJ93wH/beautiful-green-kitchen-interior-design-1.jpg",
  "https://i.postimg.cc/PJ5sF4Qw/beautiful-shot-modern-house-kitchen.jpg",
  "https://i.postimg.cc/3J2CcTW2/corner-kitchen-furniture-modern-apartment.jpg",
  "https://i.postimg.cc/nzXNv5dC/cozy-modern-kitchen-white-room-interior.jpg",
  "https://i.postimg.cc/7hnhSmYJ/empty-modern-room-with-furniture.jpg",
  "https://i.postimg.cc/7hkbCpDy/full-equipped-western-kitchen-modern-home.jpg",
  "https://i.postimg.cc/3wqvwSdK/full-equipped-western-kitchen-modern-home-1.jpg",
  "https://i.postimg.cc/9QnMP4Vb/kitchen.jpg",
  "https://i.postimg.cc/ZK62FXSM/kitchen-area-which-feature-island-counter-built-furniture.jpg",
  "https://i.postimg.cc/htf4GSxd/modern-kitchen-light-white-tones-with-black-marble-tiles.jpg",
  "https://i.postimg.cc/PrfrBb5K/modular-kitchen-designs-ideas.jpg",
  "https://i.postimg.cc/RZFhn1rq/u-shape-kitchen-with-cream-colour-aluminium-doors.jpg",
  "https://i.postimg.cc/tCDtjztg/view-beautifully-decorated-green-kitchen.jpg",
  "https://i.postimg.cc/CKnKcFxg/Whats-App-Image-2024-03-19-at-17-47-39-16c6b4c4.jpg",
  "https://i.postimg.cc/qMpzpVjs/Whats-App-Image-2024-03-19-at-17-47-39-1ced1513.jpg",
  "https://i.postimg.cc/pTNL7gmn/Whats-App-Image-2024-03-19-at-17-47-39-f0bb90b5.jpg",
];

function ModularKitchen() {
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
          <div className="services-title-2">Modular Kitchen</div>
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

export default ModularKitchen;
