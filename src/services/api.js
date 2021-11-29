import axios from "axios";

const BASE_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://metamorfose.herokuapp.com";

function postSignIn(body) {
    return axios.post(`${BASE_URL}/sign-in`, body);
}

function postSignUp(body) {
    body.type = "trans";

    return axios.post(`${BASE_URL}/sign-up`, body);
}

function signOut(config) {
    return axios.delete(`${BASE_URL}/session`, config);
}
export { postSignIn, postSignUp, signOut };
