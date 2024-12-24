import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/xcgp6H8g/05e2a201b1ad3f43f551ef6801667222.jpg",
  "https://i.postimg.cc/vDvdd4Dx/10-modern-living-room-ideas-1.webp",
  "https://i.postimg.cc/D8d0Hf3x/220615-KBWID-Highland-009.webp",
  "https://i.postimg.cc/V0m4RLc3/30993-Aspire-at-Ashley-Pointe-Ellwood-Family-Room-1024x655.webp",
  "https://i.postimg.cc/WFMXgqxG/5fbfffcc8a1e13001edd1d7f.jpg",
  "https://i.postimg.cc/zLLJz84Z/A-striking-example-of-modern-living-room-design.png",
  "https://i.postimg.cc/XBLLDSjX/boho-living-room-with-reid-grey-sofa-1.jpg",
  "https://i.postimg.cc/Cd79Q96j/contemporary-style-living-room-with-minimalist-lighting.jpg",
  "https://i.postimg.cc/qNDJHzbx/declutter-living-room.jpg",
  "https://i.postimg.cc/w1rpbnMW/edc040123house-call-herrero-007-64075a1657fdb.jpg",
  "https://i.postimg.cc/gnBQY8pj/Gray-tone-living-room-in-Robson-at-The-Orchards-by-Brookfield-Residential-in-Edmonton-AB.jpg",
  "https://i.postimg.cc/sv2bdKtb/istockphoto-1208205959-612x612.jpg",
  "https://i.postimg.cc/3yQLRZc8/living-room-gallery-shelves-l-shaped-couch-ELey-Npyyqp-Z8hos-OG3-EG1-X-b5a39646574544e8a75f2961332cd89a.jpg",
  "https://i.postimg.cc/rRTcNWsM/living-room-interior-designing-service.jpg",
  "https://i.postimg.cc/hXdycYMZ/lr9-1708501055-sj-Fij.avif",
  "https://i.postimg.cc/svwy5MrC/luxurious-interior-design-scaled.jpg",
  "https://i.postimg.cc/rdyrQ0dG/modern-living-room.jpg",
  "https://i.postimg.cc/fVn7jRj5/modern-rustic-living-room.jpg",
  "https://i.postimg.cc/nMKncdSz/pexels-jean-van-der-meulen-1457842.jpg",
  "https://i.postimg.cc/bszpGQ4R/pexels-vecislavas-popa-1571453.jpg",
  "https://i.postimg.cc/cvCWhdxg/pexels-vecislavas-popa-1643383.jpg",
  "https://i.postimg.cc/4H1GLdHt/puls-living-room-multfunctional-1.webp",
];

export default function LivingRoom() {
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
          <div className="services-title-2">Living Room</div>
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
