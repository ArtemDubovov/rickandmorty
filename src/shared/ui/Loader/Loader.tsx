import React from "react";
import { InfinitySpin } from "react-loader-spinner";

import './style.css';

function Loader() {
    return (
        <div className="spinner">
            <InfinitySpin
                width="200"
                color="#4fa94d"
            />
        </div>

    )
}

export default Loader;