import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormTextField } from "../../../../components/FormTextField";
import { Button } from "@mui/material";

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
    <form onSubmit={handleSubmit(onSubmit)} className='p-16'>
      <Typography variant="h3" className="mb-16 mt-32">
        personal info
      </Typography>
      <Typography variant="caption">
        please provide your name,email address, and phone number
      </Typography>
      <FormTextField
        control={control}
        name="name"
        label="name"
        disableClearable={false}
        className="mt-24"
      />
      <FormTextField
        control={control}
        name="email"
        label="email address"
        disableClearable={false}
        className="mt-24"
      />
      <FormTextField
        control={control}
        name="phoneNumber"
        label="phone number"
        disableClearable={false}
        className="mt-24"
      />
      <Button>ds</Button>
    </form>
  );
};
