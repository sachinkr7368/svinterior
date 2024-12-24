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
  "https://i.postimg.cc/mr996xb0/3d-render-kitchen-with-black-countertop-white-sink.jpg",
  "https://i.postimg.cc/kMTckb39/contemporary-foyer-area-1.jpg",
  "https://i.postimg.cc/jLKqT6MT/42f6bd805932139a2ad48b28ac9fbe23.jpg",
  "https://i.postimg.cc/Z0CXXW8c/81-CPZ8l-W1v-L-AC-UF1000-1000-QL80.jpg",
  "https://i.postimg.cc/vxtH6XQW/AD-Amazing-Kids-Bedroom-Design-Ideas-01.jpg",
  "https://i.postimg.cc/Cd79Q96j/contemporary-style-living-room-with-minimalist-lighting.jpg",
  "https://i.postimg.cc/3wqvwSdK/full-equipped-western-kitchen-modern-home-1.jpg",
  "https://i.postimg.cc/Y94BKwnz/bedroom-with-wall-closets-with-study-desk-chair-front-it.jpg",
  "https://i.postimg.cc/qgYnGvXS/laser-cut-metal-partition-design-pooja-room.jpg",
  "https://i.postimg.cc/q7JpFSH1/f90f3403302ce6d136977a026d518f50.jpg",
  "https://i.postimg.cc/5YQFW97r/whatsapp-image-2022-12-30-at-7-07-46-pm-1-500x500.webp",
  "https://i.postimg.cc/2L3XnKwv/tv-wall-mounted-dark-room-with-concrete-wall-3d-rendering.jpg",
  "https://i.postimg.cc/cKCVZ6q0/3d-render-living-room-set-sofa-wooden-table.jpg",
  "https://i.postimg.cc/8cYW0T6g/3d-rendering-white-minimal-kitchen-with-wood-decoration.jpg",
  "https://i.postimg.cc/Bv55N8cr/entryway-design-tips-to-turn-into-a-hobby-nook.jpg",
  "https://i.postimg.cc/87pCRdv4/3103516-df27b.jpg",
  "https://i.postimg.cc/kDzLC7wd/71-Gkv-VVhh-NL-AC-UF1000-1000-QL80.jpg",
  "https://i.postimg.cc/8FcJg8Tx/aca6552fcc7b5578b4b40806d7743978.jpg",
  "https://i.postimg.cc/XBLLDSjX/boho-living-room-with-reid-grey-sofa-1.jpg",
  "https://i.postimg.cc/7hkbCpDy/full-equipped-western-kitchen-modern-home.jpg",
  "https://i.postimg.cc/tCFy4pXr/bedroom-with-bed-lamp-wall.jpg",
  "https://i.postimg.cc/nskBKK0G/image-e975a720-271f-4c02-a925-9c51e6f4b956-1500x.webp",
  "https://i.postimg.cc/263rkW6v/f2e9c0f2efd6bb5c23638e97973f654f.jpg",
  "https://i.postimg.cc/m1x1LxKg/understand-your-decor-and-layout.webp",
  "https://i.postimg.cc/XZ0htxjS/tv-wall-modern-living-room-with-decoration-armchair-wooden-cement-wall.jpg",
  "https://i.postimg.cc/hXdycYMZ/lr9-1708501055-sj-Fij.avif",
  "https://i.postimg.cc/svwy5MrC/luxurious-interior-design-scaled.jpg",
  "https://i.postimg.cc/ZK62FXSM/kitchen-area-which-feature-island-counter-built-furniture.jpg",
  "https://i.postimg.cc/htf4GSxd/modern-kitchen-light-white-tones-with-black-marble-tiles.jpg",
];

export default function AllInteriorWorks() {
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
          <div className="services-title-2">All Interiors Work</div>
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
