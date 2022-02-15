import React from "react";
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const TheContent = () => {
    
    const PageNotFount = React.lazy(() =>
        import("./PageNotFount")
    );

    const Home = React.lazy(() =>
        import("../Pages/Home")
    );

    const AboutUs = React.lazy(() =>
        import("../Pages/Abous-us")
    );

    const Contact = React.lazy(() =>
        import("../Pages/Contact")
    );

    const Fonctionnalites = React.lazy(() =>
        import("../Pages/Fonctionnalites")
    );
    const EspaceClient = React.lazy(() =>
        import("../Pages/EspaceClient")
    );

    const Offres = React.lazy(() =>
        import("../Pages/Offres")
    );


    const Actualites = React.lazy(() =>
        import("../Pages/Actualites")
    );

    const Login = React.lazy(() =>
        import("../Pages/Login")
    );

    const CreateAccount = React.lazy(() =>
        import("../Pages/CreateAccount")
    );


    const Resetpass = React.lazy(() =>
        import("../Pages/Resetpass")
    );


    const TestRedux = React.lazy(() =>
        import("../Pages/TestRedux")
    );

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/AboutUs" element={<AboutUs />} />
                <Route exact path="/Fonctionnalites" element={<Fonctionnalites />} />
                <Route exact path="/EspaceClient" element={<EspaceClient />} />
                <Route exact path="/Offres" element={<Offres />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/TestRedux" element={<TestRedux />} />
                <Route exact path="/Login" element={<Login />} />
                {/* <Route exact path="/Actualites" element={<Actualites />} /> */}
                <Route exact path="/CreateAccount" element={<CreateAccount />} />
                <Route exact path="/Resetpass" element={<Resetpass />} />
                <Route path="*" element={<PageNotFount />}  />
                <PrivateRoute
                    path="/Actualites"
                    name="Actualites"
                    component={<Actualites />}
                    
                />
            </Routes>
        </>
    );
}

export default TheContent;