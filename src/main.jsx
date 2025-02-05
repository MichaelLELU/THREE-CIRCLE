import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./page/About";
import Contact from "./page/Contact";
import Works from "./page/Works";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <About />,
        path: "/",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
      {
        element: <Works />,
        path: "/works",
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
