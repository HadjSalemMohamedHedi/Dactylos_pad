import React from 'react'
import dic from "./Dictionnaire";


let lang = localStorage.getItem("Language");


if ((lang !== "Fr") && (lang !== "En")) {
    lang = "Fr";

}

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

const createAccount = React.lazy(() =>
    import("../Pages/CreateAccount")
);

const TestRedux = React.lazy(() =>
    import("../Pages/TestRedux")
);

const routes = [
    {
        path: "/",
        exact: true,
        name: dic[lang].nav1,
        component: Home,
        nave: "false"
    },
    {
        path: "/Home",
        exact: true,
        name: dic[lang].nav1,
        component: Home,
        nave: "true"
    },
    {
        path: "/AboutUs",
        exact: true,
        name: dic[lang].nav2,
        component: AboutUs,
        nave: "true"
    },

    {
        path: "/Fonctionnalites",
        exact: true,
        name: dic[lang].nav3,
        component: Fonctionnalites,
        nave: "true"
    },
    {
        path: "/EspaceClient",
        exact: true,
        name: dic[lang].nav4,
        component: EspaceClient,
        nave: "true"
    },
    {
        path: "/Offres",
        exact: true,
        name: dic[lang].nav5,
        component: Offres,
        nave: "true"        
    },
    {
        path: "/Actualites",
        exact: true,
        name: dic[lang].nav6,
        component: Actualites,
        nave: "true"
    },
    {
        path: "/Contact",
        exact: true,
        name: dic[lang].nav7,
        component: Contact,
        nave: "true"
    },

    {
        path: "/TestRedux",
        exact: true,
        name: "TestRedux",
        component: TestRedux,
        nave: "false"
    },
    {
        path: "/Login",
        exact: true,
        name: dic[lang].Login,
        component: Login,
        nave: "false"
    },
    {
        path: "/createAccount",
        exact: true,
        name: dic[lang].createAccount,
        component: createAccount,
        nave: "false"
    },


    


]

export default routes;
