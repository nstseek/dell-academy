import { FormErrors } from "@/common/components/FormErrors/FormErrors";
import { Wrapper } from "@/common/components/Wrapper/Wrapper";
import { CidadeForm } from "@/pages/cadastrar-transporte/hooks/useCreateCidadesForm";
import { AutocompleteOption } from "@/utils/types";
import AddIcon from "@mui/icons-material/Add";
import {
  Autocomplete,
  Button,
  CircularProgress,
  TextField,
} from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  onSubmit: (values: CidadeForm) => void;
  options: AutocompleteOption[];
};

export const CidadesForm: React.FC<Props> = ({ onSubmit, options }) => {
  const form = useFormContext<CidadeForm>();

  const isOptionEqualToValue = (
    option: AutocompleteOption,
    value: AutocompleteOption
  ) => option.id === value.id;

  return (
    <form
      style={{ width: "100%", display: "flex" }}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Wrapper>
        <FormErrors />
        <Autocomplete
          disablePortal
          fullWidth
          sx={{ borderColor: "red" }}
          id="cidade-de-origem"
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Cidade de Origem"
              error={!!form.formState.errors.cidadeToAdd}
            />
          )}
          isOptionEqualToValue={isOptionEqualToValue}
          onChange={(_e, value) => {
            form.setValue("cidadeToAdd", value?.id ?? "");
          }}
        />
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Adicionar
        </Button>
      </Wrapper>
    </form>
  );
};
