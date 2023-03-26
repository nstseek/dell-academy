import { useGetCidades } from "@/api/Cidades/useGetCidades";
import { Wrapper } from "@/common/components/Wrapper/Wrapper";
import { CidadesListForm } from "@/pages/cadastrar-transporte/hooks/useCreateCidadesForm";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  List,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useFieldArray, useWatch } from "react-hook-form";
import { getCidade } from "./CidadesList.model";
import { StyledListItem } from "./CidadesList.styles";

type Props = {
  data: ReturnType<typeof useGetCidades>["data"];
};

export const CidadesList: React.FC<Props> = ({ data }) => {
  const cidadesListFieldArray = useFieldArray<
    CidadesListForm,
    never,
    "value" | "id"
  >({
    // @ts-expect-error looks like there's an error with typing in react hook forms library
    // or there's not enough documentation to use it with TypeScript
    name: "cidades",
  });

  const cidades: CidadesListForm["cidades"] = useWatch({
    name: "cidades",
  });

  // TODO: We're having a few styling issues with the list, it should have a fixed height and a scroll bar if needed

  return (
    <Wrapper>
      {!!cidades.length && (
        <List
          sx={{
            width: "100%",
            height: "250px",
            overflow: "auto",
          }}
        >
          {cidades.map((cidadeId, index) => (
            <StyledListItem key={cidadeId.value}>
              <ListItemText>
                {getCidade({ cidadeId: cidadeId.value, cidadesData: data })}
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  color="error"
                  edge="end"
                  aria-label="delete"
                  onClick={() => cidadesListFieldArray.remove(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </StyledListItem>
          ))}
        </List>
      )}
      {!cidades.length && (
        <Typography variant="body1">
          Por favor, adicione duas ou mais cidades
        </Typography>
      )}
    </Wrapper>
  );
};
