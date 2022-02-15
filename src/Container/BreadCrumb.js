import React from "react";
import "./Styles/BreadCrumb.scss";


export default function BreadCrumb(props) {

    return (
        <>
            <section className="PageTop">
                <div className="row ReverseMobile">
                    <div className="col-sm-6 paragraphe">
                        <h4 className="title">{props.title}</h4>
                        <h3>
                            {props.paragraphe}
                        </h3>
                    </div>
                    <div className="col-sm-6 feat">
                        <img src={props.image} alt="" />
                    </div>
                </div>
               
            </section>


        </>
    );
}