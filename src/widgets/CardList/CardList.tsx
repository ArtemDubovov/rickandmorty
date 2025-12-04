import {FC, memo, useState} from "react";

import { GetAllCharacters } from "../../entities/api/api";

import Card from "../../entities/Card/Card";
import { allCharactersType } from "../../entities/api/types";

import Loader from "../../shared/ui/Loader/Loader";
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage";
import useStoreApp from "../../App/providers/store";
import { removeID } from "../../features/removeID";

import './style.css';

interface CardListProps {
    page: number,
    favor?: boolean
}

const CardList: FC<CardListProps> = ({page, favor = false}) => {
    const {loading, error, data} = GetAllCharacters(String(page));
    const {favorites, addFavorites, removeFavorites} = useStoreApp((state) => state);
    const [favoritesState, setFavoritesState] = useState(useStoreApp((state) => state.favorites));
    const addFavoriteState = (id: string) => {
        console.log(favoritesState);
        addFavorites(+id);
        setFavoritesState([...favoritesState, +id]);
    }
    const removeFavoriteState = (id: string) => {
        console.log(id);
        removeFavorites(+id);
        setFavoritesState(removeID(favoritesState, +id));
    }
    return(
        <div className="card_list">
            {loading && <Loader />}
            {error && <ErrorMessage message={error.message}/>}
            {data?.characters.results && data.characters.results.map((character: allCharactersType) => <Card addFavorites={addFavoriteState} removeFavorites={removeFavoriteState} key={character.id} character={character} isFavorite={favoritesState.includes(+character.id)}/>)}
        </div>
    )
}

export default memo(CardList);