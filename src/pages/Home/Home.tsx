import React, { useCallback, useState, useEffect } from "react";
import { useFetch } from "../../shared/api/api";
import useStoreApp, {IStoreApp} from "../../App/providers/store";
import { GET_INFO_PAGE } from "../../entities/api/query";

import CardList from "../../widgets/CardList/CardList";
import Pagination from "../../widgets/Pagination/Pagination";

function Home() {
    const {loading, error, data} = useFetch(GET_INFO_PAGE());
    const {updatePageCount, page} = useStoreApp((state: IStoreApp) => state);
    
    useEffect(() => { // Установлено кол-во страниц в глобальный стор
        if (!loading && data) {
            updatePageCount(data.characters.info.pages);
        }
    }, [loading, data, updatePageCount]);

    return(
        <div>
            <Pagination />
            <CardList page={page}/>
        </div>
    )
}

export default Home;