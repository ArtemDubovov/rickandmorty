import Error from "../../pages/Error";
import Favorites from "../../pages/Favorites";
import Home from "../../pages/Home";
import Character from "../../pages/Character";

const ROUTERS = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/card/:id",
		element: <Character />,
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

export {ROUTERS};