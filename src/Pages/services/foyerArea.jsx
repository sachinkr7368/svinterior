import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/fRG58Q49/23.webp",
  "https://i.postimg.cc/V61gc9ks/5767898-480x480.webp",
  "https://i.postimg.cc/kMTckb39/contemporary-foyer-area-1.jpg",
  "https://i.postimg.cc/Bv55N8cr/entryway-design-tips-to-turn-into-a-hobby-nook.jpg",
  "https://i.postimg.cc/Hnv95f4j/f15-1702448059-6-NDP5.avif",
  "https://i.postimg.cc/7hZN5xzp/fo-11-1707221355-T6-ZAM.avif",
  "https://i.postimg.cc/vBzz814r/fo-2-1704975872-9-U5-Vl.avif",
  "https://i.postimg.cc/gkrDd2mh/fo18-1702448063-Rx-KVm.avif",
  "https://i.postimg.cc/g2ZHXtwk/foyer-area-design-3.jpg",
  "https://i.postimg.cc/j5ZH0G1v/Foyer-Area-Design-Screen-Separators.jpg",
  "https://i.postimg.cc/NMg6ngd5/foyer-design-entryway-ideas-for-a-stunning-and-memorable-foyer-indian-house-foyer-design-good-foyer.webp",
  "https://i.postimg.cc/sfHYnC7g/foyer-design-the-best-entryway-ideas-foyer-design-and-decorating-tips-cheap-and-best-interior-in-ele.webp",
  "https://i.postimg.cc/C5RqydkL/foyer-feature.png",
  "https://i.postimg.cc/C1Pq6bZQ/foyer3.jpg",
  "https://i.postimg.cc/mkKFTRy3/image.jpg",
  "https://i.postimg.cc/yNCXFh9h/images.jpg",
  "https://i.postimg.cc/Fs2j4bPt/lk-in-fy-0109-1646659767-FYymg.avif",
  "https://i.postimg.cc/y8c0YJ5D/modern-foyer-design-ideas-for-your-home.jpg",
  "https://i.postimg.cc/90kyzyC7/Zen-main-01.jpg",
];
export default function FoyerArea() {
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
          <div className="services-title-2">Foyer Area</div>
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
