import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import AdminLayout from "../layouts/AdminLayout";
import AProduct from "../pages/admin/AProduct";
import Cart from "../pages/cart/Cart";
import ProductDetail from "../pages/product/ProductDetail";
import ErrorPage from "../pages/error/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route path="product" element={<AProduct />} />
      </Route>
    </>
  )
);

export default router;
