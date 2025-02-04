import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Landing from "./page/Landing";
import About from "./page/About";
import Contact from "./page/Contact";
import Works from "./page/Works";

const router = createBrowserRouter([
  {
    path: "/*",
  },
  {
    element: <Landing />,
    path: "/",
  },
  {
    element: <App />,
    children: [
      {
        element: <About />,
        path: "/about",
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
