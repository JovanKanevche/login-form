import React from "react";
import { ErrorMessage } from "@hookform/error-message";

export const InputField = React.forwardRef((props, ref) => {
  return (
    <div>
      <h3>{props.label}</h3>
      <input
        ref={ref}
        className="w-full border py-2"
        aria-label={props.label}
        {...props}
      />
      <ErrorMessage
        errors={props.errors}
        name={props.name}
        render={({ message }) => <p className="text-red-700">{message}</p>}
      />
    </div>
  );
});

export const RoleField = React.forwardRef((props, ref) => {
  return (
    <div>
      <h3>{props.label}</h3>
      <select
        ref={ref}
        aria-label={props.label}
        className="py-2 px-4"
        {...props}
      >
        <option value="user">User</option>
        <option value="mentor">Mentor</option>
        <option value="author">Author</option>
      </select>
      <ErrorMessage
        errors={props.errors}
        name={props.name}
        render={({ message }) => <p className="text-red-700">{message}</p>}
      />
    </div>
  );
});
