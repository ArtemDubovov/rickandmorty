import React from 'react';

import './style/style.css';
import CardList from "../../widgets/CardList/CardList";


const Favorites = () => {
    return(
        <div className='page'>
            <CardList favor={true}/>
        </div>
    )
}

export default Favorites;