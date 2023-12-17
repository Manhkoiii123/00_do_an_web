import { useRoutes } from "react-router-dom";
import MainLayout from "./src/layout";
import ProductList from "./src/pages/productList";
import Home from "./src/pages/home";
import ProductDetail from "./src/components/product/ProductDetail";
import OrderHistory from "./src/components/UserAccount/OrderHistory";
import ShoppingCart from "./src/components/UserAccount/ShoppingCart";
import WishList from "./src/components/UserAccount/WishList";
import Compare from "./src/components/UserAccount/Compare";
import Profile from "./src/components/UserAccount/Profile";
import Login from "./src/pages/login/Login";
import Register from "./src/pages/register/Register";
import ForgotPassword from "./src/pages/forgotPassword/ForgotPassword";
import ResetPassword from "./src/pages/forgotPassword/ResetPassword";
import OrderDetail from "./src/components/UserAccount/OrderDetail";
import AdminPage from "./src/pages/admin/AdminPage";
import Dashboard from "./src/pages/admin/Dashboard";
import CategoriesPage from "./src/pages/admin/categories/CategoriesPage";
import UserPage from "./src/pages/admin/user/UserPage";
import ChatAdmin from "./src/pages/admin/chat/ChatAdmin";
import ProductPage from "./src/pages/admin/products/ProductPage";
import VerifyEmail from "./src/pages/forgotPassword/VerifyEmail";
import CheckOut from "./src/components/UserAccount/CheckOut";
import CheckoutSuccess from "./src/components/UserAccount/CheckoutSuccess";
import ProtectedRoute from "./src/components/protectedRoute/ProtectedRoute";
import RolePage from "./src/pages/admin/role/RolePage";

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "productlist",
          element: <ProductList />,
        },
        {
          path: "productlist/:id",
          element: <ProductList />,
        },
        {
          path: "product/:id",
          element: <ProductDetail />,
        },

        {
          path: "orderhistory",
          element: <OrderHistory />,
        },
        {
          path: "orderhistory/:id",
          element: <OrderDetail />,
        },
        {
          path: "shoppingcart",
          element: <ShoppingCart />,
        },
        {
          path: "wishlist",
          element: <WishList />,
        },
        {
          path: "compare",
          element: <Compare />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "checkout",
          element: <CheckOut></CheckOut>,
        },
        {
          path: "checkoutsuccess",
          element: <CheckoutSuccess></CheckoutSuccess>,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "resetpassword",
      element: <ResetPassword />,
    },
    {
      path: "verifyemail",
      element: <VerifyEmail />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <AdminPage />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "user",
          element: <UserPage />,
        },
        {
          path: "categories",
          element: <CategoriesPage />,
        },
        {
          path: "products",
          element: <ProductPage />,
        },
        {
          path: "chat",
          element: <ChatAdmin />,
        },
        {
          path: "order",
          element: <OrderHistory />,
        },
        {
          path: "role",
          element: <RolePage />,
        },
        {
          path: "order/:id",
          element: <OrderDetail />,
        },
      ],
    },
  ]);
  return routeElements;
}
