import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Agence from "../pages/Agence";

export interface RouteConfig {
    path: string;
    component: React.ComponentType;
    title: string;
}

export const routes: RouteConfig[] = [
    {
        path: '/',
        component: Home,
        title: 'Home'
    },
    {
        path: '/agence',
        component: Agence,
        title: 'Agence'
    },
    {
        path: '/projects',
        component: Projects,
        title: 'Projects'
    }
];