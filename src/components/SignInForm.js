import React from "react";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <form onSubmit={handleSubmit(onSubmit)}>
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* register your input into the hook by invoking the "register" function */}
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("firstName", { required: true, minLength: 1 })} />
      <input type='email' {...register("companyEmail", { required: true })} />
      <input type='password' {...register("password", { required: true, minLength: 8 })} />

      <select {...register("role")}>
        <option value="user">User</option>
        <option value="mentor">Mentor</option>
        <option value="author">Author</option>
      </select>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
      </div>
    </form>

  );
}
