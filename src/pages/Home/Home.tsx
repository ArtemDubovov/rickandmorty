import { FC, useEffect, useState } from "react";

import CardList from "../../widgets/CardList";
import Pagination from "../../widgets/Pagination";
import TagList from "../../widgets/TagList";

import './styles/style.css';
import useStoreApp from "../../App/providers/store";
import { GetAllCharacters } from "../../entities/api";
import Loader from "../../shared/ui/Loader";
import { IDataCharacter } from "../../entities/types/types";
import ErrorMessage from "../../shared/ui/ErrorMessage";

const Home: FC = () => {
    const {tags, page, searchInputStore, updatePageCount} = useStoreApp();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [characters, setCharacters] = useState({} as IDataCharacter);
    useEffect(() => {
        setIsLoading(true);
        const asyncFetch = async () => {
            const {error, data} = await GetAllCharacters(String(page), [...tags, {name: 'name', value: searchInputStore}]); // Favor or all
            if (error) {
                setError(error.message);
                return;
            }
            setCharacters(data?.characters);
            updatePageCount(data?.characters.info.pages);
            setIsLoading(false);
        }
        asyncFetch();

    }, [tags, page, searchInputStore, updatePageCount])
    
    useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tags, searchInputStore]);

    return(
        <div className="page-home">
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error}/>}
            <Pagination />
            <TagList />
            {characters && <CardList characters={characters.results} favor={false}/>}
        </div>
    )
}

export default Home;