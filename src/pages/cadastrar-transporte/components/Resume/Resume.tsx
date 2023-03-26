import { Wrapper } from "@/common/components/Wrapper/Wrapper";
import { formatNumberToCurrency } from "@/utils/currency";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import { ResumeRow } from "./components/ResumeRow";

type Props = {
  onCalculate: () => void;
};

export const Resume: React.FC<Props> = ({ onCalculate }) => {
  const {
    palette: { grey },
  } = useTheme();

  const cidadeDestino = "Brasilia";
  const distancia = 3253;

  const caminhao = "Caminhão de pequeno porte";
  const caminhaoQuantity = 3;
  const caminhaoCapacity = 1;
  const singleCaminhaoKmPrice = 4.89;
  const singleCaminhaoPrice = singleCaminhaoKmPrice * distancia;
  const caminhaoPrice = singleCaminhaoPrice * caminhaoQuantity;

  return (
    <Wrapper>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`1px dashed ${grey[700]}`}
        padding="1px"
        width="100%"
      >
        <Typography>
          <Typography display="inline" fontWeight="bold">
            Para {cidadeDestino}
          </Typography>{" "}
          <sub style={{ color: grey[700] }}>({distancia}km)</sub>
        </Typography>
      </Grid>
      <ResumeRow />
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`1px dashed ${grey[700]}`}
        padding="1px"
        width="100%"
      >
        <Typography display="inline" fontWeight="bold">
          Total
        </Typography>
        <Typography display="inline" fontWeight="bold">
          {formatNumberToCurrency(caminhaoPrice)}
        </Typography>
      </Grid>
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
            {caminhaoQuantity}x
          </Typography>{" "}
          {caminhao} ({caminhaoCapacity} ton){" "}
          <sub style={{ color: grey[500] }}>
            ({formatNumberToCurrency(singleCaminhaoKmPrice)} x {distancia}km ={" "}
            {formatNumberToCurrency(singleCaminhaoPrice)})
          </sub>
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {formatNumberToCurrency(caminhaoPrice)}
        </Typography>
      </Grid>

      <Button
        startIcon={<CalculateIcon />}
        variant="contained"
        color="primary"
        onClick={onCalculate}
      >
        Calcular
      </Button>
    </Wrapper>
  );
};
