import React, { useCallback, useState } from "react";

import CardList from "../../widgets/CardList/CardList";
import Pagination from "../../widgets/Pagination/Pagination";

function Home() {
    
    const [pages, setPages] = useState({
        prev: 0,
        current: 1,
        next: 2,
    });
    
    const CBSetPages = useCallback(setPages, [setPages]);

    return(
        <div>
            <Pagination pages={pages} setPages={CBSetPages}/>
            <CardList page={pages.current}/>
        </div>
    )
}

export default Home;