import { FC } from 'react';

import CardList from "../../widgets/CardList";

import './styles/style.css';

const Favorites: FC = () => {
    return(
        <div className='page'>
            <CardList favor={true}/>
        </div>
    )
}

export default Favorites;