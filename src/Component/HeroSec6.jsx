import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import starimg from "../Assets/star2.png";
import chartimg from "../Assets/Chart.png";
import secimg from "../Assets/secimg.png";

const Data = [
  {
    name: "TEAM & ADVISOR",
    num: "15,000,000,000",
  },
  {
    name: "Reserve Fund",
    num: "15,000,000,000",
  },
  {
    name: "Presale Token",
    num: "15,000,000,000",
  },
  {
    name: "ICO Token Sales",
    num: "15,000,000,000",
  },
  {
    name: "Presale Token",
    num: "15,000,000,000",
  },
];

const HeroSec6 = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${starimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pb: 10,
      }}
    >
      <Container>
        <Box
          sx={{
            px: 5,
            py: 3,
            textAlign: "center",
            pb: 8,
          }}
        >
          <Box
            sx={{
              p: 3,
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { md: "10%", sm: "15%", xs: "12%" } }}>
              <img src={secimg} style={{ width: "100%" }} alt="" />
            </Box>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: "Zen Dots",
                fontWeight: 400,
                fontSize: { md: "36px", sm: "27", xs: "18" },
                zIndex: 2,

                ml: { md: -7, sm: -5, xs: -2 },
              }}
            >
              Token Allocation
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#D9D9D9",
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: { md: "18px", sm: "16px", xs: "14px" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam
            est, elit venenatis nulla.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item md={6} sm={12} xs={12}>
            <Box sx={{ p: 3 }}>
              <img src={chartimg} style={{ width: "100%" }} alt="chartimg" />
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Grid container spacing={4}>
              {Data.map(({ name, num }, i) => (
                <Grid key={i} item md={12} sm={12} xs={12}>
                  <Box
                    sx={{
                      borderBottom:
                        i === 0
                          ? "4px solid #5BF8FF"
                          : i === 1
                          ? "4px solid #0B649E"
                          : i === 2
                          ? "4px solid #074B9E"
                          : i === 3
                          ? "4px solid #312195"
                          : "4px solid #00B5F5",
                      pb: 0.6,
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                        background: "rgba(212, 114, 146, 0.2)",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontFamily: "Zen Dots",
                          fontWeight: 300,
                          fontSize: "14px",
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontFamily: "Inter",
                          fontWeight: 300,
                          fontSize: "14px",
                        }}
                      >
                        {num}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSec6;
