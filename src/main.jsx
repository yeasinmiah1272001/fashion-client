import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Root from "./Component/Root";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./Component/ProductDetails";
import LoginFrom from "./Component/LoginFrom";
import Registration from "./Component/Registration";
import AuthProvider from "./Component/Provider/AuthProvider";
import MainDashBoard from "./MainDashBoard/MainDashBoard";

import Setting from "./Component/DashBoard/Setting";
import MyCart from "./Component/DashBoard/MyCart";
import DashBoard from "./Component/DashBoard/DashBoard";
import PaymentHistry from "./Component/DashBoard/PaymentHistry";
import Shop from "./Component/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
        loader: () => fetch(`https://server-seven-navy.vercel.app/fashion`),
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/login",
        element: <LoginFrom />,
      },
      {
        path: "/reg",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <MainDashBoard />,
    children: [
      {
        path: "d",
        element: <DashBoard />,
      },
      {
        path: "cart",
        element: <MyCart />,
      },
      {
        path: "payment",
        element: <PaymentHistry />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="bottom-right" reverseOrder={false} />
      </Provider>
    </AuthProvider>
  </StrictMode>
);
