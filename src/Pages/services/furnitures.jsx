import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/Whp8xCcP/3d-model-sofa.jpg",
  "https://i.postimg.cc/cKCVZ6q0/3d-render-living-room-set-sofa-wooden-table.jpg",
  "https://i.postimg.cc/ppd7KpT8/3d-rendering-dining-room-kitchen-with-luxury-decor.jpg",
  "https://i.postimg.cc/k663NGwf/3d-rendering-dining-set-wooden-table-chair-interior-furniture.jpg",
  "https://i.postimg.cc/V00tcqgn/3d-rendering-modern-dining-room-living-room-with-retro-armchair-european-style.jpg",
  "https://i.postimg.cc/qzSTR8Lg/chair-set-with-two-drawer-nightstand-made-teak-wood.jpg",
  "https://i.postimg.cc/LY39gnsw/illustration-living-room-interior.jpg",
  "https://i.postimg.cc/xXQQrL3m/kitchen-1.jpg",
  "https://i.postimg.cc/ygHpxTWh/laptop-computer-with-blank-screen-table.jpg",
  "https://i.postimg.cc/DScRGHkj/living-room-scandinavian-interior-design-1.jpg",
  "https://i.postimg.cc/ppfSN4TW/mid-century-modern-living-room-interior-design-with-monstera-tree.jpg",
  "https://i.postimg.cc/CdbM9rHJ/mock-up-frame-cabinet.jpg",
  "https://i.postimg.cc/1fmdQMND/restaurant-table-with-wooden-chairs-placed-hall-decorated-classical-style.jpg",
  "https://i.postimg.cc/56mTDT7B/retro-interior-design-table-with-food-1.jpg",
  "https://i.postimg.cc/pyvpZ5gm/rubber-plant-wooden-sideboard-table.jpg",
  "https://i.postimg.cc/qt9pgWdt/scandinavian-living-room-interior-design-zoom-background.jpg",
  "https://i.postimg.cc/mPc8LnZ1/table-chair.jpg",
  "https://i.postimg.cc/0MY1jQf3/view-living-room.jpg",
  "https://i.postimg.cc/dL8w35W3/vintage-chair-luxury-vase-wall.jpg",
];

export default function Furnitures() {
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
          <div className="services-title-2">Furnitures</div>
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
