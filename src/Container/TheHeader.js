import React, { useState } from "react";
import routes from "../Config/Routes";
import "./Styles/TheHeader.scss";
import {Link} from "react-router-dom";
import $ from "jquery";
import 'font-awesome/css/font-awesome.min.css';





const setLanguage = (NewLang) => {
    localStorage.setItem("Language", NewLang);
    window.location.reload();
}


$(document).ready(function () {
    $("#Fr").click(() => {
        setLanguage("Fr");
    })
    $("#Ang").click(() => {
        setLanguage("En");
    })
});

const Header = () => {
    const [CurrentLanguage] = useState(localStorage.getItem("Language"));

    return (
        <>
            <div className="container-fuild topHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-2 langue">

                            <div className="dropdown">
                                <button className="btn dropdown-toggle DropDownLangue" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                                    {
                                        CurrentLanguage === "Fr" ? (
                                            <span className="Lang"><i className="fa fa-globe" aria-hidden="true"></i> français</span>
                                        ) : (
                                            <span className="Lang"><i className="fa fa-globe" aria-hidden="true"></i> Anglais</span>

                                        )
                                    }

                                </button>
                                <ul className="dropdown-menu" aria-labelledby="">
                                    <li>
                                        {
                                            CurrentLanguage !== "Fr" ? (
                                                <h6 className="Lang" id="Fr"><img src="assets/img/Lang/Fr.png" alt="Langue Fr" /> français</h6>
                                            ) : (
                                                <h6 className="Lang" id="Ang"><img src="assets/img/Lang/En.png" alt="Langue Ang" /> Anglais</h6>

                                            )
                                        }

                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-2 ">
                            <div className="telephone" ><i className="fa fa-phone" aria-hidden="true"></i> +216 72 578 415</div>
                        </div>
                        <div className="col-sm-2  col-xs-2 social">
                            <i className="fa fa-facebook" aria-hidden="true" ></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            
                        </div>

                        <div className="col-sm-1 col-xs-2 login">
                            <Link to="/Login" className="LinkTo"> <i className="fa fa-user-o" aria-hidden="true"></i> Login</Link>
                        </div>
                    </div>



                </div>
            </div>
            <nav className="navbar navbar-expand-lg  NavBar">
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="">
                        <img src="/assets/img/Logo/Logo1.png " alt=""/>
                    </Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-align-left" aria-hidden="true"></i>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                routes.map((route, idx) => {
                                    return (
                                        route.nave !== "false" && (
                                            <li className="nav-item" key={idx}>
                                                <Link className="nav-link"  to={route.path}>{route.name}</Link>
                                            </li>

                                        )
                                    );
                                })

                                
                            }
                        </ul>
                        <form className="d-flex Language">


                        </form>
                    </div>
                </div>
            </nav>
        

        </>
    );
}

export default Header;