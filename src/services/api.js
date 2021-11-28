import axios from "axios";

const BASE_URL = "http://localhost:4000";

function postSignIn(body) {
    return axios.post(`${BASE_URL}/sign-in`, body);
}

export {
    postSignIn,
};
