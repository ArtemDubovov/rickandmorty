import { FC, useState, useEffect, useCallback } from "react";

import { debounce } from "lodash";
import Card from "../../entities/ui/Card";
import Loader from "../../shared/ui/Loader/Loader";
import useStoreApp from "../../App/providers/store";
import InputSearch from "../../shared/ui/InputSearch";

import { GetAllCharacters, GetCharactersByID } from "../../entities/api";
import { IAllCharactersType } from "../../entities/types/types";
import { ICardListProps } from "./types";

import './styles/style.css';

const DELAY_INPUT = 1000;

const CardList: FC<ICardListProps> = ({favor = false}) => {

    const {favorites, resetPage, updatePageCount, tags, page, setSearchInputStore, searchInputStore} = useStoreApp();
    const [searchValue, setSearchValue] = useState(searchInputStore);
    /* -------------------------------------------------------------------------- */
    /*                      Использование хуков через условия                     */
    /* -------------------------------------------------------------------------- */
    const {loading, data} = favor ? GetCharactersByID(favorites) : GetAllCharacters(String(page), [...tags, {name: 'name', value: searchValue}]); // Favor or all

    const updateSearchValue = useCallback((value: string) => {
        debounce(() => { // Задерка при вводе в инпут
            resetPage();
            setSearchValue(value);
            setSearchInputStore(value);
        }, DELAY_INPUT);
    }, [resetPage, setSearchInputStore, setSearchValue]);


    /* -------------------------------------------------------------------------- */
    /*                                     ???                                    */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                   useMemo                                  */
    /* -------------------------------------------------------------------------- */
    const characters = favor ? data?.charactersByIds : data?.characters.results;
    
    useEffect(() => {
        if (!loading && !favor && data) {
            updatePageCount(data.characters.info.pages);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, tags])


    return(
        <>
            {!favor && <InputSearch defaultValue={searchInputStore} updateSearchValue={updateSearchValue}/>}
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