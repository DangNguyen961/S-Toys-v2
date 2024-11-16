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
import Cart from "../pages/cart/Cart";
import ProductDetail from "../pages/product/ProductDetail";
import ErrorPage from "../pages/error/Error";
import Profile from "../pages/account/Profile";
import Shipping from "../pages/shipping/Shipping";
import PrivateRoute from "../components/PrivateRoute";
import Payment from "../pages/payment/Payment";
import PlaceOrder from "../pages/order/PlaceOrder";
import Order from "../pages/order/Order";
import OrderList from "../pages/admin/OrderList";
import ProductList from "../pages/admin/ProductList";
import EditProduct from "../pages/admin/EditProduct";
import UserList from "../pages/admin/UserList";
import EditUser from "../pages/admin/EditUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="page/:pageNumber" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="" element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="payment" element={<Payment />} />
          <Route path="placeorder" element={<PlaceOrder />} />
          <Route path="order/:id" element={<Order />} />
        </Route>
      </Route>

      <Route path="" element={<AdminLayout />}>
        <Route path="admin/productlist" element={<ProductList />} />
        <Route path="admin/productlist/:pageNumber" element={<ProductList />} />
        <Route path="/admin/orderlist" element={<OrderList />} />
        <Route path="/admin/product/:id/edit" element={<EditProduct />} />
        <Route path="/admin/userlist" element={<UserList />} />
        <Route path="/admin/user/:id/edit" element={<EditUser />} />
      </Route>
    </>
  )
);

export default router;
