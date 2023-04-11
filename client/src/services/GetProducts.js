import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/ProductSlice/ProductSlice";
import { useDispatch } from "react-redux";

export const GetProducts = () => {
  const dispatch = useDispatch();

  // get post
  useEffect(() => {
    const GetDetails = async () => {
      try {
        const res = await axios.get(
          "http://localhost:9000/api/products/getallproduct"
        );
        dispatch(setProducts(res.data.payload));
      } catch (error) {
        console.log(error);
      }
    };
    GetDetails();
  }, [dispatch]);
  return null;
};

