import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import Carousel from "../Components/Carousel";
import config from '../config';


const AboutMe = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await await axios.get(`${config.apiBaseUrl}/aboutMe`);
        setImages(response.data[0].aboutMe); // Assuming your API response structure is { test: [...] }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5, textAlign: "center" }}>
      <motion.div>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            backgroundColor: "#2f77c9",
            backgroundImage:
              "linear-gradient(to right, #89d8e2 0%, #33c7ec 0%, #2f77c9 21%, #187591 52%, #186cda 90%, #187599 100%)",
            backgroundSize: "100%",
            fontSize: "2.5rem",
            paddingLeft: "35px",
            paddingRight: "35px",
            paddingBottom: "15px",
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozTextFillColor: "transparent",
          }}
        >
          About Me
        </Typography>
      </motion.div>

      <motion.div>
        <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
          <Typography
            variant="body1"
            component="p"
            sx={{ lineHeight: "1.6em" }}
          >
            🚶🏻‍♂️ My journey in Canada began as a nine year old immigrant from
            Japan, with the only knowledge of Canada being "the place with a
            giant dinosaur museum." In a way, this encapsulates who I am - an
            individual unafraid of taking risks to explore new possibilities.{" "}
            <br />
            <br />
            🎓 Currently studying in Bachelor of Science, Cognitive Systems
            under the Department of Computer Science at University of British
            Columbia. <br />
            <br />
            📌 Currently @ Dayforce (Ceridian) | Previously @ AWS 2023,
            Mastercard 2024 <br />
            <br />
            ⚽️ Current Hobbies: Climbing, Soccer, Skiing, EATING 🍱
          </Typography>
        </Paper>
      </motion.div>

      <Box sx={{ mt: 4 }}>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : images.length > 0 ? (
          <Carousel images={images} />
        ) : (
          <Typography>No images available</Typography>
        )}
      </Box>
    </Container>
  );
};

export default AboutMe;
