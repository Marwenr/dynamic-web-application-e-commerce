import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Index from "./pages/Ecommerce/Index";
import Root from "./pages/Ecommerce/Root";
import Login from "./pages/Ecommerce/Login";
import Signup from "./pages/Ecommerce/Signup";
import Cart from "./pages/Ecommerce/Cart";
import About from "./pages/Ecommerce/About";
import Contact from "./pages/Ecommerce/Contact";
import Categories from "./pages/Ecommerce/Categories";
import Subcategories from "./pages/Ecommerce/Subcategories";
import Item from "./pages/Ecommerce/Item";

import IndexAdmin from "./pages/Marketplace/Index";
import RootAdmin from "./pages/Marketplace/Root";
import Article from "./pages/Marketplace/Article";
import DeleteArticle from "./pages/Marketplace/DeleteArticle";
import CashDrawer from "./pages/Marketplace/CashDrawer";
import Receipts from "./pages/Marketplace/Receipts";
import DynamicHome from "./pages/Marketplace/DynamicHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/:id",
        element: <Subcategories />,
      },
      {
        path: ":id",
        element: <Item />,
      },
    ],
  },
  {
    path: "admin",
    element: <RootAdmin />,
    children: [
      {
        index: true,
        element: <IndexAdmin />,
      },
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "deletearticle",
        element: <DeleteArticle />,
      },
      {
        path: "cashdrawer",
        element: <CashDrawer />,
      },
      {
        path: "receipts",
        element: <Receipts />,
      },
      {
        path: "dynamic",
        element: <DynamicHome />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
