import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CarouselContainer = styled(Box)`
  position: relative;
  max-width: 90%;
  margin: 0 auto; /* Center the carousel */
  overflow: hidden;
`;

const CarouselImage = styled(motion.img)`
  width: 100%;
  height: auto;
  display: block;
  border: 2px solid #ccc;
  border-radius: 8px;
  max-height: 500px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${({ position }) => (position === "left" ? "left: 10px;" : "right: 10px;")}
`;

const PrevIcon = styled(ArrowBackIcon)`
  color: white;
`;

const NextIcon = styled(ArrowForwardIcon)`
  color: white;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#2f77c9" : "#ccc")};
  cursor: pointer;
`;

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <CarouselContainer>
      <AnimatePresence>
      <CarouselImage
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <NavButton onClick={handlePrev} position="left">
        <PrevIcon />
      </NavButton>
      <NavButton onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)} position="right">
        <NextIcon />
      </NavButton>
      <DotsContainer>
        {images.map((image, index) => (
          <Dot
            key={index}
            active={index === currentImageIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
