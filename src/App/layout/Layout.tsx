import React from "react";

import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";

import './style.css';
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";


interface LayoutProps {
    page: React.ReactElement
}

const LINKS = [
	{
		path: "/",
        name: 'Home'
	},
    {
		path: "/favorites",
        name: 'Favorites'
	},
];

function Layout({page}: LayoutProps) {
    return(
        <div className="layout">
            <Header links={LINKS}/>
            {page}
            <Footer />
        </div>
    )
}

export default Layout;