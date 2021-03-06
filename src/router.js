import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

//eslint-disable-next-line
const router = new VueRouter({ 
    mode: "history",
    routes: [
        {
            path: "/:id", 
            component: Home,
        },
        {
            path: "/about",
            component: About
        },
    ]
});

export default router;
