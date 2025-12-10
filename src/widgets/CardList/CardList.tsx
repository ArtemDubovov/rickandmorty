import { FC, useCallback } from "react";

import { debounce } from "lodash";
import Card from "../../entities/ui/Card";
import useStoreApp from "../../App/providers/store";
import InputSearch from "../../shared/ui/InputSearch";

import { ICardListProps } from "./types";

import './styles/style.css';

const DELAY_INPUT = 1000;

const CardList: FC<ICardListProps> = ({characters, favor}) => {
    const {favorites, resetPage, setSearchInputStore, searchInputStore} = useStoreApp();
    const debounceUpdateSearch = debounce((value: string) => { // Задерка при вводе в инпут
            resetPage();
            setSearchInputStore(value);
        }, DELAY_INPUT);

    const debounceUpdateSearchCB = useCallback(debounceUpdateSearch, [debounceUpdateSearch]);

    return(
        <>
            {!favor && <InputSearch defaultValue={searchInputStore} updateSearchValue={debounceUpdateSearchCB}/>}
            <div className="card_list">
                {characters && characters.length === 0 && <div>No characters.</div>}
                {characters && characters.map((character) =>
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