import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import fondo from "../assets/fondo.jpg";
import { IconButton } from "@mui/material";

export default function Bio() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(" + fondo + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "8rem",
          
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", margin: "1rem"}}>
          <Typography variant="h3" color="secondary">
            Joel Yturrieta
          </Typography>
          <Typography variant="h5" color="secondary">
            {" "}
            Fullstack developer
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            Soy un desarrollador fullstack con conocimientos en React, Node,
            Express, Sequelize, PostgreSQL, HTML, CSS, Javascript, Git, Github,
            Material UI, Bootstrap, entre otras tecnologías.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              marginTop: "1rem",
              justifyContent: "flex-start",
            }}
          >
            <Button
              color="secondary"
              variant="outlined"
              sx={{ marginRight: "1rem" }}
            >
              CONTACTAME
            </Button>
            <IconButton>
              <a
                href="https://github.com/jyturrieta"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon color="secondary" sx={{ marginRight: "1rem" }} />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://www.linkedin.com/in/jyturrieta/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon color="secondary" sx={{ marginRight: "1rem" }} />
              </a>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
