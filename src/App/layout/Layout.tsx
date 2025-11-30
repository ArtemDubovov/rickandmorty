import React from "react";

import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";

interface LayoutProps {
    page: React.ReactElement
}

function Layout({page}: LayoutProps) {
    return(
        <>
            <Header />
            {page}
            <Footer />
        </>
    )
}

export default Layout;