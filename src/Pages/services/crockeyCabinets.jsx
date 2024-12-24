import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/bw9rGzwY/2150771875.jpg",
  "https://i.postimg.cc/mr996xb0/3d-render-kitchen-with-black-countertop-white-sink.jpg",
  "https://i.postimg.cc/8cYW0T6g/3d-rendering-white-minimal-kitchen-with-wood-decoration.jpg",
  "https://i.postimg.cc/G38rycmP/beautiful-shot-modern-house-kitchen-shelves-drawers.jpg",
  "https://i.postimg.cc/Y0fpV3VN/crockery-arranged-shelves-home.jpg",
  "https://i.postimg.cc/nrNj1TyH/interior-kitchen-with-light-furniture-tiled-floor-cozy-house.jpg",
  "https://i.postimg.cc/tgMtZdBz/interior-modern-kitchen-with-white-furniture.jpg",
  "https://i.postimg.cc/MTHKnVnq/kitchen.jpg",
  "https://i.postimg.cc/FsDsmTW1/luxurious-new-beige-kitchen-with-modern-appliances.jpg",
  "https://i.postimg.cc/nzPCH0cv/luxurious-new-green-kitchen-with-modern-appliances.jpg",
  "https://i.postimg.cc/2S5ZQbb9/luxurious-new-white-kitchen-with-modern-appliances.jpg",
  "https://i.postimg.cc/NFJgBMsL/luxurious-white-black-modern-kitchen-interior-drawers-pulled-out-1.jpg",
  "https://i.postimg.cc/NMZ4V8T0/luxury-interior-design-pool-villa-kitchen-area-whith-feature-island-counter.jpg",
  "https://i.postimg.cc/WbxdkWVz/modern-gray-white-kitchen-interior.jpg",
  "https://i.postimg.cc/gk2JQ9zn/modern-kitchen-interior-with-magenta-decoration.jpg",
  "https://i.postimg.cc/FKrNd3Y1/render-3d-contemporary-kitchen.jpg",
  "https://i.postimg.cc/W3fNPzbz/render-3d-contemporary-kitchen-1.jpg",
  "https://i.postimg.cc/q7wBjQP8/render-3d-contemporary-kitchen-2.jpg",
  "https://i.postimg.cc/yNsYm2b1/set-plates-cups-wine-glasses-shelf-kitchen-cabinet.jpg",
  "https://i.postimg.cc/4dwKHX4R/vertical-shot-white-shelf-with-different-types-ceramic-glass-kitchenware-it.jpg",
];
export default function CrockeryCabinets() {
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
          <div className="services-title-2">Crockery Cabinets</div>
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
