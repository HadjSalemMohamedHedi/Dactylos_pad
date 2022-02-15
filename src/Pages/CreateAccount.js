import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StylesPages/Login.scss";

import LoginService from "../Service_Api/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAccount = () => {

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



    const EmailForm = useFormInput("");
    const PasswordForm = useFormInput("");
    const NomForm = useFormInput("");
    const PrenomForm = useFormInput("");
    const AdresseForm = useFormInput("");
    const VilleForm = useFormInput("");

    const validateForm = event => {
        event.preventDefault();


        if (
            (EmailForm.value === "") ||
            (PasswordForm.value === "") ||
            (NomForm.value === "") ||
            (PrenomForm.value === "") ||
            (AdresseForm.value === "") ||
            (VilleForm.value === "")             
            ) {
            setEurror(true)
        }else {
            setEurror(false)
            let MyEmail = EmailForm.value;
            let MyPassword = PasswordForm.value;
            let nom = NomForm.value;
            let prenom = PrenomForm.value;
            let adresse = AdresseForm.value;
            let ville = VilleForm.value;
            GoToRegister(MyEmail, MyPassword,nom,prenom,adresse,ville);
        }

    };

  

    const GoToRegister = (Email, Password,nom, prenom, adresse, ville) => {
        LoginService
            .Regiter(Email, Password,nom, prenom, adresse, ville).then((res) => {
                if (res.data.Response === "Null") {
                    toast.warning('Eurreur email ou mot de passe !', { position: "top-center" });
                } else if (res.data.Response === "existe") {
                    toast.warning('Compte déja existe!', { position: "top-center" });
                }
                 else {
                    toast.success('Création avec success!', { position: "top-center" });
                }
            }).catch((eur) => {
                // console.log(eur)
            })

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
                                <h3>Demandez un accès</h3>
                                <h6>Remplisez le formulaire pour continuer</h6>
                            </div>
                            <div className="col-sm-3">
                                <Link to="/Login" >
                                    <h6 className="demandacc">Se Connecter</h6>
                                </Link>
                            </div>
                        </div>

                        <form className="form" onSubmit={validateForm}>
                            {
                                eurror === true ? (
                                    <div className="eurror">
                                        <h6>Remplisez le formulaire pour continuer...</h6>
                                    </div>
                                ) : (
                                    <span></span>
                                )
                            }
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" placeholder="Nom" name="nom" id="nom" {...NomForm} />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" placeholder="Prénom" name="prenom" id="prenom" {...PrenomForm}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" placeholder="Adresse" name="adresse" id="adresse" {...AdresseForm}/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" placeholder="Ville" name="ville" id="ville" {...VilleForm}/>
                                </div>
                            </div>
                            <input type="email" className="form-control" placeholder="Email" name="Email" id="Email" {...EmailForm} />
                            <input type="password" className="form-control" placeholder="Mot de passe" name="Password" id="Password"  {...PasswordForm} />
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

export default CreateAccount;
