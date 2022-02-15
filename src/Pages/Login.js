import React, { useState } from "react";
import "./StylesPages/Login.scss";
import { Link } from "react-router-dom";
import LoginService from "../Service_Api/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useDispatch } from "react-redux";

const Login = () => {
    const [eurror, setEurror] = useState("");

    const dispatch = useDispatch();

    const useFormInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);



        const handleChange = (e) => {
            setValue(e.target.value);
        };
        return {
            value,
            onChange: handleChange,
        };
    };


    const EmailForm = useFormInput("");
    const PasswordForm = useFormInput("");

    const validateForm = event => {
        event.preventDefault();

        if (EmailForm.value === "") {
            setEurror("Email Invalide")
        } else if (PasswordForm.value === "") {
            setEurror("Password Invalide")
        }
        else {
            let MyEmail = EmailForm.value;
            let MyPassword = PasswordForm.value;
            GoToLogin(MyEmail, MyPassword);
        }



    };
    const getsession = () => {
        LoginService.getsession();
    }

    const GoToLogin = (Email, Password) => {
        LoginService
            .Login(Email, Password).then((res) => {
                if (res.data.Response === "Null") {
                    toast.warning('Eurreur email ou mot de passe !', { position: "top-center" });
                } else {
                    localStorage.setItem('token', res.data.token)
                    dispatch({type: "SET_IS_LOGGED", payload: true})
                    toast.success('Success Login!', { position: "top-center" });
                }
            }).catch((eur) => {
                // console.log(eur)
            })

    }

    const Logout = () =>{
        localStorage.setItem('token', "")
    }


    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <section className="TopLogin PageTop" >
                <div className="row LoginContainer" style={{ background: "url(assets/img/BackGround/backLogin.png)" }} >
                    <div className="col-md-6 leftImage" >
                    </div>
                    <div className="col-md-6 RightForm">
                        <div className="row" >
                            <div className="col-sm-9">
                                <h3>Se connecter</h3>
                                <h6>Identifiez-vous pour continuer</h6>
                            </div>
                            <div className="col-sm-3">
                                <Link to="/createAccount" >
                                    <h6 className="demandacc">Demandez un accès</h6>
                                </Link>


                            </div>
                        </div>
                        <form className="form" onSubmit={validateForm}>
                            {
                                eurror !== "" ? (
                                    <div className="eurror">
                                        <h6>{eurror}</h6>
                                    </div>
                                ) : (
                                    <span></span>
                                )
                            }

                            <input type="email" className="form-control" placeholder="Email" name="Email" id="Email" {...EmailForm} />
                            <input type="password" className="form-control" placeholder="Mot de passe" name="Password" id="Password"  {...PasswordForm} />
                            <div className="row forgot">
                                <div className="col-sm-6" >
                                    <input type="checkbox" /> Rester connecté
                                </div>
                                <div className="col-sm-6" >
                                    <Link to="/Resetpass"> <b>Mot de passe oublié ?</b></Link>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-block btn-succes"
                                //onClick={GoToLogin}
                                disabled={!validateForm}

                            >Se connecter</button>
                        </form>
                        <hr />
                        <div className="createAccount">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-google" aria-hidden="true"></i>
                        </div>
                        <button onClick={getsession} >Test Token</button>
                        <button onClick={Logout} >Log out</button>

                    </div>
                </div>

            </section>

        </>
    );
}

export default Login;
