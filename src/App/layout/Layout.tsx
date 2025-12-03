import React from "react";

import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";

import './style.css';

interface LayoutProps {
    page: React.ReactElement
}

function Layout({page}: LayoutProps) {
    return(
        <div className="layout">
            <Header />
            {page}
            <Footer />
        </div>
    )
}

export default Layout;