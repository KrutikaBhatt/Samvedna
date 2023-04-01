import React from "react";
import "../css/login.css";
import { useState } from "react";

export const Register = () => {
  return (
    <div className="ml-64">
      <div className="background-top-login">
        <div>
          <input className="input-login"
            type="text"
            placeholder="Enter a unique username"
            name="title"
            id="title"
            required
          />
        </div>
        <button className="button-login"> SIGN UP</button>
      </div>
    </div>
  );
};
