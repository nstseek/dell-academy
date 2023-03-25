import { Grid } from "@mui/material";

export const Wrapper: React.FC<{ children: JSX.Element | null }> = ({
  children,
}) => (
  <Grid
    container
    direction="column"
    padding={2}
    margin={2}
    border="1px solid #ccc"
    borderRadius={2}
    alignItems="center"
    rowGap={2}
    flex={1}
  >
    {children}
  </Grid>
);
