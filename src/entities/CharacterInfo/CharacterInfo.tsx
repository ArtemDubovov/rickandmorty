import {FC} from "react";

import './style.css';
import { GetCharacter } from "../api/api";
import Button from "../../shared/ui/Button/ButtonLink";

interface CharacterInfoProps {
    id: string
}

const CharacterInfo: FC<CharacterInfoProps> = ({id}) => {
    console.log(id);
    if (!id) {
        return <></>;
    }
    const {loading, error, data} = GetCharacter(+id);
    const character = data?.character;
    return(
        <>
            {character && 
                <>
                    <h3>{character.name}</h3>
                    <p>Created: {character.created}</p>
                    <p>Status: {character.status}</p>
                    <img src={character.image} alt={character.name}/>
                </>
            }            
        </>
    )
}

export default CharacterInfo;