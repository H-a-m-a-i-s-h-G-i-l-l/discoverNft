import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import pulsarkimg from "./Assets/pulsarkBackground.png";

const Data1 = [
  {
    name: "Token Name",
    subname: "PULSE",
  },
  {
    name: "Symbol",
    subname: "Pulserex",
  },
  {
    name: "Decimal",
    subname: "0",
  },
  {
    name: "Suppply",
    subname: "0",
  },
];

const Data2 = [
  {
    name: "Max Contribution",
    num: "10",
  },
  {
    name: "Your Contribution",
    num: "0",
  },
  {
    name: "Claimable Token",
    num: "0",
  },
];
const Pulsarex2 = () => {
  return (
    <Box sx={{}}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                backgroundImage: `url(${pulsarkimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",

                mt: 5,
              }}
            >
              <Box
                sx={{
                  p: 5,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                {Data1.map(({ name, subname }, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",

                      borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
                      paddingBottom: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: { md: "20px", sm: "17px", xs: "14px" },
                        color: "#fff",
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: { md: "20px", sm: "17px", xs: "14px" },
                        color: "#fff",
                      }}
                    >
                      {subname}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                backgroundImage: `url(${pulsarkimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",

                mt: 5,
              }}
            >
              <Box
                sx={{
                  p: 5,
                  //   py: 6,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                {Data2.map(({ name, num }, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",

                      borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
                      paddingBottom: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: { md: "20px", sm: "17px", xs: "14px" },
                        color: "#fff",
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: { md: "20px", sm: "17px", xs: "14px" },
                        color: "#fff",
                      }}
                    >
                      {num}
                    </Typography>
                  </Box>
                ))}
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                    fontFamily: "Zen Dots",
                    fontWeight: 400,
                    // fontSize: "24px",
                    fontSize: { md: "24px", sm: "18px", xs: "16px" },

                    px: { md: 5, sm: 3, xs: 2 },
                    borderRadius: 5,
                    color: "#181840",
                    mt: 2,
                  }}
                >
                  Claim Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Pulsarex2;
