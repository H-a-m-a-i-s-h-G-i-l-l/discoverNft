import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import pulsark from "./Assets/pulsrback.png";
import pulsarkimg from "./Assets/pulsarxfram.png";
import pulsarkicon from "./Assets/purlaxicon.png";
import arrowdown from "./Assets/arrowdown.png";
import LinearProgress from "@mui/material/LinearProgress";
import Pulsarex2 from "./Pulsarex2";
import Navbar from "./Navbar";

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

const Pulsarex = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${pulsark})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pb: 15,
      }}
    >
      <Navbar />
      <Container>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 3,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
            gap={1}
          >
            <img src={logopoly} alt="logo" />
            <Typography
              component="h4"
              sx={{
                fontFamily: "Inter",
                fontWeight: 800,
                fontSize: "16px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Logo Here
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#fff",
              fontFamily: "Inter",
              borderRadius: 3,
              background:
                "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
              px: { md: 3, sm: 3 },
              py: { md: 2, sm: 1 },
            }}
          >
            Connect Wallet
          </Button>
        </Box> */}

        <Box sx={{ pt: 8, textAlign: "center" }}>
          <Typography
            component="h4"
            sx={{
              fontFamily: "Zen Dots",
              fontWeight: 400,
              fontSize: { md: "36px", sm: "28px", xs: "18px" },
              color: "#fff",
              cursor: "pointer",
            }}
          >
            PULSAREX Swaping
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                backgroundImage: `url(${pulsarkimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",
                px: 4,
                py: 2,
                mt: 5,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  background: "#044474",
                  border: "8px solid #3DA1A9",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  alignItems: "center",

                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ px: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: 400,
                        fontSize: { md: "25px", sm: "18px", xs: "16px" },
                        color: "#fff",
                      }}
                    >
                      From
                    </Typography>
                    <TextField
                      InputProps={{ disableUnderline: true }}
                      id="outlined-basic"
                      variant="standard"
                      placeholder="0.00"
                      type="email"
                      sx={{
                        borderRadius: 10,
                        transition: "0.2s",
                        input: {
                          color: "#fff",
                          fontFamily: "Roboto",
                          fontWeight: 400,
                          fontSize: "35.04px",
                        },
                      }}
                    />
                  </Box>
                  <img src={pulsarkicon} alt="" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderTopRightRadius: 30,
                      borderBottomRightRadius: 30,

                      background: "#3DA1A9",
                      px: { md: 10, sm: 10, xs: 6 },
                      py: 3,
                    }}
                  ></Box>
                  <Box>
                    <img src={arrowdown} alt="" />
                  </Box>
                  <Box
                    sx={{
                      borderTopLeftRadius: 30,
                      borderBottomLeftRadius: 30,

                      background: "#3DA1A9",

                      px: { md: 10, sm: 10, xs: 6 },

                      py: 3,
                    }}
                  ></Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    background: "#044474",
                  }}
                >
                  <Box sx={{ px: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: 400,
                        fontSize: { md: "25px", sm: "18px", xs: "16px" },
                        color: "#fff",
                      }}
                    >
                      To
                    </Typography>
                    <TextField
                      InputProps={{ disableUnderline: true }}
                      id="outlined-basic"
                      variant="standard"
                      placeholder="0.00"
                      type="email"
                      sx={{
                        borderRadius: 10,
                        transition: "0.2s",
                        input: {
                          color: "#fff",
                          fontFamily: "Roboto",
                          fontWeight: 400,
                          fontSize: "35.04px",
                        },
                      }}
                    />
                  </Box>
                  <img src={pulsarkicon} alt="" />
                </Box>
              </Box>
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                  fontFamily: "Zen Dots",
                  fontWeight: 400,
                  fontSize: { md: "24px", sm: "18px", xs: "16px" },
                  px: { md: 5, sm: 3, xs: 2 },
                  borderRadius: 5,
                  color: "#181840",
                  mt: 2,
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                backgroundImage: `url(${pulsarkimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",
                p: 3,
                mt: 5,
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(66, 37, 217, 0.1) 0%, rgba(87, 212, 230, 0.1) 100%)",
                  backdropFilter: "blur(50px)",
                  borderRadius: 5,

                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    pt: 2,
                    fontFamily: "Zen Dots",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Token sale End In!
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {Data2.map(({ num, day }, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          border: "2px solid white",
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
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: 700,
                          fontSize: "12px",
                          color: "#FFFFFF",
                          mt: 2,
                        }}
                      >
                        {day}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{
                    borderWidth: 2,
                    color: "rgba(91, 248, 255, 0.41)",
                    mt: 2,
                  }}
                  variant="middle"
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "15px",
                    }}
                  >
                    Progress
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "15px",
                    }}
                  >
                    0%
                  </Typography>
                </Box>
                <Box sx={{ px: 3 }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ height: "10px", borderRadius: 4, color: "red" }}
                    value={50}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "15px",
                    }}
                  >
                    0
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "15px",
                    }}
                  >
                    300
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Pulsarex2 />
    </Box>
  );
};

export default Pulsarex;
