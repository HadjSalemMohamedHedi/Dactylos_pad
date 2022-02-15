import React from "react";
import "./StylesPages/Home.scss";

export default function Home() {


    return (
        <>

            <section className="TopHome myContent">
                <div className="container">
                    <div className="row ReverseMobile">
                        <div className="col-md-4">
                            <h1> The best way to find your home </h1>
                            <h6>With over 700,000 active listings, Realtyspace has the largest inventory of apartments in the United States.</h6>
                            <span className="getstarted">Get Started</span>
                        </div>
                        <div className="col-md-8 BanierImage">
                            <img src="assets/img/Banniers/bii.png" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}