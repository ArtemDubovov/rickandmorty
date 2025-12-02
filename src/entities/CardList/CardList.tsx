import {FC} from "react";

import { GetAllCharacters } from "../api/api";

import Card from "../../shared/ui/Card/Card";
import { allCharactersType } from "../api/types";

import './style.css';

const CardList: FC = () => {
    const {loading, error, data} = GetAllCharacters();
    console.log(data?.characters.results);
    return(
        <div className="card_list">
            {data?.characters.results && data.characters.results.map((character: allCharactersType) => <Card character={character} />)}
        </div>
    )
}

export default CardList;