import React, { FC } from "react";

import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";

import { LINKS } from "./const";
import { ILayoutProps } from "./types";

import './style.css';

const Layout: FC<ILayoutProps> = ({page}) => {
    return(
        <div className="layout">
            <Header links={LINKS}/>
            {page}
            <Footer />
        </div>
    )
}

export default Layout;