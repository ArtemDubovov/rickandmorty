import { FC, useState, useEffect } from "react";

import Card from "../../entities/Card";
import Loader from "../../shared/ui/Loader/Loader";
import useStoreApp from "../../App/providers/store";
import InputSearch from "../../shared/ui/InputSearch";

import { GetAllCharacters, GetCharactersByID } from "../../entities/api";
import { IAllCharactersType } from "../../entities/api/types";
import { ICardListProps } from "./types";

import './styles/style.css';

const DELAY_INPUT = 1000;

const CardList: FC<ICardListProps> = ({favor = false}) => {

    const {favorites, resetPage, updatePageCount, tags, page, setSearchInputStore, searchInputStore} = useStoreApp();
    const [searchValue, setSearchValue] = useState(searchInputStore);
    const {loading, data} = favor ? GetCharactersByID(favorites) : GetAllCharacters(String(page), [...tags, {name: 'name', value: searchValue}]); // Favor or all

    const updateSearchValue = () => { // Задерка при вводе в инпут
        let timerID: ReturnType<typeof setTimeout> = setTimeout(() => {}); 
        return (value: string) => {
            if (timerID) {
                clearTimeout(timerID);
            }
            timerID = setTimeout(() => {
                resetPage();
                setSearchValue(value);
                setSearchInputStore(value);
            }, DELAY_INPUT);
        }
    }

    const updateSearchValueT = updateSearchValue();

    const characters = favor ? data?.charactersByIds : data?.characters.results;
    
    useEffect(() => {
        if (!loading && !favor && data) {
            updatePageCount(data.characters.info.pages);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, tags])


    return(
        <>
            {!favor && <InputSearch defaultValue={searchInputStore} updateSearchValue={updateSearchValueT}/>}
            <div className="card_list">
                {loading && <Loader />}
                {favor && favorites.length === 0 && !loading && <div>No characters.</div>}
                {characters && characters.map((character: IAllCharactersType) =>
                    <Card
                        key={character.id}
                        character={character}
                        isFavorite={favorites.includes(+character.id)}
                    />)}
            </div>
        </>
    )
}

export default CardList;