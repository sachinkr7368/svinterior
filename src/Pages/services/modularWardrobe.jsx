import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/xC9nW7rs/3d-rendering-minimal-scandinavian-walk-closet-with-wood-wardrobe.jpg",
  "https://i.postimg.cc/nzhNKtft/3d-rendering-minimal-scandinavian-wood-walk-closet-with-wardrobe.jpg",
  "https://i.postimg.cc/K8ZXcTpz/3d-rendering-minimal-scandinavian-wood-walk-closet-with-wardrobe-1.jpg",
  "https://i.postimg.cc/7LmWZQGt/3d-rendering-minimal-scandinavian-wood-walk-closet-with-wardrobe-2.jpg",
  "https://i.postimg.cc/q7SZK6w2/3d-rendering3d-illustration-interior-scene-mockupmodern-style-walkin-closet-large-lshaped-wardrobe-d.jpg",
  "https://i.postimg.cc/HsgR35g2/3d-rendering3d-illustration-interior-scene-mockupmodern-style-walkin-closet-lightcolored-wood-materi.jpg",
  "https://i.postimg.cc/cLYW6Z09/5175.jpg",
  "https://i.postimg.cc/FsYN53qQ/743.jpg",
  "https://i.postimg.cc/tCFy4pXr/bedroom-with-bed-lamp-wall.jpg",
  "https://i.postimg.cc/Y94BKwnz/bedroom-with-wall-closets-with-study-desk-chair-front-it.jpg",
  "https://i.postimg.cc/VLKgMbL5/bedroom-with-wardrobe-chair-it.jpg",
  "https://i.postimg.cc/gkbF5Qv3/deluxe-pleasant-walk-closet-interior-design.jpg",
  "https://i.postimg.cc/mkNdKXsS/elegant-dressing-room-green-hues-generative-ai.jpg",
  "https://i.postimg.cc/DfqYWZXb/golden-white-marble-bathroom-interior-design-3d-illustration.jpg",
  "https://i.postimg.cc/1t1rPGM7/interior-design-house-home-apartment-villa-feature-wardrobe-bedroom.jpg",
  "https://i.postimg.cc/gjdsyVZL/modern-bedroom-interior-design-3d-visualization-luxurious-interior-bed-background-dec.jpg",
  "https://i.postimg.cc/prtGGNgT/simple-modern-walk-closet-interior-design.jpg",
  "https://i.postimg.cc/RVZQMVQm/wardrobe-renovation-concept.jpg",
  "https://i.postimg.cc/TwnQW7pX/wardrobe-shelf-wooden-japanese-style-decoration-plants-shelf-3d-rendering.jpg",
  "https://i.postimg.cc/zGMk2Zhr/wardrobe-wooden-design-cabinet-tv-wooden-japanese-design-room-minimal-interior.jpg",
];

export default function ModularWardrobe() {
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
          <div className="services-title-2">Modular Wardrobe</div>
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
