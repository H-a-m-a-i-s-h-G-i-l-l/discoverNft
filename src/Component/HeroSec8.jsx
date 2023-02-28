import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import secendfram from "../Assets/secendfram.png";
import starimg from "../Assets/star2.png";

let Data = [
  {
    id: 1,
    name: "How can I track my order?",
    detail:
      "We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
  {
    id: 2,
    name: "What is Shopi. return/exchange policy?",
    detail:
      "We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
  {
    id: 3,
    name: "How can I track my order?",
    detail:
      "We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
  {
    id: 4,
    name: "How can I track my order?",
    detail:
      "We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them.",
  },
];

const HeroSec8 = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChang = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${starimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        pt: 7,
        mb: 10,
      }}
    >
      <Container>
        <Box sx={{ width: "100%", textAlign: "left", mb: 5, }}>
          <Typography
            sx={{
              mt: 2,
              color: "#ffffff",
              fontFamily: "Zen Dots",
              fontWeight: 400,
              fontSize: { md: "30px", sm: "25px", xs: "18px" },
            }}
          >
            Have any Question?
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

        <Box
          sx={{
            maxWidth: { xs: 300, sm: 600 },
            // width: "100%",
            borderBottom: "1px solid rgba(255, 255, 255, 1)",
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              value="one"
              label="General"
              sx={{
                color: "#FFF",
                fontFamily: "Zen Dots",
                fontWeight: 400,
                fontSize: "13px",
              }}
            />
            <Tab
              value="two"
              label="Pre ICO & ICO"
              sx={{
                color: "#FFF",
                fontFamily: "Zen Dots",
                fontWeight: 400,
                fontSize: "13px",
              }}
            />
            <Tab
              value="three"
              label="Token"
              sx={{
                color: "#FFF",
                fontFamily: "Zen Dots",
                fontWeight: 400,
                fontSize: "13px",
              }}
            />
            <Tab
              value="four"
              label="Client"
              sx={{
                color: "#FFF",
                fontFamily: "Zen Dots",
                fontWeight: 400,
                fontSize: "13px",
              }}
            />
            <Tab
              value="five"
              label="Legal"
              sx={{
                color: "#FFF",
                fontFamily: "Zen Dots",
                fontWeight: 400,
                fontSize: "13px",
              }}
            />
          </Tabs>
        </Box>

        <Grid container spacing={2}>
          <Grid item>
            <Box
              sx={{
                mt: 5,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
              gap={2}
            >
              {Data.map((a, i) => (
                <Accordion
                  key={i}
                  sx={{
                    boxShadow: "0px 0px 28px 0px #00000040",
                    px: 2,
                    background: "rgba(229, 229, 229, 0.2)",
                    backdropFilter: "blur(27.5px)",
                  }}
                  expanded={expanded === a.id}
                  onChange={handleChang(a.id)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "18px",
                        color: "#fff",
                        fontFamily: "Zen Dots",
                      }}
                    >
                      {a.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        fontFamily: "Inter",

                        fontSize: "14px",

                        color: "#fff",
                      }}
                    >
                      {a.detail}
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            backgroundImage: `url(${secendfram})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            // width: "100%",
            mt: 10,
            px: { md: 7, sm: 5, xs: 2 },
            py: 5,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "Zen Dots",
              fontSize: { md: "30px", sm: "25px", xs: "17px" },
              color: "#FFFFFF",
            }}
          >
            Join our Community
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "Inter",
              fontSize: { md: "17px", sm: "15px", xs: "14px" },
              color: "#A09FAF",
              mt: 2,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sed
            pulvinar nisl amet, viverra nulla ut. Aliquet nunc justo, bibendum
            nisl varius fringilla odio eu. Ut et, nullam tristique at ultrices.
            Viverra eget ultrices risus risus massa adipiscing adipiscing.
            Integer tempus aliquam vitae urna, ipsum mattis hendrerit quam.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 5,
              background:
                "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
              fontFamily: "Zen Dots",
              fontWeight: 400,
              fontSize: "14px",
              px: 4,
              borderRadius: 2,
            }}
          >
            JOIN COMMUNITY
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSec8;
