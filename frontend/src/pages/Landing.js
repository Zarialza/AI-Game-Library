import React, { Component,useState } from "react";
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";


import "../style/Landing.css"

function Landing(){
  const [currentPage, setCurrentPage] = useState(<Login/>);
    return (
    
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                className="pageSwitcherItem-active pageSwitcherItem"
                onClick={()=>setCurrentPage(<Login/>)}
              >
                Sign In
              </NavLink>
              <NavLink
                className="pageSwitcherItem-active pageSwitcherItem"
                onClick={()=>setCurrentPage(<SignUp/>)}
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                className="formTitleLink formTitleLink-active"
                onClick={()=>setCurrentPage(<Login/>)}
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                className="formTitleLink formTitleLink-active"
                onClick={()=>setCurrentPage(<SignUp/>)}
              >
                Sign Up
              </NavLink>
            </div>
          {currentPage}
          </div>
        </div>
  
    );
}


export default Landing;
