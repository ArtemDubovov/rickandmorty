import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CardInfo from "../../pages/CardInfo";

function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/card" element={<CardInfo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;