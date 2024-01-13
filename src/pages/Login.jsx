import React from "react";
import { Link } from "react-router-dom";
import stockImage from "../assets/loginimage.png";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import loginSpinner from "../assets/loading-gif-png-5.gif";
import useAuth from "../service/useAuth";

const Login = () => {
  const { login } = useAuth();

  const loginSchema = object({
    email: string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must contain at least 8 characters")
      .max(20, "Password must contain no more than 20 characters")
      .matches(/\d+/, "Password must contain at least one number")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(
        /[@.$!%*?&]+/,
        "Password must contain at least one special character (@.$!%*?&)"
      ),
  });

  return (
    <div className="bg-[#3a7eeb]  h-[100vh] flex flex-col justify-center items-center   ">
      <div className="box-border rounded-lg bg-white bg-opacity-20 shadow-lg backdrop-filter backdrop-blur-md border border-white border-opacity-30 flex flex-wrap justify-around items-center w-[70%] h-[60%] p-3">
        <div className="w-1/2  hidden md:block">
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-wide text-white">
            Stock Management
          </h2>

          <img src={stockImage} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className="w-1/2 rounded-lg bg-[#feffffd7] p-3 py-5">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => (
              <form className="space-y-6 w-[70%] m-auto h-[80%]">
                <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`
                      block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                      ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }
                    `}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <span className="absolute text-red-500 text-sm pt-1">
                      *{errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`
                      block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                      ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : "border-gray-300"
                      }
                    `}
                    />
                  </div>
                  {touched.password && errors.password && (
                    <span className="absolute text-red-500 text-sm pt-1">
                      *{errors.password}
                    </span>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
                <div className="text-center">
                  <h4>
                    <Link
                      to="/register"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Don't you have an account?
                    </Link>
                  </h4>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
