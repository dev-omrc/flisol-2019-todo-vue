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
    getTasks() {
        return apiClient.get("/task", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
    },
    getTask(task) {
        return apiClient.get(`/task/${task.id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
    },
    createTask(task) {
        return apiClient.post("/task", task, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
    },
    updateTask(task) {
        return apiClient.put(`/task/${task.id}`, task, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
    },
    deleteTask(task) {
        return apiClient.delete(`/task/${task.id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
    }
};
