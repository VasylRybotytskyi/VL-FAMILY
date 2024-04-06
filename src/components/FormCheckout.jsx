import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FormCheckout = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      address: "",
    },
  });

  const onSubmit = (data) => {
    if (isValid) {
      toast.success("Замовлення успішно оформлено, очікуйте на дзвінок");
      navigate("/");
      console.log(data);
    }
  };

  return (
    <Box sx={{ border: "1px solid #fff", borderRadius: "8px", p: 4 }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography textAlign="center">Дані доставки та отримувача</Typography>
        <Controller
          control={control}
          rules={{
            required: "Поле є обов'язковим",
            minLength: { value: 3, message: "Мінімально 3 символів" },
            maxLength: { value: 20, message: "Максимально 20 символів" },
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              type="text"
              error={!!errors.name}
              helperText={errors.name?.message}
              size="small"
              label="Імя"
              variant="standard"
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: "Поле є обов'язковим",
            minLength: { value: 10, message: "Мінімально 10 символів" },
            maxLength: { value: 13, message: "Максимально 13 символів" },
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              type="number"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              size="small"
              label="Телефон"
              variant="standard"
            />
          )}
          name="phone"
        />
        <Controller
          control={control}
          rules={{
            required: "Поле є обов'язковим",
            minLength: { value: 3, message: "Мінімально 3 символи" },
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              type="text"
              error={!!errors.city}
              helperText={errors.city?.message}
              size="small"
              label="Місто"
              variant="standard"
            />
          )}
          name="city"
        />
        <Controller
          control={control}
          rules={{
            required: "Поле є обов'язковим",
            minLength: { value: 3, message: "Мінімально 3 символи" },
            maxLength: { value: 25, message: "Максимально 25 символів" },
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              type="text"
              error={!!errors.address}
              helperText={errors.address?.message}
              size="small"
              label="Адреса"
              variant="standard"
            />
          )}
          name="address"
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
          Замовлення підтверджую
        </Button>
      </Box>
    </Box>
  );
};

export default FormCheckout;
