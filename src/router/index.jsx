import {
    createBrowserRouter,
} from "react-router-dom";
import Default from "../layouts/default";
import Home from "../pages/Home";
import Category from "../pages/Category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default><Home /></Default>
    },
    {
        path: "/category",
        element: <Default><Category /></Default>
    }
]);

export default router