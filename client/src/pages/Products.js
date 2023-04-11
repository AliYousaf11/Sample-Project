import React, { useState } from "react";
import "../styles/Product.css";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "../services/GetProducts";
import { setCard } from "../redux/ProductSlice/AddCardSlice";
//......function
export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductSlice.products);
  const [search, setSearch] = useState("");

  const AddToCard = (product) => {
    dispatch(setCard(product));
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
              ></div>
              <div>
                <div className="card-title">
                  <p>{prod.name}</p>
                  <p>${prod.price}</p>
                  <p>{prod.quantity}</p>
                </div>
                <div className="card-body">
                  This is the content of the card. You can add more elements
                  here as needed.
                </div>
                <div className="product-btn">
                  <button onClick={() => AddToCard(prod)}>
                    <span className="fa fa-shopping-bag"></span>
                    Add To Card
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
