import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {Provider} from "react-redux"
import store from "./store"

import Index from "./pages/Index";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Subcategories from "./pages/Subcategories";
import Item from "./pages/Item";

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
        element: <Contact />
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
    element: <div>admin</div>,
    children: []
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><RouterProvider router={router} /></Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
