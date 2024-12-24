import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/BXCBq0Gv/01-kids-room.jpg",
  "https://i.postimg.cc/4mnx36Dh/021-1-1707364427-VO0gp.avif",
  "https://i.postimg.cc/XBC9MRkn/1-Kids-Room-Interior-Design-Bangalore-KBR-2-BHK-Electronic-City-Bangalore.jpg",
  "https://i.postimg.cc/PLCxFm4j/102899854-cccbb012efc146748ac38034ff9225f4.jpg",
  "https://i.postimg.cc/Mf7XmqYf/14ea6768e62f920e01da2abfd883b434.jpg",
  "https://i.postimg.cc/8FcJg8Tx/aca6552fcc7b5578b4b40806d7743978.jpg",
  "https://i.postimg.cc/vxtH6XQW/AD-Amazing-Kids-Bedroom-Design-Ideas-01.jpg",
  "https://i.postimg.cc/dLc5s6k5/BK-1.jpg",
  "https://i.postimg.cc/hfnXPQSL/bunk-bed-kids-rooms-lookbook-dezeen-2364-col-0-852x479.jpg",
  "https://i.postimg.cc/WqTsjrMt/childrens-room-with-a-play-kitchen-with-blue-curtains-and-a-7b426d4a148a0f2cedfb723a0c792c5c.avif",
  "https://i.postimg.cc/vDh4THDC/data-bunk-beds-darla-bunk-bed-mahogany-finish-updated-honey-finish-updated-1-750x650.jpg",
  "https://i.postimg.cc/wR2gBvV2/del-beds.jpg",
  "https://i.postimg.cc/F7n1bWyZ/image-100.jpg",
  "https://i.postimg.cc/fVJt6nzp/kids-bedroom-design-in-modern-eclectic-style-with-bunk-beds.jpg",
  "https://i.postimg.cc/B8F8nT1C/kids-bedroom-set-500x500.webp",
  "https://i.postimg.cc/3y2RT3PS/kids-room-interiors.jpg",
  "https://i.postimg.cc/MX6GC2t5/lolostairsleftlife-400x.webp",
  "https://i.postimg.cc/YLCqYYjZ/three-beds-kids-room-design-10.jpg",
  "https://i.postimg.cc/K1McPZvG/wall-design-wall-paint-wall-decor-interiar-wall.jpg",
  "https://i.postimg.cc/QFGZrchD/Whats-App-Image-2020-08-07-at-09-52-22-1.jpg",
];

export default function KidsRoom() {
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
          <div className="services-title-2">Kids Room</div>
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
