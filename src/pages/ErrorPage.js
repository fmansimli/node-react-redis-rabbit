import React from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div class="main-wrapper">
      <div class="signboard-wrapper">
        <div class="signboard">404 &#128580;</div>
        <div class="string"></div>
        <div class="pin pin1"></div>
        <div class="pin pin2"></div>
        <div class="pin pin3"></div>
      </div>
      <div className="actions">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/auth/login">
          Login
        </Link>
      </div>
    </div>
  );
}
