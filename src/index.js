import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" exact element={<App />}>
      <Route path="/products" exact element={<Home />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/About" exact element={<About />} />
      <Route path="*" exact element={<NotFound />} />
    </Route>
  ),
  {
    basename: "/reactwebapp",
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
