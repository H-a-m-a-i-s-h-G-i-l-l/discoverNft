import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import halfShap2 from "../Assets/HALFSHAPE 2.png";
import usecaseimg1 from "../Assets/usecaseimg.png";
import usecaseimg2 from "../Assets/usecaseimg.png";
import usecaseimg3 from "../Assets/usecaseimg.png";
import usecaseimg4 from "../Assets/usecaseimg.png";
import usecaseimg5 from "../Assets/usecaseimg.png";
import usecaseimg6 from "../Assets/usecaseimg.png";
import usecaseimg7 from "../Assets/usecaseimg.png";
import usecaseimg8 from "../Assets/usecaseimg.png";
import startimg from "../Assets/STARS1.png";

const Data = [
  {
    id: 1,
    img: usecaseimg1,
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,

    img: usecaseimg2,
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,

    img: usecaseimg3,
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,

    img: usecaseimg4,
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,

    img: usecaseimg5,
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6,

    img: usecaseimg6,
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 7,

    img: usecaseimg7,
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 8,

    img: usecaseimg8,
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const HeroSec5 = () => {
  return (
    <>
      <Box sx={{ mb: -40, display: "flex", justifyContent: "center" }}>
        <Box sx={{}}>
          <img src={halfShap2} alt="halfShapeimg" />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${startimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          pt: 5,
          alignItems: "center",
          background:
            "linear-gradient(94.36deg, rgba(7, 75, 158, 0.55) 1.54%, rgba(91, 248, 255, 0.55) 92.86%)",
        }}
      >
        <Container>
          <Box>
            <Typography
              sx={{
                color: "#ffffff",
                fontFamily: "Zen Dots",
                fontWeight: 400,
                fontSize: { md: "36px", sm: "27px", xs: "17px" },
                textAlign: "center",
                mb: 10,
                zIndex: 2,
              }}
            >
              use cases
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {Data.map(({ img, name, detail }, i) => (
              <Grid key={i} item md={3} sm={6} xs={12}>
                <Box sx={{ mb: 5, p: 2 }}>
                  <img src={img} alt="usecaseimg" />
                  <Typography
                    sx={{
                      mt: 2,

                      color: "#ffffff",
                      fontFamily: "Zen Dots",
                      fontWeight: 400,
                      fontSize: "16px",
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 2,
                      color: "#ffffff",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    {detail}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSec5;
