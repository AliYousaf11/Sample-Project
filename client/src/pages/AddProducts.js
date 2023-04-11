import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../components/FormikControl";
import axios from "axios";
import "../styles/Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//....
export const AddProducts = () => {
  const [image, setImage] = useState("");

  // inistailstate....
  const initialValues = {
    name: "",
    price: "",
    quantity: "",
  };

  // onSubmut.... Post data....
  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:9000/api/products/product",
        {
          name: values.name,
          price: values.price,
          quantity: values.quantity,
          image: image,
        }
      );
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
    price: Yup.number("Enter Number").required("Required"),
    quantity: Yup.number("Enter Number").required("Required"),
  });

  ///......
  return (
    <div className="Register">
      <h4>Add New Product</h4>
      <Formik
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
              type="number"
              name="price"
              label="Price"
              control="input"
            />
            <FormikControl
              type="number"
              name="quantity"
              label="Quantity"
              control="input"
            />

            <button
              type="submit"
              disabled={!formik.isValid}
              className="reg-btn"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};
