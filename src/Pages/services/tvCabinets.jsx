import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/rRMD71vh/3d-rendering-modern-interior-design.jpg",
  "https://i.postimg.cc/cv4b0PRW/3d-rendering-modern-luxury-tv-wall-decoration-interior-design.jpg",
  "https://i.postimg.cc/TKfXmknN/3d-rendering-modern-luxury-tv-wall-furniture-interior-design-inspiration.jpg",
  "https://i.postimg.cc/VSHyxmp2/3d-rendering-modern-luxury-tv-wall-furniture-interior-design-inspiration-1.jpg",
  "https://i.postimg.cc/mzjGm7RN/cabinet-tv-mix-wardrobe-shelf-wooden-japanese-style-decoration-plants-shelf-3d-rendering.jpg",
  "https://i.postimg.cc/hf5KF8m2/cabinet-tv-mix-wardrobe-shelf-wooden-japanese-style-decoration-plants-shelf-3d-rendering-1.jpg",
  "https://i.postimg.cc/dhc401zG/cozy-living-room-background-zoom-calls.jpg",
  "https://i.postimg.cc/8FK82Mj1/living-room-apartment.jpg",
  "https://i.postimg.cc/XpQ0ffxV/living-room-with-tv-wall-plant-wall.jpg",
  "https://i.postimg.cc/8fGVHwqC/living-room-with-tv-wall-with-lamp-it.jpg",
  "https://i.postimg.cc/q67HSgvf/mock-up-tv-cabinet-display-with-modern-room-white-minimalist.jpg",
  "https://i.postimg.cc/bG2HPjvs/modern-interior-room-with-furniture-3d-rendering.jpg",
  "https://i.postimg.cc/HjjWksgZ/modern-minimalist-interior-living-room-white-tv-cabinate.jpg",
  "https://i.postimg.cc/fVQ0d0WT/room-interior-mockup-with-decorative-marble-wood-wall-blank-tv-luxury-desk.jpg",
  "https://i.postimg.cc/4n4PKqLF/smart-tv-white-wall-living-room-with-armchair-sofa-minimal-design.jpg",
  "https://i.postimg.cc/D88c6sKr/tv-cabinet-dark-room-with-dark-wood-wall-3d-rendering.jpg",
  "https://i.postimg.cc/VSB9vWj8/tv-cabinet-modern-living-room-with-lamp-table-flower-plant-wooden-wall-background.jpg",
  "https://i.postimg.cc/t7m3sTVY/tv-is-mounted-wall-living-room.jpg",
  "https://i.postimg.cc/sMJ9DJPR/tv-room-interior-mockup-with-blank-tv-brown-decorative-wall-vintage-desk.jpg",
  "https://i.postimg.cc/XZ0htxjS/tv-wall-modern-living-room-with-decoration-armchair-wooden-cement-wall.jpg",
  "https://i.postimg.cc/2L3XnKwv/tv-wall-mounted-dark-room-with-concrete-wall-3d-rendering.jpg",
];

export default function TVCabinets() {
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
          <div className="services-title-2">TV Cabinets</div>
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
