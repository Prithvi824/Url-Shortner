import "boxicons/css/boxicons.min.css";

import React from "react";
import ReactDOM from "react-dom/client";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Authenticator from "./components/auth.jsx";

import Layout from "./layout.jsx";
import Index from "./pages/index.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Login from "./pages/login.jsx";
import Account from "./pages/account.jsx";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account/" element={<Account />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authenticator>
      <RouterProvider router={router} />
    </Authenticator>
  </React.StrictMode>
);
