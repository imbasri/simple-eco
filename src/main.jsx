import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";
import ProfilePage from "./pages/profile.jsx";
<<<<<<< HEAD
import DetailProductPage from "./pages/detailProduct.jsx";
=======
>>>>>>> c49d2b50a0904cfffba6c6092217c434326f6e0c
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <h1 className="text-3xl justify-center items-center h-screen flex">
        Simple Eco
      </h1>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
<<<<<<< HEAD
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
=======
>>>>>>> c49d2b50a0904cfffba6c6092217c434326f6e0c
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
