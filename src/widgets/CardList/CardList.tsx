import {FC, memo, useState, useEffect} from "react";

import { GetAllCharacters, GetCharactersByID } from "../../entities/api/api";
import Card from "../../entities/Card/Card";
import { allCharactersType } from "../../entities/api/types";
import Loader from "../../shared/ui/Loader/Loader";
import useStoreApp from "../../App/providers/store";
import { removeID } from "../../features/removeID";

import './style.css';
import SearchInput from "../../shared/ui/SearchInput/SearchInput";

interface CardListProps {
    page?: number,
    favor?: boolean
}

const CardList: FC<CardListProps> = ({page = 1, favor = false}) => {
    const {favorites, addFavorites, removeFavorites, resetPage, updatePageCount} = useStoreApp((state) => state);
    const [searchValue, setSearchValue] = useState('');
    const {loading, error, data} = favor ? GetCharactersByID(favorites) : GetAllCharacters(String(page), searchValue); // Favor or all
    const [favoritesState, setFavoritesState] = useState(useStoreApp((state) => state.favorites));

    const updateSearchValue = () => { // Задерка при ввода в инпутbya
        let timerID: ReturnType<typeof setTimeout> = setTimeout(() => {}); 
        return (value: string) => {
            if (timerID) {
                clearTimeout(timerID);
            }
            timerID = setTimeout(() => {
                resetPage();
                setSearchValue(value);
            }, 1000);
        }
    }

    const updateSearchValueT = updateSearchValue();

    const addFavoriteState = (id: string) => {
        console.log(favoritesState);
        addFavorites(+id);
        setFavoritesState([...favoritesState, +id]);
    }
    const removeFavoriteState = (id: string) => {
        removeFavorites(+id);
        setFavoritesState(removeID(favoritesState, +id));
    }

    const characters = favor ? data?.charactersByIds : data?.characters.results;
    
    useEffect(() => { 
        if (!loading && data && !favor) {// Установлено кол-во страниц в глобальный стор
            updatePageCount(+data.characters.info.pages); 
        }
    }, []);

    return(
        <>
            {!favor && <SearchInput updateSearchValue={updateSearchValueT}/>}
            <div className="card_list">
                {loading && <Loader />}
                {favor && favoritesState.length === 0 && <div>No characters.</div>}
                {characters && characters.map((character: allCharactersType) => <Card addFavorites={addFavoriteState} removeFavorites={removeFavoriteState} key={character.id} character={character} isFavorite={favoritesState.includes(+character.id)}/>)}
            </div>
        </>
    )
}

export default memo(CardList);