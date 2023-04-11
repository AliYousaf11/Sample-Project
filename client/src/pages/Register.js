import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../components/FormikControl";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//....
export const Register = () => {
  const [image, setImage] = useState("");

  // radio btn...
  const options = [
    { key: " 1 - ", value: "Male" },
    { key: " 2 - ", value: "Femail" },
    { key: " 3 - ", value: "Other" },
  ];

  // inistailstate....
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    Gender: "",
    phone: "",
  };
  // onSubmut.... Post data....
  const onSubmit = async (values) => {
    try {
      const res = await axios.post("http://localhost:9000/api/user/signup", {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmpassword: values.confirmpassword,
        Gender: values.Gender,
        phone: values.phone,
        image,
      });
      if (res.data.success === true) {
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

  // image to buffer....
  const convertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };

  // form Validation.....
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid format").required("Required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), " "], "Password must match")
      .required("Required!"),
    Gender: Yup.string().required("Required!"),
    phone: Yup.number("Enter Number"),
  });

  ///......
  return (
    <div className="Register">
      <h4>Welcome Register You Self</h4>
      <Formik
        method="POST"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div
              className="wrapper"
              style={{ backgroundImage: `url(${image})` }}
            >
              <input
                accept="image/*"
                type="file"
                onChange={convertToBase64}
                className="my_file"
              />
            </div>
            <FormikControl
              type="text"
              name="name"
              label="Name"
              control="input"
            />
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
            <FormikControl
              autoComplete="on"
              type="password"
              name="confirmpassword"
              label="Repeat Password"
              control="input"
            />
            <FormikControl
              control="radio"
              label="Gender"
              name="Gender"
              options={options}
            />
            <FormikControl
              control="input"
              type="text"
              name="phone"
              label="phoneNo"
            />
            <button
              type="submit"
              disabled={!formik.isValid}
              className="reg-btn"
            >
              Submit
            </button>
            <p className="redirect">
              Already have an account{" "}
              <Link to="/login" className="redirectbtn">
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};
