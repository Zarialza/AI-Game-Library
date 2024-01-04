import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../env";

function SignUp(){
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = ( async () => {
    await axios.post(`${BASE_URL}/user/add`,{
      userName:userName,
      passwordHash:password,
      email:email
    })
  });
    return (
      <div className="formCenter">
        <form onSubmit={handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className="formFieldInput"
              placeholder="Enter a User name"
              name="name"
              required="required"
              value={userName}
              onChange={(e) =>{setUserName(e.target.value)}}
            />
          </div>
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
            <button className="formFieldButton">Sign Up</button>
          </div>
        </form>
      </div>
    );
    }

export default SignUp;
