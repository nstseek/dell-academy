import { Grid, Typography, useTheme } from "@mui/material";

export const ResumeRow = () => {
  const {
    palette: { grey },
  } = useTheme();

  const name = "Freezer";
  const weight = 0.1;
  const quantity = 3;

  return (
    <Grid
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`1px dashed ${grey["400"]}`}
      padding="1px"
      paddingLeft={2}
      width="100%"
    >
      <Typography variant="body1">
        <Typography display="inline" fontWeight="bold">
          {quantity}x
        </Typography>{" "}
        {name} ({weight} ton){" "}
        <sub style={{ color: grey[500] }}>
          ({quantity}x {weight}T)
        </sub>
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        {(quantity * weight).toFixed(2)} ton
      </Typography>
    </Grid>
  );
};
