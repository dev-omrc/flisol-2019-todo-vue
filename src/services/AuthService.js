import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://todo.test/api",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

export default {
    login(user) {
        return apiClient.post("/auth/login", user, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
    },
    logout() {
        return apiClient.post("/auth/logout", [], {
            headers: {
                Authorization: localStorage.getItem("token"),
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
};
