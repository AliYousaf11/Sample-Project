import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import { AddProducts } from "../pages/AddProducts";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Profile } from "../pages/Profile";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Purchase } from "../pages/Purchase";
import { Users } from "../pages/Users";
//........
export const AppContent = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/about"} element={<About />} />
        <Route exact path={"/products"} element={<Products />} />
        <Route exact path={"/addproducts"} element={<AddProducts />} />
        <Route exact path={"/profile"} element={<Profile />} />
        <Route exact path={"/contact"} element={<Contact />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/purchase" element={<Purchase />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

// export function ProtectedRoute({ children }) {
//   const navigate = useNavigate();

//   const Check_login = localStorage.getItem("userlogin");
//   if (Check_login) {
//     return children;
//   } else {
//     navigate("/");
//   }
// }
// export function PublicRoute({ children }) {
//   const Already_login = localStorage.getItem("userlogin");
//   if (Already_login) {
//     return <h1>dsd</h1>;
//   } else {
//     return children;
//   }
// }
