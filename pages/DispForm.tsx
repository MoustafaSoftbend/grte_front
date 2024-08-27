import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function DispForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">
        firstName
        <input
          name="firstName"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
      </label>
      <label htmlFor="lastName">
        lastName
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      </label>
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
