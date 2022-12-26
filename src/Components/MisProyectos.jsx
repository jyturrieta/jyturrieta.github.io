import { Typography, Box } from "@mui/material";
import React from "react";

export default function MisProyectos() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin:"4rem" }}>
      <Box sx={{ borderBottom: "4px solid #64644D" }}>
        <Typography variant="h4" color="secondary">
          MIS PROYECTOS
        </Typography>
      </Box>
    </Box>
  );
}
