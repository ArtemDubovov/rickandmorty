import { FC, useEffect, useState } from 'react';


import './styles/style.css';
import useStoreApp from 'App/providers/store';
import { GetCharactersByIDs } from 'entities/api';
import Loader from 'shared/ui/Loader';
import CardList from 'widgets/CardList';
import ErrorMessage from 'shared/ui/ErrorMessage/ErrorMessage';

const Favorites: FC = () => {
    const {favorites} = useStoreApp();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        const asyncFetch = async () => {
            const {error, data} = await GetCharactersByIDs(favorites);
            if (error) {
                setError(error.message);
                return;
            }
            setCharacters(data?.charactersByIds);
            setIsLoading(false);
        }
        asyncFetch();
    }, [favorites])
    return(
        <div className='page'>
            {error && <ErrorMessage message={error}/>}
            {isLoading && <Loader />}
            {characters && <CardList characters={characters} favor={true}/>}
        </div>
    )
}

export default Favorites;