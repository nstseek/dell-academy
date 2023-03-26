import { FormErrors } from "@/common/components/FormErrors/FormErrors";
import { Wrapper } from "@/common/components/Wrapper/Wrapper";
import options from "@/pages/api/Freight/options";
import { CidadesObjetosContext } from "@/pages/cadastrar-transporte/context/CidadesObjetosContext";
import { CidadesListForm } from "@/pages/cadastrar-transporte/hooks/useCreateCidadesForm";
import { ObjetoForm } from "@/pages/cadastrar-transporte/hooks/useCreateObjetosForm";
import { AutocompleteOption } from "@/utils/types";
import AddIcon from "@mui/icons-material/Add";
import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Control, useFormContext } from "react-hook-form";
import { useGetAvailableCidadeOptions } from "../../hooks/useGetAvailableCidadeOptions";

type Props = {
  onSubmit: (values: ObjetoForm) => void;
  cidadesListFormControl: Control<CidadesListForm>;
};

export const ObjetosForm: React.FC<Props> = ({
  onSubmit,
  cidadesListFormControl,
}) => {
  const form = useFormContext<ObjetoForm>();

  const isOptionEqualToValue = (
    option: AutocompleteOption,
    value: AutocompleteOption
  ) => option.id === value.id;

  const { objetos, cidades } = useContext(CidadesObjetosContext);

  const selectedCidadesOptions = useGetAvailableCidadeOptions({
    cidadesListFormControl,
    cidadesOptions: cidades?.options ?? [],
  });

  return (
    <form
      style={{ width: "100%", display: "flex" }}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Wrapper>
        {selectedCidadesOptions.length >= 2 ? (
          <>
            <FormErrors />
            <Autocomplete
              disablePortal
              fullWidth
              sx={{ borderColor: "red" }}
              id="objeto"
              options={objetos?.options ?? []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Objeto"
                  error={!!form.formState.errors.objetoToAdd}
                />
              )}
              isOptionEqualToValue={isOptionEqualToValue}
              onChange={(_e, value) => {
                form.setValue("objetoToAdd", value?.id ?? "");
              }}
            />
            <TextField
              {...form.register("quantity", { required: true })}
              fullWidth
              error={!!form.formState.errors.quantity}
              type="number"
              label="Quantidade"
              InputProps={{ inputProps: { min: 0 } }}
            />
            <Autocomplete
              disablePortal
              fullWidth
              sx={{ borderColor: "red" }}
              id="cidade-destino"
              options={selectedCidadesOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Cidade de destino"
                  error={!!form.formState.errors.cidadeDestino}
                />
              )}
              isOptionEqualToValue={isOptionEqualToValue}
              onChange={(_e, value) => {
                form.setValue("cidadeDestino", value?.id ?? "");
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
          </>
        ) : (
          <Typography variant="body1">
            Por favor, selecione duas ou mais cidades
          </Typography>
        )}
      </Wrapper>
    </form>
  );
};
