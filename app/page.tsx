"use client";
import { useCustomForm } from "@/hooks/useCustomForm";
import TextField from "./components/TextField";

export default function Home() {
  const { formErrors, handleSubmit, register } = useCustomForm();
  console.log(formErrors);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          id="firstname"
          style={{
            borderBottom: "1px solid gray",
            color: "gray",
            outline: "none",
          }}
          label="First name"
          // name="firstName"
          placeholder="enter your name"
          {...register("firstName", { required: true })}
        />
        <TextField
          id="lastname"
          style={{
            borderBottom: "1px solid gray",
            color: "gray",
            outline: "none",
          }}
          label="Last name"
          // name="firstName"
          placeholder="enter your last name"
          {...register("lastName", { required: true })}
        />
        {formErrors && formErrors.lastName && (
          <span>{formErrors.lastName}</span>
        )}

        <button className="bg-gray-500 tai">Submit</button>
      </form>
    </div>
  );
}
