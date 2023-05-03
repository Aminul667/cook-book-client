import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/Home";
import ChefRecipes from "../components/ChefRecipes";
import Recipe from "../components/Recipe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b710-chef-recipe-server.vercel.app/chefs')
            },
            {
                path: ':id',
                element: <ChefRecipes></ChefRecipes>,
                loader: ({params}) => fetch(`https://b710-chef-recipe-server.vercel.app/chefs/${params.id}`)
            },
            {
                path: 'recipe/:id',
                element: <Recipe></Recipe>,
                loader: ({params}) => fetch(`https://b710-chef-recipe-server.vercel.app/chefs/recipe/${params.id}`)
            }
        ]
    }
])

export default router;