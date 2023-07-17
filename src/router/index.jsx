import {
    createBrowserRouter,
} from "react-router-dom";
import Default from "@/layouts/default";
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import Cart from "@/pages/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />, 
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/category",
                element: <Category />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
]);

export default router