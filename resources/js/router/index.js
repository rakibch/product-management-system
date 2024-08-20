import { createRouter,createWebHistory} from 'vue-router';

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../front-end/pages/Home.vue'),
    },
    {
        path: "/about-us",
        name: "About",
        component: () => import('../front-end/pages/About.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;


