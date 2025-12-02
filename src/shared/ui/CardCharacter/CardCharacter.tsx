import {FC} from "react";

import { allCharactersType } from "../../../entities/api/types";

import './style.css';

interface CardProps {
    character: allCharactersType
}

const CardCharacter: FC<CardProps> = ({character}) => {

    return(
        <div className="card">
            <h3>{character.name}</h3>
            <p>Created: {character.created}</p>
            <p>Status: {character.status}</p>
            <img src={character.image} alt={character.name}/>
        </div>
    )
}

export default CardCharacter;