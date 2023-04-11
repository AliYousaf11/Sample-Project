import React, { useState } from "react";
import "../styles/Product.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setQuantity } from "../redux/ProductSlice/AddCardSlice";
//......function
export const Purchase = () => {
  const dispatch = useDispatch();
  const cardsPurchase = useSelector((state) => state.AddCardSlice.cardItem);
  const [search, setSearch] = useState("");
  const [userPrice, setUserPrice] = useState("");

  const SET = (userQuantity, userId) => {
    const pass = {
      userQuantity,
      userId,
    };
    dispatch(setQuantity(pass));
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
      {cardsPurchase
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
                <div className="purchased-btn">
                  <button>
                    <input
                      type="number"
                      value={userPrice}
                      onChange={(e) => setUserPrice(e.target.value)}
                    />
                    <span className="purchased">{prod.cardQuantity}</span>
                    <span onClick={() => SET(userPrice, prod._id)}>Set</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
