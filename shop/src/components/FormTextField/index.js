import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export const FormTextField = ({ name, control, label, className }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          helperText={error?.message}
          size="small"
          error={!!error}
          fullWidth
          label={label}
          variant="outlined"
          className={className}
        />
      )}
    />
  );
};
