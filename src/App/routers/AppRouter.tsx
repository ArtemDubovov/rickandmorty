import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import CardInfo from "../../pages/Character";
import Error from "../../pages/Error";
import Layout from "../layout/Layout";
import Favorites from "../../pages/Favorites";

const ROUTERS = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/card/:id",
		element: <CardInfo />,
	},
    {
		path: "/favorites",
		element: <Favorites />,
	},
    {
		path: "/*",
		element: <Error />,
	},
];

function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                {
                    ROUTERS.map(r =>
                        <Route
                            key={r.path}
                            path={r.path}
                            element={<Layout page={r.element}/>}
                        />
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;