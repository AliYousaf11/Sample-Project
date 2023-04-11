import React, { useState } from "react";
import "../styles/Product.css";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "../services/GetProducts";
import { setCard } from "../redux/ProductSlice/AddCardSlice";
//......function
export const Users = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  const products = useSelector((state) => state.ProductSlice.products);
  const [search, setSearch] = useState("");

  const AddToCard = (product) => {
    dispatch(setCard(product));
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

  return (
    <>
      <input
        type="text"
        placeholder="Search Product Name"
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <GetProducts />
      {products
        .filter((product) => {
          if (product.name.toLowerCase().includes(search.toLowerCase())) {
            return product;
          } else if (search === "") return product;
        })
        .map((prod, index) => {
          return (
            <div key={index} className="card-container">
              <div
                className="wrapper"
                style={{ backgroundImage: `url(${prod.image})` }}
              >
                <input
                  accept="image/*"
                  type="file"
                  onChange={convertToBase64}
                  className="my_file"
                />
              </div>
              <div>
                <div className="card-title">
                  <p>Ali Youasf</p>
                  <p>Male</p>
                </div>
                <div className="card-body">
                  m.aliyousaf1133@gmail.com <br />
                  323123123123
                </div>
                <div className="user-btn">
                  <button onClick={() => AddToCard(prod)}>Edit</button>
                  <button onClick={() => AddToCard(prod)}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
