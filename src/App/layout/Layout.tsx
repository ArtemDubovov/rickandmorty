import React, { FC, PropsWithChildren, ReactNode } from 'react'

import Header from 'widgets/Header'
import Footer from 'widgets/Footer'
import { LINKS } from './const'

import './style.css'

const Layout: FC<PropsWithChildren<{ page: ReactNode }>> = ({ page }) => {
    return (
        <div className="layout">
            <Header links={LINKS} />
            {page}
            <Footer />
        </div>
    )
}

export default Layout
