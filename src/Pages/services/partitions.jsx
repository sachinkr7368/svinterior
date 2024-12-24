import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollToTop from "../../Components/scrollToTop/scrollToTop";
const Links = [
  "https://i.postimg.cc/z3qP1ps8/1677925216-6789627.jpg",
  "https://i.postimg.cc/c6575mZD/1d08f18df8a70c21283285b9be94e4ea.jpg",
  "https://i.postimg.cc/MnhfyP7B/2-13.jpg",
  "https://i.postimg.cc/LnwThVbq/352fd55f5aacdcc647cc65b7b2cf1b76.jpg",
  "https://i.postimg.cc/Hcbx4TYD/4-12.jpg",
  "https://i.postimg.cc/BLm535Fn/a8cac56378d7cec478e6ee2be77cba64.jpg",
  "https://i.postimg.cc/tsFhJG6f/ce402ec3e23b0ddf5961d406be62b11c.jpg",
  "https://i.postimg.cc/sB996CDS/eda9ee7e5f6fad31e82723da0025382e.jpg",
  "https://i.postimg.cc/gXm4mkBN/getting-creative-with-dining-hall-partitions.jpg",
  "https://i.postimg.cc/dkg1GLP9/image4.png",
  "https://i.postimg.cc/bsD0Xtwq/images.jpg",
  "https://i.postimg.cc/MXGbD4kM/images-1.jpg",
  "https://i.postimg.cc/nskBKK0G/image-e975a720-271f-4c02-a925-9c51e6f4b956-1500x.webp",
  "https://i.postimg.cc/qgYnGvXS/laser-cut-metal-partition-design-pooja-room.jpg",
  "https://i.postimg.cc/N9CXSshy/living-hall-partition-500x500.jpg",
  "https://i.postimg.cc/ZCdNszwR/partition.jpg",
  "https://i.postimg.cc/Kk3ccxk3/product-jpeg.jpg",
  "https://i.postimg.cc/0MymV64R/product-jpeg-500x500.webp",
  "https://i.postimg.cc/NK8HY7qv/window-partition-design-pooja-room.jpg",
  "https://i.postimg.cc/wtGTd7vd/wooden-partition.jpg",
];

export default function Partitions() {
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
          <div className="services-title-2">Partitions</div>
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
