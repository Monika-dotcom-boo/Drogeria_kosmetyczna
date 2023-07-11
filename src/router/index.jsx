import {
    createBrowserRouter,
} from "react-router-dom";
import Default from "../layouts/default";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default><Home /></Default>
    },
    {
        path: "/category",
        element: <Default><Category /></Default>
    },
    {
        path: "/cart",
        element: <Default><Cart /></Default>
    }
]);

export default router