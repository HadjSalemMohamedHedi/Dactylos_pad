import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Login from "../Pages/Login";
import { useAuth } from "react-use-auth"

const token = localStorage.getItem("token");
const urlpage = window.location.href.split("/")[3];

const PrivateRoute = props => {
    const { user } = useAuth();
    console.log("user")
        console.log(user)
    if (user) {
        
        return (
          
            <Routes>
                <Route exact path="/Login" element={<Login />} />
                </Routes>
        )
    }
   
}

export default PrivateRoute;