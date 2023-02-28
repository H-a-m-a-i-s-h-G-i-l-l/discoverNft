import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import backgroundimage from "../Assets/backgroundImage.png";
import secimg from "../Assets/secimg.png";
import sideimg from "../Assets/secimg (3).png";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import vector1 from "../Assets/Vector (1).png";
import vector2 from "../Assets/Vector (2).png";
import vector3 from "../Assets/Vector (3).png";
import HeroSec2 from "./HeroSec2";
import HeroSec3 from "./HeroSec3";
import HeroSec5 from "./HeroSec5";
import HeroSec6 from "./HeroSec6";
import HeroSec7 from "./HeroSec7";
import HeroSec8 from "./HeroSec8";

let Data1 = [
  {
    img: vector1,
    name: "+128K",
    detail: "Current Holders",
  },
  {
    img: vector2,
    name: "+2 mILLION",
    detail: "cryptoItem",
  },
  {
    img: vector3,
    name: "+3.000 USD",
    detail: "Total Volume",
  },
];

let Data2 = [
  {
    num: 12,
    day: "DAYS",
  },
  {
    num: "07",
    day: "HOURS",
  },
  {
    num: 25,
    day: "MINUTES",
  },
  {
    num: "04",
    day: "SECONDS",
  },
];

const HeroSec = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "Febrary,17,2023";

  const gettime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => setDays(deadline), 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          pb: 20,
        }}
      >
        <Navbar />
        <Container>
          <Grid container spacing={3}>
            <Grid item md={7} sm={10} xs={12}>
              <Box
                sx={{
                  mt: 2,
                  px: { md: 7, xs: 2, sm: 4 },
                  py: { md: 8, xs: 2, sm: 4 },
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  backgroundImage: `url(${secimg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "28% 40%",
                  backgroundPosition: "left top",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Zen Dots",
                    fontWeight: 400,
                    fontSize: {
                      lg: "55px",
                      md: "45px",
                      sm: "35px",
                      xs: "25px",
                    },
                    lineHeight: 0.1,
                  }}
                >
                  Discover and
                  <p>
                    <Typography
                      sx={{
                        fontFamily: "Zen Dots",
                        fontWeight: 400,
                        fontSize: {
                          lg: "55px",
                          md: "45px",
                          sm: "35px",
                          xs: "25px",
                        },

                        lineHeight: 0.1,
                        WebkitTextStroke: "1px #fff",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Collect NFTs
                    </Typography>
                  </p>
                  at scale
                </Typography>
                <Typography
                  sx={{
                    mt: 7,
                    color: "#EAE5E5",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 5,
                    background:
                      "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                    fontFamily: "Exo 2",
                    fontWeight: 700,
                    fontSize: "15px",
                    px: 4,
                    borderRadius: 2,
                  }}
                >
                  BUY TOKEN
                </Button>
              </Box>
            </Grid>

            <Grid item md={5} sm={2} xs={12}>
              <Box
                sx={{
                  display: { md: "flex", sm: "none", xs: "none" },
                  justifyContent: "center",
                  p: 2,
                  position: "relative",
                }}
              >
                <img src={sideimg} style={{ width: "100%" }} alt="sideimg" />
              </Box>
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  // p: 3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {Data1.map(({ img, name, detail }, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: {
                        md: "flex-start",
                        sm: "flex-start",
                        xs: "center",
                      },
                      textAlign: { xs: "center", sm: "left", md: "left" },
                      // px: 3,
                      width: "100%",
                    }}
                  >
                    {<img key={i} src={img} alt="leftemoji" />}

                    <Box
                      sx={{
                        borderRight:
                          i !== 2 ? "1px solid rgba(91, 248, 255, 1)" : "none",
                        paddingRight: 2,
                        paddingLeft: { xs: 1, sm: 0, md: 0 },
                        postion: "relative",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontFamily: "Zen Dots",
                          fontWeight: 400,
                          fontSize: { md: "19px", sm: "17px", xs: "12px" },
                        }}
                      >
                        {name}
                      </Typography>

                      <Typography
                        sx={{
                          color: "white",
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: { md: "16px", sm: "15px", xs: "12px" },
                          opacity: "0.54",
                        }}
                      >
                        {detail}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <Box
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(66, 37, 217, 0.1) 0%, rgba(87, 212, 230, 0.1) 100%)",
                  backdropFilter: "blur(50px)",
                  borderRadius: 2,
                  px: { md: 5, sm: 3, xs: 2 },
                  py: 5,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",

                  textAlign: "center",
                  boxShadow: "rgb(255 255 255) 0px 2px 8px",
                  position: "absolute",
                  top: { md: 480, sm: 300, xs: 650 },
                  right: { md: 80, sm: 60, xs: 7 },
                  width: "300px",
                  height: "100px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Zen Dots",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#FFFFFF",
                    mb: 2,
                  }}
                >
                  Token sale End In!
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {Data2.map(({ num, day }, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          border: "2px solid #5BF8FF",
                          borderRadius: 4,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Russo One",
                            fontWeight: 400,
                            fontSize: "24px",
                            color: "#FFFFFF",
                          }}
                        >
                          {num}
                          {/* {i === 0
                            ? days < 4
                              ? "0" + days
                              : days
                            : i === 1
                            ? hours < 4
                              ? "0" + hours
                              : hours
                            : i === 2
                            ? minutes < 4
                              ? "0" + days
                              : days
                            : i === 3
                            ? seconds < 4
                              ? "0" + seconds
                              : seconds
                            : num} */}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: 700,
                          fontSize: "12px",
                          color: "#FFFFFF",
                          mt: 2,
                          opacity: " 0.5",
                        }}
                      >
                        {day}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <HeroSec2 />
      <HeroSec3 />
      <HeroSec5 />
      <HeroSec6 />
      <HeroSec7 />
      <HeroSec8 />
    </>
  );
};

export default HeroSec;
