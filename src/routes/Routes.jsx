import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
// import Home from "../components/Home";
import ChefRecipes from "../components/ChefRecipes";
import Recipe from "../components/Recipe";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Blog from "../components/Blog";
import PrivateRoute from "../providers/PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import { Suspense, lazy } from "react";
import { FadeLoader } from "react-spinners";

const Home = lazy(() => import('../components/Home'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<FadeLoader color="#36d7b7"/>}><Home></Home></Suspense>,
                loader: () => fetch('https://b710-chef-recipe-server.vercel.app/chefs')
            },
            {
                path: ':id',
                element: <ChefRecipes></ChefRecipes>,
                loader: ({params}) => fetch(`https://b710-chef-recipe-server.vercel.app/chefs/${params.id}`)
            },
            {
                path: 'recipe/:id',
                element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
                loader: ({params}) => fetch(`https://b710-chef-recipe-server.vercel.app/chefs/recipe/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Registration></Registration>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;