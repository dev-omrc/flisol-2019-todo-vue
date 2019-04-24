import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Task from "./views/Task.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            beforeEnter(to, from, next) {
                if (!localStorage.getItem("auth")) {
                    next();
                } else {
                    next("/");
                }
            }
        },
        {
            path: "/tasks",
            name: "task",
            component: Task,
            beforeEnter(to, from, next) {
                if (localStorage.getItem("auth")) {
                    next();
                } else {
                    next("login");
                }
            }
        }
    ]
});
