import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import featurepric from "../Assets/featurepric.png";
import featureface from "../Assets/featureface.png";
import faturespider from "../Assets/faturespider.png";
import featureoqtps from "../Assets/featureoqtps.png";
import featurebird from "../Assets/featurebird.png";
import featurebaby from "../Assets/featurebaby.png";

import nftglassimg from "../Assets/nftglassimg.png";
import polygon2 from "../Assets/Polygon 2.png";

let Data = [
  {
    img: featurepric,
    name: "Buy and sell items easily",
    detail: "- As soon as our artists finish their magnum opus, ",
    subdetail: "- The Alpha Kongs Club opens its gates to an exclusive guest",
  },
  {
    img: featureface,
    name: "Buy and sell items easily",
    detail: "- As soon as our artists finish their magnum opus, ",
    subdetail: "- The Alpha Kongs Club opens its gates to an exclusive guest",
  },
  {
    img: faturespider,
    name: "Chase limited edition ICOLand",
    detail: "- As soon as our artists finish their magnum opus, ",
    subdetail: "- The Alpha Kongs Club opens its gates to an exclusive guest",
  },
  {
    img: featureoqtps,
    name: "Buy and sell items easily",
    detail: "- As soon as our artists finish their magnum opus, ",
    subdetail: "- The Alpha Kongs Club opens its gates to an exclusive guest",
  },
  {
    img: featurebird,
    name: "Buy and sell items easily",
    detail: "- As soon as our artists finish their magnum opus, ",
    subdetail: "- The Alpha Kongs Club opens its gates to an exclusive guest",
  },
  {
    img: featurebaby,
    name: "Buy and sell items easily",
    detail: "- As soon as our artists finish their magnum opus, ",
    subdetail: "- The Alpha Kongs Club opens its gates to an exclusive guest",
  },
];

const HeroSec4 = () => {
  return (
    <Box sx={{ mt: 10, pb: 15 }}>
      <Container>
        <Box
          sx={{
            textAlign: { xs: "center", sm: "left", md: "left" },
            mb: 3,
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontFamily: "Zen Dots",
              fontWeight: 400,
              fontSize: { md: "36px", sm: "27px", xs: "17px" },
            }}
          >
            FEATURES & APPLICATIONS
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item md={6} sm={12} xs={12}>
            <Grid container spacing={3}>
              {Data.map(({ img, name, detail, subdetail }, i) => (
                <Grid key={i} item md={6} sm={6} xs={12}>
                  <Box
                    sx={{
                      background: "rgba(91, 248, 255, 0.1)",

                      boxShadow: "#0000000D",
                      borderRadius: 4,

                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                      }}
                    >
                      <img src={img} alt="" />
                      <Typography
                        sx={{
                          color: "#fff",
                          fontFamily: "Inter",
                          fontWeight: 600,
                          fontSize: "18px",
                          textTransform: "uppercase",
                        }}
                      >
                        {name}
                      </Typography>
                    </Box>
                    <Box sx={{ p: 3, textAlign: "center" }}>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "14px",
                        }}
                      >
                        {detail}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#fff",
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "14px",
                        }}
                      >
                        {subdetail}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src={nftglassimg}
                style={{ width: "90%" }}
                alt="nftglassimg"
              />
              <Box
                sx={{
                  display: {
                    md: "flex",
                    sm: "none",
                    xs: "none",
                    position: "absolute",
                    right: -80,
                    bottom: 60,
                    px: 5,
                  },
                }}
              >
                <img
                  src={polygon2}
                  style={{
                    width: "40%",
                  }}
                  alt="nftimg"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSec4;
