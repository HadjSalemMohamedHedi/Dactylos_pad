import React, { useState } from "react";
import "./StylesPages/Login.scss";
import { Link } from "react-router-dom";
import LoginService from "../Service_Api/Login";

const Offres = () => {

    const [eurror, setEurror] = useState(false);

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

    const ResetPass = (mail)=>{
        LoginService.ResetPass(mail)
            .then(res=>{
                console.log('res')
                console.log(res)
            }).catch(eur=>{
                console.log('eur')
                console.log(eur)
            })
        }


    const EmailForm = useFormInput("");

    const validateForm = event => {
        event.preventDefault();


        if (
            (EmailForm.value === "") 
           
        ) {
            setEurror(true)
        } else {
            setEurror(false)
            let MyEmail = EmailForm.value;
          
            ResetPass(MyEmail);
        }

    };


    return (
        <> 
            <section className="TopLogin PageTop" >
                <div className="row LoginContainer" style={{ background: "url(assets/img/BackGround/backLogin.png)" }} >
                    <div className="col-md-6 leftImage" >
                    </div>
                    <div className="col-md-6 RightForm">
                        <div className="row" >
                            <div className="col-sm-9">
                                <h3>Rénitialiser</h3>
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
                           

                            <button
                                type="submit"
                                className="btn btn-block btn-succes"
                                disabled={!validateForm}
                            >Valider</button>

                        </form>
                       

                    </div>
                </div>

            </section>

        </>
    );
}

export default Offres;
