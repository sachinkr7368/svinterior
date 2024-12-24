import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/sXnxKyBP/20349afa75d33f2edea507c7be00ae25-1.jpg",
  "https://i.postimg.cc/CKszBbSQ/21bb1c5d75ddecec625f18d5148d9d9a.jpg",
  "https://i.postimg.cc/9MXzGzfF/297af3505b354215bb8fefe51d462d1a.jpg",
  "https://i.postimg.cc/D092Yz7G/29b39a10e03c63f5438902d7fd7ebd0b.jpg",
  "https://i.postimg.cc/WbdFWDwd/2da8b6ca04f494e1e834ec53022b7b3f-2.jpg",
  "https://i.postimg.cc/QxKCg2j5/33A1710.jpg",
  "https://i.postimg.cc/wjhBZDyj/46ddfb3061bdfb4f716b5cb0a5d3ef83.jpg",
  "https://i.postimg.cc/Pqy5rhMG/71-2d6e40ef-c318-4fa0-8082-57a1dcefced2-1-1.webp",
  "https://i.postimg.cc/brWJcT9s/837ddec0bff82e0a8f27e8cce6f3adb5.jpg",
  "https://i.postimg.cc/RVtCJwTL/BLR-Mr-Mansukhvinder-07.jpg",
  "https://i.postimg.cc/pLY2qx49/BLR-Mrs-SHVETA-33.jpg",
  "https://i.postimg.cc/mgxDmmrn/ca3f966c6c1c152a6826392c16523563.jpg",
  "https://i.postimg.cc/FzdrZSXm/da69d07d381437daff3e7f4e86710a9a.jpg",
  "https://i.postimg.cc/263rkW6v/f2e9c0f2efd6bb5c23638e97973f654f.jpg",
  "https://i.postimg.cc/q7JpFSH1/f90f3403302ce6d136977a026d518f50.jpg",
  "https://i.postimg.cc/Y25GPrn8/Image-9.jpg",
  "https://i.postimg.cc/9MSVrfRk/LL-386.jpg",
  "https://i.postimg.cc/t4y1XrHx/NOI-Parul-24.jpg",
  "https://i.postimg.cc/J4jDVfS8/NS-22.jpg",
  "https://i.postimg.cc/wxyRFyV7/TIV-81.jpg",
  "https://i.postimg.cc/GpXbnKcd/whatsapp-image-2022-05-18-at-4-22-51-pm-1-1000x1000-2.webp",
];

export default function PoojaUnits() {
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
          <div className="services-title-2">Pooja Units</div>
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
