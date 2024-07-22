import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";
import { Button, TextField } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import { User } from "../model/types";

type Props = {
  schema: ObjectSchema<User>;
  onSubmit: (data: User) => void;
  eventSubmit: string;
};

export const InputForm = ({ onSubmit, schema, eventSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          id="email-id"
          type="email"
          variant="outlined"
          {...register("email")}
        />
      </div>
      <ErrorMessage errors={errors} name="email" />
      <div style={{ marginTop: "50px" }}>
        <TextField
          id="password-id"
          type="password"
          variant="outlined"
          {...register("password")}
        />
      </div>
      <ErrorMessage errors={errors} name="password" />
      <Button type="submit">{eventSubmit}</Button>
    </form>
  );
};
