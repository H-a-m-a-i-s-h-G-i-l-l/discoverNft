import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import backgroundfram from "../Assets/Backgroundfram.png";
import backgroundStar from "../Assets/star2.png";
import insideimg from "../Assets/insideimg.png";
import imagefram from "../Assets/imageframe.png";

const Data = [
  {
    id: 1,
    name: "ONE PAPER",
  },
  {
    id: 2,
    name: "WHITE PAPER",
    img: insideimg,
  },
  {
    id: 3,
    name: "PRIVACY POLICY",
  },
  {
    id: 4,
    name: "TERM OF COIN SALES",
  },
];

const HeroSec7 = () => {
  return (
    <Box
      sx={{
        // mt: 10,
        pb: 5,
        backgroundImage: `url(${backgroundStar})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundImage: `url(${backgroundfram})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            p: 2,
            pb: 10,
          }}
        >
          <Box sx={{ p: 3, textAlign: "center", mb: 3 }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontFamily: "Zen Dots",
                fontWeight: 400,
                fontSize: { md: "35px", sm: "20px", xs: "16px" },
              }}
            >
              Document
            </Typography>
            <Typography
              sx={{
                mt: 2,
                color: "#ffffff",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: { md: "18px", sm: "16px", xs: "14px" },
              }}
            >
              Download the whitepaper and learn about ICO Token, the unique ICO
              Crypto approach and the team/advisors.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {Data.map(({ name, img }, i) => (
              <Grid key={i} item md={3} sm={6} xs={12}>
                <Box
                  sx={{
                    height: "100%",

                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${imagefram})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      px: 3,
                      py: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Zen Dots",
                        fontWeight: 400,
                        fontSize: { md: "18px", sm: "16px", xs: "14px" },
                        color: i === 1 ? "#5BF8FF" : "#fff",
                      }}
                    >
                      {name}
                    </Typography>
                    <img src={img} alt="" />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSec7;
