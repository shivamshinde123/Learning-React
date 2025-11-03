import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function NotFound() {
  return (
    <div>
      <Navbar />
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFound;
