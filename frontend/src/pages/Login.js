import React, { Component, useState } from "react";
import { Link, Navigate, useRevalidator } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../env";


function Login() {
  
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = ( async (res) => {
    await axios.get(`${BASE_URL}/detail-user/${email}`);
    if (email == res.email && password == res.password){
      <Link to="/home" />
    }
    else{
      alert("Incorrect email or password")
    }
  });
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              required="required"
              value={email}
              onChange={(e) =>{setEmail(e.target.value)}}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              required="required"
              value={password}
              onChange={(e) =>{setPassword(e.target.value)}}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton" onClick={handleSubmit}>Sign In</button>
          </div>
        </form>
      </div>
    );
  }

export default Login;
