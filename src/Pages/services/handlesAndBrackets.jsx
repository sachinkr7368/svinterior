import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/1gKZRbXr/31-SJK-0nja-L-AC-UF894-1000-QL80.jpg",
  "https://i.postimg.cc/KKxdWQfk/412-LRo-Va-FOL-AC-UF1000-1000-QL80.jpg",
  "https://i.postimg.cc/S2KHSswm/71fe-HOp-Wn-HL-AC-UF1000-1000-QL80.jpg",
  "https://i.postimg.cc/kDzLC7wd/71-Gkv-VVhh-NL-AC-UF1000-1000-QL80.jpg",
  "https://i.postimg.cc/Z0CXXW8c/81-CPZ8l-W1v-L-AC-UF1000-1000-QL80.jpg",
  "https://i.postimg.cc/qzCV6NgR/ATBRBR4-51.jpg",
  "https://i.postimg.cc/QH7wxvnK/CAT-JAGUAR-SUPPORT.webp",
  "https://i.postimg.cc/G9t1r7Cv/collection-door-handles-195186-777.avif",
  "https://i.postimg.cc/LJKdtmZV/components-of-a-door-handle.webp",
  "https://i.postimg.cc/DSq95Rr3/decking-handrail-brackets-00-301-2-64-600.avif",
  "https://i.postimg.cc/YGyZh7HY/door-handle-1477374142-p-2501720-480069.gif",
  "https://i.postimg.cc/gwsfbRtM/FERIO-1-37-616x616-jpg.webp",
  "https://i.postimg.cc/y3g5RG15/FERIO-2-25-616x616-jpg.webp",
  "https://i.postimg.cc/bZjMGLKC/FHV2-BNANGLE1.webp",
  "https://i.postimg.cc/XGXDMPCJ/il-fullxfull-4182525677-rk3a.webp",
  "https://i.postimg.cc/xcPGRRXF/IMG-2108.png",
  "https://i.postimg.cc/Xr82rWKq/lapo-cool-door-handles-for-main-door-main-door-handle-door-hardware-8-inches-rose-gold-finish-produc.jpg",
  "https://i.postimg.cc/6TkbSY5W/matte-cool-md-12-m-lapo-original-imagc5js58qhaqzx.webp",
  "https://i.postimg.cc/QBfnyDVw/matte-dh1-metzo-original-imaggqz8rbhzzcbw.webp",
  "https://i.postimg.cc/z3bP09N2/matte-s-02-antique-24-inch-lapo-original-imagfkzgyruhzums.webp",
  "https://i.postimg.cc/zy5tDvg4/s-l1200.webp",
  "https://i.postimg.cc/Y4CdgP83/s-l1200-1.webp",
  "https://i.postimg.cc/2LZcyBTN/s-l400.jpg",
];

export default function HandlesAndBrackets() {
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
          <div className="services-title-2">Handles & Brackets</div>
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
