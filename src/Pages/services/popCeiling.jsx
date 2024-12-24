import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/nXf2dgzZ/084fd654300fbf70e1a1859caeb26c64.jpg",
  "https://i.postimg.cc/mhhmh7Jx/1-3.jpg",
  "https://i.postimg.cc/xNHHMjLm/1-PB-501-Ran-Ow-Y30-MBZ27-IOQ.jpg",
  "https://i.postimg.cc/ct87hBGr/201fb82f61abf0f8ca29911235c80909.jpg",
  "https://i.postimg.cc/mP4339Xg/299f2e05a8f63630182c817f01c64cd5.jpg",
  "https://i.postimg.cc/bG3RwvRN/2a381e396713dd9abc061b184fea1fb1.jpg",
  "https://i.postimg.cc/62PLC1Sk/false-ceiling-design-500x500.webp",
  "https://i.postimg.cc/cv7mPhg3/fb-img-1638436507535-500x500.webp",
  "https://i.postimg.cc/5jGnz6WX/images.jpg",
  "https://i.postimg.cc/bDr9Dj60/interior-and-exterior-designs-500x500.webp",
  "https://i.postimg.cc/mPSYmrJN/modern-pop-false-ceiling.jpg",
  "https://i.postimg.cc/Bt8CJ4P4/pop-ceiling-500x500.webp",
  "https://i.postimg.cc/p9XD4HtN/pop-design-for-ceiling-1.webp",
  "https://i.postimg.cc/gX18xLLd/POP-designs4.webp",
  "https://i.postimg.cc/xkxKS40X/pop-false-ceiling.jpg",
  "https://i.postimg.cc/QH1kWmqz/pop-false-ceiling-bedrooms-design8-500x500.webp",
  "https://i.postimg.cc/rKX5cWLN/product-jpeg-500x500.webp",
  "https://i.postimg.cc/LYJj43XN/product-jpeg-500x500-1.webp",
  "https://i.postimg.cc/8F0rYfHW/product-jpeg-500x500-2.jpg",
  "https://i.postimg.cc/JGNZhnrV/product-jpeg-500x500-3.webp",
  "https://i.postimg.cc/dhJdZY37/product-jpeg-500x500-4.webp",
  "https://i.postimg.cc/m1x1LxKg/understand-your-decor-and-layout.webp",
  "https://i.postimg.cc/5YQFW97r/whatsapp-image-2022-12-30-at-7-07-46-pm-1-500x500.webp",
];

export default function POPCeiling() {
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
          <div className="services-title-2">POP Ceiling</div>
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
