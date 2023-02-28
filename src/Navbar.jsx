import React, { useState } from "react";
import logo from "./Assets/logo.png";
import {
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = [
  { heading: "About", url: "/" },
  { heading: "Features" },
  { heading: "Benefit" },
  { heading: "Roadmap" },
  { heading: "Team" },
  { heading: "Staking", url: "/staking" },
  { heading: "Presale", url: "/presale" },
  { heading: "Blog" },
  { heading: "FAQs" },
  { heading: "Contact" },
];

const Navbar = () => {
  let [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  console.log(theme);

  const isMatched = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* <Box> */}
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            py: 4,
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
            <img src={logo} alt="logo" />
          </Box>

          {isMatched ? (
            <>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }} gap={2}>
                  <img
                    src={logo}
                    style={{ width: "30px", height: "30px" }}
                    alt="Drawerlogo"
                  />
                </Box>

                <List>
                  {pages.map((page, i) => (
                    <ListItemButton key={i}>
                      <ListItemIcon>
                        <ListItemText
                          sx={{
                            width: 200,
                            textAlign: "center",
                            color: "#AD00FF",
                            padding: "1rem 1rem",
                            fontSize: 25,
                            fontWeight: "bold",
                            fontFamily: "Lato",
                          }}
                        >
                          {/* {page} */}
                          <Link to={page.url}>{page.heading}</Link>
                        </ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                  ))}
                </List>
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
                    px: 5,
                    py: 1.5,
                    marginX: "auto",
                  }}
                >
                  Whitepaper
                </Button>
              </Drawer>
              <IconButton
                sx={{ color: "white" }}
                edge="start"
                color="inherit"
                size="large"
                aria-label="logo"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {pages.map((page, i) => (
                  <Typography
                    key={i}
                    color="#000"
                    sx={{
                      cursor: "pointer",
                      fontWeight: 400,
                      fontSize: "12px",
                      fontFamily: "Inter",
                      alignItems: "center",
                      color: "#fff",
                    }}
                  >
                    {/* {page.heading} */}
                    <Link to={page.url}>{page.heading}</Link>
                  </Typography>
                ))}
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
                    // mr: 2,
                  }}
                >
                  Whitepaper
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Container>
      {/* </Box> */}
    </>
  );
};

export default Navbar;
