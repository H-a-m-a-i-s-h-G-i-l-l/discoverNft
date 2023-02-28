import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import pulsark from "./Assets/pulsrback.png";
import pulsarkBackground from "./Assets/stackingdash.png";

import binanceparlsarex from "./Assets/binanceparlsarex.png";
import Navbar from "./Navbar";

const Data1 = [
  {
    name: "TOTAL VALUE STAKED",
    num: "$21,610,291",
  },
  {
    name: "PULS STACKED",
    num: "$11,610,291",
  },
  {
    name: "UNIQUE STAKERS",
    num: "10,291",
  },
  {
    name: "PULS-LP STAKED",
    num: "$1,610,291",
  },
  {
    name: "AVAERAGE APY",
    num: "41%",
  },
];

const Data2 = [
  {
    name: "Claimed Reward",
    num: "0",
  },
  {
    name: "Current Staked",
    num: "0",
  },
  {
    name: "Total Staked",
    num: "0",
  },
  {
    name: "Total UnStaked",
    num: "0",
  },
];

const Pulsarex4 = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${pulsark})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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

        <Box sx={{ pt: 4, textAlign: "center" }}>
          <Typography
            component="h4"
            sx={{
              fontFamily: "Zen Dots",
              fontWeight: 400,
              fontSize: { md: "36px", sm: "28px", xs: "18px" },
              color: "#fff",
            }}
          >
            PULSAREX staking Dashboard
          </Typography>
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
              fontFamily: "Zen Dots",
              fontWeight: 400,
              fontSize: { md: "25px", sm: "18px", xs: "16px" },
              px: { md: 5, sm: 3, xs: 2 },
              borderRadius: 7,
              color: "#fff",
              mt: 2,
            }}
          >
            Stake puls
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              px: 2,
              width: "300px",
              pb:3
            }}
          >
            <Typography
              sx={{
                fontFamily: "Josefin Sans",
                fontWeight: 400,
                fontSize: { md: "18px", sm: "16px", xs: "14px" },
                color: "#FFFFFF",
              }}
            >
              Powered by
            </Typography>
            <img src={binanceparlsarex} alt="binance" />
            <Typography
              sx={{
                fontFamily: "Josefin Sans",
                fontWeight: 400,
                fontSize: { md: "18px", sm: "16px", xs: "14px" },
                color: "#FFFFFF",
              }}
            >
              Binance
            </Typography>
          </Box>
        </Box>

        <Stack direction="row">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",

              gap: 2,
            }}
          >
            {Data1.map(({ name, num }, i) => (
              <Box
                key={i}
                sx={{
                  backgroundImage: `url(${pulsarkBackground})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center center",
                  px: 3,
                  py: 4,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "250px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: { md: "18px", sm: "16px", xs: "14px" },
                    color: "#FFFFFF",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Zen Dots",
                    fontWeight: 400,
                    fontSize: { md: "24px", sm: "20px", xs: "16px" },
                    color: "#FFFFFF",
                  }}
                >
                  {num}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "Zen Dots",
              fontWeight: 400,
              fontSize: { md: "36px", sm: "26px", xs: "18px" },
              color: "#FFFFFF",
              p: 4,
            }}
          >
            Your Statistics
          </Typography>
        </Box>

        <Stack direction="row">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              width: "100%",
              gap: 2,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${pulsarkBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",
                px: 8,
                py: 4,
                mt: 5,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                width: "350px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  color: "#FFFFFF",
                }}
              >
                JEDSTARS EARN
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Zen Dots",
                  fontWeight: 400,
                  fontSize: { md: "24px", sm: "20px", xs: "16px" },
                  color: "#FFFFFF",
                }}
              >
                0
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundImage: `url(${pulsarkBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",
                px: 8,
                py: 4,
                mt: 5,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                width: "350px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  color: "#FFFFFF",
                }}
              >
                Your CRDN Wallet Balance
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Zen Dots",
                  fontWeight: 400,
                  fontSize: { md: "24px", sm: "20px", xs: "16px" },
                  color: "#FFFFFF",
                }}
              >
                0
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",

              gap: 2,
              width: "100%",
            }}
          >
            {Data2.map(({ name, num }, i) => (
              <Box
                key={i}
                sx={{
                  backgroundImage: `url(${pulsarkBackground})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center center",
                  px: 3,
                  py: 4,
                  mt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "200px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: { md: "18px", sm: "16px", xs: "14px" },
                    color: "#FFFFFF",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Zen Dots",
                    fontWeight: 400,
                    fontSize: { md: "24px", sm: "20px", xs: "16px" },
                    color: "#FFFFFF",
                  }}
                >
                  {num}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Pulsarex4;
