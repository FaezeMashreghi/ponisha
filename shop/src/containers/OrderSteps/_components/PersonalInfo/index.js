import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormTextField } from "../../../../components/FormTextField";
import { Box, Button } from "@mui/material";

const warrantiesValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: Yup.number().required("phone number is required"),
});
export const PersonalInfo = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(warrantiesValidationSchema),
    defaultValues: {
      email: "",
      name: "",
      phoneNumber: "",
    },
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ py: 3, px: 5 }}>
      <Typography variant="h3" mt={3} mb={2}>
        Personal info
      </Typography>
      <Typography variant="caption">
        Please provide your name,email address, and phone number
      </Typography>
      <Box sx={{ mt: 2 }}>
        <FormTextField
          control={control}
          name="name"
          label="name"
          disableClearable={false}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <FormTextField
          control={control}
          name="email"
          label="email address"
          disableClearable={false}
          className="mt-24"
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <FormTextField
          control={control}
          name="phoneNumber"
          label="phone number"
          disableClearable={false}
          className="mt-24"
        />
      </Box>
      <Button>ds</Button>
    </Box>
  );
};
