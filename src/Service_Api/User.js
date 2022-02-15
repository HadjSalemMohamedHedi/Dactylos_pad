import http from "../Http_Common";


const testroute = (email,password) => {
    return http.get("/testroute/");
}


const Testing = {
    testroute
};
export default Testing;

