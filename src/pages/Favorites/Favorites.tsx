import { FC } from 'react';

import CardList from "../../widgets/CardList";

import './styles/style.css';
import useStoreApp from '../../App/providers/store';
import { GetCharactersByID } from '../../entities/api';
import Loader from '../../shared/ui/Loader';

const Favorites: FC = () => {
    const {favorites} = useStoreApp();
    const {loading, data} = GetCharactersByID(favorites)
    return(
        <div className='page'>
            {loading && <Loader />}
            {data && <CardList characters={data.charactersByIds} favor={true}/>}
        </div>
    )
}

export default Favorites;