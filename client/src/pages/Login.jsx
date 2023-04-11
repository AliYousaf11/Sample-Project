import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../components/FormikControl";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//....
export const Login = () => {
  const navigate = useNavigate();
  // inistailstate....
  const initialValues = {
    email: "",
    password: "",
  };

  // onSubmut....
  const onSubmit = async (values) => {
    try {
      const res = await axios.post("http://localhost:9000/api/user/login", {
        email: values.email,
        password: values.password,
      });
      if (res.data.success === true) {
        console.log(res.data.token);
        localStorage.setItem("user", res.data.token);
        navigate("/");
        toast.success(`${res.data.messgae}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(`${res.data.messgae}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // form Validation.....
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid format").required("Required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  ///......
  return (
    <div className="login">
      <h4>Welcome Back Login You Self</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              type="email"
              name="email"
              label="Email"
              control="input"
            />
            <FormikControl
              autoomplete="on"
              type="password"
              name="password"
              label="Password"
              control="input"
            />

            <button
              type="submit"
              disabled={!formik.isValid}
              className="reg-btn"
            >
              Submit
            </button>
            <p className="redirect">
              Don't have an account{" "}
              <Link to="/register" className="redirectbtn">
                SignUp
              </Link>
            </p>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};
