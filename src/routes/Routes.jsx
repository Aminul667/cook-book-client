import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/Home";
import ChefRecipes from "../components/ChefRecipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefs')
            },
            {
                path: ':id',
                element: <ChefRecipes></ChefRecipes>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;