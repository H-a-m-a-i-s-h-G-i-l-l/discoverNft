import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import twiter from "./Assets/twiter.png";
import facbook from "./Assets/facebook.png";
import telegram from "./Assets/telegram.png";
import youtube from "./Assets/youtube.png";
import tictok from "./Assets/tictoc.png";
import cordova from "./Assets/cordova.png";

const Data = [
  {
    id: 1,
    img: twiter,
  },
  {
    id: 2,
    img: facbook,
  },
  {
    id: 3,
    img: telegram,
  },
  {
    id: 4,
    img: youtube,
  },
  {
    id: 5,
    img: tictok,
  },
  {
    id: 6,
    img: cordova,
  },
];

const Footer = () => {
  return (
    <Box sx={{ background: "#002346" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            px: 3,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              mt: 5,
              fontWeight: 400,
              fontFamily: "Zen Dots",
              fontSize: { md: "30px", sm: "25px", xs: "17px" },
              color: "#FFFFFF",
            }}
          >
            Don't miss out, Stay updated
          </Typography>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              px: 3,
              width: { md: "50%", sm: "50%", xs: "100%" },

              alignItems: "center",
              mt: 2,
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter your email"
              type="email"
              // borderRadius="20%"
              sx={{
                transition: "0.2s",
                input: {
                  color: "#fff",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "14px",
                  width: "40%",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                fontFamily: "Zen Dots",
                fontWeight: 400,
                fontSize: "14px",
                px: 4,
                borderRadius: 5,
                position: "absolute",
                right: "0px",
                margin: "4px",
                border: "none",

                transition: "0.2s all",
              }}
            >
              SUBSCRIBE
            </Button>
          </Box>
          <Typography
            sx={{
              mt: 3,
              fontWeight: 400,
              fontFamily: "Inter",
              fontSize: "12px",
              color: "#F6F6F6",
            }}
          >
            Don’t hesitate to subscribe to latest news about ICo markets as well
            as crucial financial knowledge to become successful investors
            globally
          </Typography>
          <Box
            sx={{
              mt: 3,
              // p: 3,
              display: "flex",
              // justifyContent: "space-between",
            }}
            gap={3}
          >
            {Data.map(({ img }, i) => (
              <img key={i} src={img} alt="socialimgs" />
            ))}
          </Box>
        </Box>
      </Container>
      <Box sx={{ py: 3, paddingTop: 8 }}>
        <Box sx={{ borderTop: "1px solid #1A64CD" }}>
          <Typography
            sx={{
              mt: 3,
              pb: 3,
              fontWeight: 400,
              fontFamily: "Inter",
              fontSize: "12px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            © 2022. All rights reserved by Avitex
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
