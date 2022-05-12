import React from "react";
import { useForm } from "react-hook-form";
import { InputField, RoleField } from "./FormComponents";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="gap-4 flex flex-col max-w-2xl m-auto pt-24">
        <h2 className="text-2xl">Create a new account</h2>
        <p>Please set up your account information:</p>

        <InputField
          label="FIRST NAME"
          {...register("firstName", {
            required: "Field is required",
            minLength: 1,
          })}
          errors={errors}
        />
        <InputField
          label="EMAIL"
          type="email"
          {...register("companyEmail", { required: "Field is required" })}
          errors={errors}
        />
        <InputField
          label="PASSWORD"
          autocomplete="new-password"
          type="password"
          {...register("password", {
            required: "Field is required",
            minLength: {
              value: 8,
              message: "Password has to be a minimum of 8 characters long.",
            },
            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,}$/gi,
              message: "Not a valid password.",
            },
          })}
          errors={errors}
        />
        <RoleField
          label="USER ROLE"
          errors={errors}
          {...register("role", { required: "Field is required" })}
        />
        <button
          type="submit"
          className="rounded-full hover:brightness-150 rounded-full bg-blue-900 text-white font-bold py-2 px-12"
        >
          Create account
        </button>
      </div>
    </form>
  );
}
