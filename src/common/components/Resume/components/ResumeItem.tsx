import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ResumeRow } from "../Resume.styles";

type Props = {
  name: string;
  weight: number;
  quantity: number;
};

export const ResumeItem: React.FC<Props> = ({ quantity, name, weight }) => {
  const totalWeight = quantity * weight;

  return (
    <ResumeRow>
      <span>
        <Typography display="inline" fontWeight="bold">
          {quantity}x
        </Typography>{" "}
        <Typography display="inline">
          {name}{" "}
          <sub style={{ color: grey[500] }}>
            ({quantity}x {weight}T)
          </sub>
        </Typography>
      </span>
      <Typography variant="body1" fontWeight="bold">
        {totalWeight.toFixed(2)} tonelada{totalWeight === 1 ? "" : "s"}
      </Typography>
    </ResumeRow>
  );
};
