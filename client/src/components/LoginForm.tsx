"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "@/redux/hooks";
import { login } from "../redux/slices/authSlice";

type LoginDto = {
  email: string;
  password: string;
};

const LOGIN_SCHEMA = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const initialValues: LoginDto = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: LoginDto,
    { resetForm }: FormikHelpers<LoginDto>
  ) => {
    dispatch(login(values));
    console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LOGIN_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-4 w-80 p-4 shadow-lg rounded-xl">
        <div className="flex flex-col">
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <div className="flex flex-col">
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
}
