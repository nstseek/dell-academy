import React from "react";
import { Grid } from "@mui/material";

export const ResumeRow = ({ children }: { children: JSX.Element[] | null }) => (
  <Grid
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    borderBottom="1px dashed #ccc"
    padding="1px"
  >
    {children}
  </Grid>
);
