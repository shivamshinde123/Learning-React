import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import DashboardItem from "./components/DashboardItem";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/:id", element: <DashboardItem /> },
  { path: "*", element: <NotFound /> }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
