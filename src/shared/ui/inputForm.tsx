import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";

type Props = {
  schema: ObjectSchema<any>;
  onSubmit: (data: any) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
//можно ли тут оставить any в компоненте для всех форм
export const InputForm = ({ onSubmit, schema, handleKeyPress }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit(onSubmit)}>
      <input
        id="name"
        type="text"
        style={{
          display: "block",
          width: "100%",
          margin: 0,
          padding: "0 15px",
          fontSize: 16,
          lineHeight: "20px",
        }}
        {...register("query")}
        onKeyDown={handleKeyPress}
      />
      <button type="submit">Найти</button>
    </form>
  );
};
