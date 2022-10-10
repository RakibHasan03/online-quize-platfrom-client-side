import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Topics from "../Topics/Topics";

const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            { path: 'home', element: <Home></Home> },
            {path: 'topics', element: <Topics></Topics>}

        ]
    },

])

export default router;