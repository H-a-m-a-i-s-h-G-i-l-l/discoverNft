import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import slide1 from "../Assets/slide1.png";
import slide2 from "../Assets/slide2.png";
import slide3 from "../Assets/slide3.png";
import slide4 from "../Assets/slide4.png";

let Data = [
  {
    id: 1,
    img: slide1,
  },
  {
    id: 2,
    img: slide2,
  },
  {
    id: 3,
    img: slide3,
  },
  {
    id: 4,
    img: slide4,
  },
];

const HeroSec2 = () => {
  return (
    <Box
      sx={{
        background: "#044474",
        mt: -15,
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          {Data.map(({ img }, i) => (
            <Grid
              key={i}
              item
              md={3}
              sm={6}
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: "50%",
                  p: 5,
                }}
              >
                <img src={img} style={{ width: "100%" }} alt="slideimages" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSec2;
