import React from "react";
import "./StylesPages/About-us.scss"
import BreadCrumb from "../Container/BreadCrumb";

import User from "../Service_Api/User";


export default function AboutUs() {
    function getUser() {
        User.testroute("Email", "Password")
            .then((res) => {
              //  console.log(res)
            }).catch((eur) => {
               // console.log(eur)
            })
    }
    return (
        <>
            <BreadCrumb title="Qui Sommes-nous ?"

                paragraphe="The intelligent and easy-to-use modules in LogistaaS enable freight forwarders
                            to manage their workflow efficiently, accurately, and with high visibility."

                image="https://www.logistaas.com/wp-content/uploads/2021/03/featuresbanner.svg"
            />

            <button onClick={getUser} >getUser</button>
        </>
    );
}