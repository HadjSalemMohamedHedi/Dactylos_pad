import http from "../Http_Common";


const Login = (email, password) => {
    return http.post("/LogIn/", { email: email, password: password });
}

const Regiter = (email, password, nom, prenom, adresse, ville) => {
    return http.post("/Regiter/",
        {
            email: email,
            password: password,
            nom: nom,
            prenom: prenom,
            adresse: adresse,
            ville: ville,

        });
}

const getsession = ()=>{
    return http.get('/isuserAuth');
}


const ResetPass = (email) => {
    return http.post('/ResetPassword',{
        email:email
    });
}




const Authentification = {
    Login,
    Regiter,
    getsession,
    ResetPass
};
export default Authentification;

