// import { Box, Container, Typography } from "@mui/material";
// import React from "react";
// import roadmapleft from "./Assets/roadmapleft.png";
// import roadmapcornor from "./Assets/roadmapcornor.png";
// import roadmapright from "./Assets/roadmapright.png";
// import roadmapcircle from "./Assets/roadmaplastcirc.png";

// const Roadmap = () => {
//   return (
//     <Box>
//       <Container>
//         <Box>
//           <Box sx={{ p: 3, mb: 5 }}>
//             <Typography
//               sx={{
//                 fontFamily: "Zen Dots",
//                 fontWeight: 400,
//                 fontSize: { md: "36px", sm: "27", xs: "17", color: "#FFFFFF" },
//               }}
//             >
//               Roadmap
//             </Typography>
//             <Typography
//               sx={{
//                 fontFamily: "Inter",
//                 fontWeight: 300,
//                 fontSize: {
//                   md: "18px",
//                   sm: "16px",
//                   xs: "14px",
//                   color: "#FFFFFF",
//                   opacity: "0.8",
//                 },
//               }}
//             >
//               The most technologically advanced species will not stop any time
//               soon...
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "row",
//               alignItems: "center",
//               maxWidth: "100%",
//               position: "relative",
//             }}
//           >
//             <img src={roadmapleft} alt="roadmapleft" />
//             <Box
//               sx={{
//                 width: { md: "600px", sm: "500px", xs: "150px" },
//                 background: "rgba(91, 248, 255, 0.2)",
//                 borderBottom: "4px solid rgba(91, 248, 255, 0.2)",
//                 pb: 2,
//                 px: 5,
//                 py: 1,
//                 position: "absolute",
//                 left: 90,
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontFamily: "Zen Dots",
//                   fontWeight: 400,
//                   fontSize: {
//                     md: "16px",
//                     sm: "15px",
//                     xs: "12px",
//                     color: "rgba(91, 248, 255, 1)",
//                   },
//                 }}
//               >
//                 Level 01
//                 <span style={{ color: "#fff" }}>- CyberKongz VX Launch</span>
//               </Typography>
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               background: "rgba(91, 248, 255, 0.1)",
//               backdropFilter: "blur(20.5px)",
//               mt: 3,
//               px: 10,
//               py: 2,
//               width: "800px",
//             }}
//           >
//             <Typography
//               sx={{
//                 fontFamily: "Inter",
//                 fontWeight: 200,
//                 fontSize: {
//                   md: "20px",
//                   sm: "17px",
//                   xs: "15px",
//                   color: "rgba(255, 255, 255, 0.8)",
//                 },
//               }}
//             >
//               The time for you to get your own CyberKongz VX as a custom
//               playable Metaverse Avatar has finally arrived. CyberKongz VX are
//               launched in partnership with The Sandbox and the integration as
//               playable avatars into The Sandbox game is now in development.
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Roadmap;

import { Box, Container, Typography } from "@mui/material";
import React from "react";
import roadmapleft from "./Assets/roadmapleft.png";
import roadmapcorner from "./Assets/roadmapcornor.png";

const Roadmap = () => {
  return (
    <Box>
      <Container>
        <Box sx={{ p: 5 }}>
          <Box sx={{}}>
            <Box sx={{ position: "relative", pl: 1.5 }}>
              <img
                src={roadmapleft}
                alt="mapfile1"
                style={{ position: "absolute", width: "100px", left: "-12px" }}
              />
              <Box
                sx={{
                  pt: 1,
                  pb: 5,
                  pl: 8,
                  borderLeft: "2px solid rgb(7, 75, 158)",
                  borderBottom: "2px solid rgb(7, 75, 158)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    maxWidth: "600px",
                    height: "40px",
                    alignItems: "center",
                    background: "#13465A",
                  }}
                >
                  <Typography
                    sx={{
                      pl: 5,
                      fontSize: { xs: "12px", md: "16px" },
                      color: "rgb(91, 248, 255)",
                      fontFamily: "Zen Dots",
                      fontWeight: "400",
                    }}
                  >
                    Level 01
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", md: "16px" },
                      color: "#ffffff",
                      fontFamily: "Zen Dots",
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    - CyberKongz VX Launch
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "4px",
                    mt: "2px",
                    background: "#13465A",
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "relative",
                    background: "#13465A",
                    p: { xs: 1, sm: 3, md: 5 },
                    mt: 4,
                    mr: 10,
                    width: "92%",
                  }}
                >
                  <img
                    src={roadmapcorner}
                    alt="roadmapBGTop"
                    style={{
                      width: "50px",
                      position: "absolute",
                      right: 0,
                      top: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "20px",
                      fontFamily: "Inter",
                      fontWeight: "400",
                    }}
                  >
                    The time for you to get your own CyberKongz VX as a custom
                    playable Metaverse Avatar has finally arrived. CyberKongz VX
                    are launched in partnership with The Sandbox and the
                    integration as playable avatars into The Sandbox game is now
                    in development.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Roadmap;
