import Vue from "vue";
import App from "./App.vue";
import "./../node_modules/bulma/css/bulma.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
import {
    faPlus,
    faClock,
    faCheck,
    faTrash
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

library.add([faPlus, faClock, faCheck, faTrash]);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
