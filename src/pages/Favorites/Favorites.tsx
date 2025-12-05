import React, {useEffect} from "react";

import './style/style.css';
import CardList from "../../widgets/CardList/CardList";
import { useFetch } from "../../shared/api/api";
import useStoreApp, { IStoreApp } from "../../App/providers/store";
import { GET_INFO_PAGE } from "../../entities/api/query";

const Favorites = () => {
    return(
        <div>
            {/* <Pagination /> */}
            <CardList favor={true}/>
        </div>
    )
}

export default Favorites;