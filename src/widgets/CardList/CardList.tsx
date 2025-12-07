import {FC, useState, useEffect, memo} from "react";

import { GetAllCharacters, GetCharactersByID } from "../../entities/api/api";
import Card from "../../entities/Card/Card";
import { allCharactersType } from "../../entities/api/types";
import Loader from "../../shared/ui/Loader/Loader";
import useStoreApp from "../../App/providers/store";
import { removeID } from "../../features/removeID";

import './style.css';
import SearchInput from "../../shared/ui/SearchInput/SearchInput";

interface CardListProps {
    favor?: boolean
}

const TIMER_INPUT = 1000;

const CardList: FC<CardListProps> = ({favor = false}) => {
    const {favorites, addFavorites, removeFavorites, resetPage, updatePageCount, tags, page, setSearchInputStore, searchInputStore} = useStoreApp();
    const [searchValue, setSearchValue] = useState(searchInputStore);
    const {loading, data} = favor ? GetCharactersByID(favorites) : GetAllCharacters(String(page), [...tags, {name: 'name', value: searchValue}]); // Favor or all
    const [favoritesState, setFavoritesState] = useState(favorites);

    const updateSearchValue = () => { // Задерка при ввода в инпутbya
        let timerID: ReturnType<typeof setTimeout> = setTimeout(() => {}); 
        return (value: string) => {
            if (timerID) {
                clearTimeout(timerID);
            }
            timerID = setTimeout(() => {
                resetPage();
                setSearchValue(value);
                setSearchInputStore(value);
            }, TIMER_INPUT);
        }
    }

    const updateSearchValueT = updateSearchValue();

    const addFavoriteState = (id: string) => {
        addFavorites(+id);
        setFavoritesState([...favoritesState, +id]);
    }
    const removeFavoriteState = (id: string) => {
        removeFavorites(+id);
        setFavoritesState(removeID(favoritesState, +id));
    }

    const characters = favor ? data?.charactersByIds : data?.characters.results;
    
    useEffect(() => {
        if (!loading && !favor && data) {
            updatePageCount(data.characters.info.pages);
        }
    }, [loading])


    return(
        <>
            {!favor && <SearchInput defaultValue={searchInputStore} updateSearchValue={updateSearchValueT}/>}
            <div className="card_list">
                {loading && <Loader />}
                {favor && favoritesState.length === 0 && <div>No characters.</div>}
                {characters && characters.map((character: allCharactersType) =>
                    <Card
                        addFavorites={addFavoriteState}
                        removeFavorites={removeFavoriteState}
                        key={character.id}
                        character={character}
                        isFavorite={favoritesState.includes(+character.id)}
                    />)}
            </div>
        </>
    )
}

export default memo(CardList);