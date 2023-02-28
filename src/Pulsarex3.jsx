import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";
import pulsarkBackground from "./Assets/pulsarkBackground.png";
const Pulsarex3 = () => {
  return (
    <Box>
      <Container>
        <Box>
          <Typography
            sx={{
              fontFamily: "Zen Dots",
              fontWeight: 400,
              fontSize: { md: "36px", sm: "26px", xs: "20px" },
              color: "#fff",
              textAlign: "center",
            }}
          >
            PULSAREX Calculator
          </Typography>
          <Box
            sx={{
              backgroundImage: `url(${pulsarkBackground})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",

              p: 3,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: { md: "16px", sm: "15px", xs: "14px" },
                color: "#fff",
              }}
            >
              Calculate your PULSREX depending on the amount of staked tokens
              and your lock time.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                width: "500px",
                px: 3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { md: "16px", sm: "15px", xs: "14px" },
                  color: "#fff",
                }}
              >
                PULS
              </Typography>
              <TextField
                // label="Outlined"
                type="email"
                placeholder="5000"
                variant="outlined"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { md: "16px", sm: "15px", xs: "14px" },
                  color: "#fff",
                }}
              >
                +
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { md: "16px", sm: "15px", xs: "14px" },
                  color: "#fff",
                }}
              >
                Lock tokens for Days
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Pulsarex3;
