import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import CardInfo from "../../pages/CardInfo";
import Error from "../../pages/Error";

const routers = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/card",
		element: <CardInfo />,
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
                    routers.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
                }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;