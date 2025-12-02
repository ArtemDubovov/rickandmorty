import {FC} from "react";

import { GetAllCharacters } from "../api/api";

import CardCharacter from "../../shared/ui/CardCharacter/CardCharacter";
import { allCharactersType } from "../api/types";

import './style.css';

const CardList: FC = () => {
    const {loading, error, info, result} = GetAllCharacters();
    return(
        <div className="card_list">
            {result && result.map((character: allCharactersType) => <CardCharacter character={character}/>)}
        </div>
    )
}

export default CardList;