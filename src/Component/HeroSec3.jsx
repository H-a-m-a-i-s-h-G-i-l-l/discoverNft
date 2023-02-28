import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import backgroundStar from "../Assets/star2.png";
import halfimg from "../Assets/HALFSHAPE 1.png";
import HeroSec4 from "./HeroSec4";

let Data = [
  {
    id: 1,
    num: "01",
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,

    num: "02",
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,

    num: "03",
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,

    num: "04",
    name: "Institutional Investors",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const HeroSec3 = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundStar})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        mt: 10,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item md={5} sm={12} xs={12}>
            <Box
              sx={{
                px: 2,
                mt: 7,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 2,
                textAlign: "center",
              }}
            >
              <img src={halfimg} alt="halfimg" />
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Zen Dots",
                  fontWeight: 400,
                  fontSize: { md: "31px", sm: "20px", xs: "17px" },
                }}
              >
                WHAT IS Meta?
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                Approving Meta is a collection of 9,999 adorable corgis living
                on the Ethereum blockchain
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontSize: "11.52px",
                  fontWeight: 400,
                  color: "#fff",
                  fontFamily: "Zen Dots",
                  borderRadius: 7,
                  background:
                    "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                  px: { md: 4, sm: 2 },
                }}
              >
                BUY TOKEN NOW
              </Button>
            </Box>
          </Grid>

          <Grid item md={7} sm={12} xs={12}>
            <Grid container spacing={2}>
              {Data.map(({ num, name, detail }, i) => (
                <Grid item key={i} md={6} sm={6} xs={12}>
                  <Box sx={{ px: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "Zen Dots",
                        fontWeight: 400,
                        fontSize: { md: "31px", sm: "20px", xs: "17px" },
                        background:
                          "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        // color: "rgba(91, 248, 255, 1)",
                      }}
                    >
                      {num}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Zen Dots",
                        fontWeight: 400,
                        fontSize: "16px",
                      }}
                    >
                      {name}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#EAE5E5",
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
          </Grid>
        </Grid>
      </Container>
      <HeroSec4 />
    </Box>
  );
};

export default HeroSec3;
