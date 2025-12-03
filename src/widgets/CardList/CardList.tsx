import {FC, memo} from "react";

import { GetAllCharacters } from "../../entities/api/api";

import Card from "../../entities/Card/Card";
import { allCharactersType } from "../../entities/api/types";

import './style.css';
import Loader from "../../shared/ui/Loader/Loader";

interface CardListProps {
    page: number
}

const CardList: FC<CardListProps> = ({page}) => {
    const {loading, error, data} = GetAllCharacters(String(page));
    return(
        
        <div className="card_list">
            {loading && <Loader />}
            {data?.characters.results && data.characters.results.map((character: allCharactersType) => <Card key={character.id} character={character} />)}
        </div>
    )
}

export default memo(CardList);