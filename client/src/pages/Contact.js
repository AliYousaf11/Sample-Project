import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../components/FormikControl";
import axios from "axios";
import "../styles/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//....
export const Contact = () => {
  // inistailstate....
  const initialValues = {
    email: "",
    name: "",
    comments: "",
  };

  // onSubmut....
  const onSubmit = async (values) => {
    try {
      const res = await axios.post("http://localhost:9000/api/user/contact", {
        email: values.email,
        name: values.name,
        comments: values.comments,
      });
      console.log(res);
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

  // form Validation.....
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid format").required("Required!"),
    name: Yup.string().required("Password is required"),
    comments: Yup.string().required("Password is required"),
  });

  ///......
  return (
    <div className="contact">
      <h4>Welcome Send Your Feedback</h4>
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
              autoComplete="on"
              type="text"
              name="name"
              label="Name"
              control="input"
            />
            <FormikControl
              autoComplete="on"
              type="text"
              name="comments"
              label="Comments"
              control="textarea"
            />

            <button
              type="submit"
              disabled={!formik.isValid}
              className="reg-btn"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};
