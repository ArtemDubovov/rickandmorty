import {FC} from "react";


import { GetCharacter } from "../api/api";

import './style.css';
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage";
import Loader from "../../shared/ui/Loader/Loader";

interface CharacterInfoProps {
    id: string
}

const CharacterInfo: FC<CharacterInfoProps> = ({id}) => {
    if (!id) {
        return <></>;
    }
    const {loading, error, data} = GetCharacter(id);
    const character = data?.character;

    return(
        <>
            {loading && <Loader />}
            {error && <ErrorMessage message={error.message}/>}
            {character && 
                <div className="character_info">
                    <img src={character.image} alt={character.name}/>
                    <div className="character_info_content_wrapper">
                        <h2>{character.name}</h2>
                        <p>Created: {character.created}</p>
                        <p>Status: {character.status}</p>
                        <p>Location: {character.location.name}</p>
                        <p>Episode amount: {character.episode.length}</p>
                    </div>
                    
                    
                </div>
            }            
        </>
    )
}

export default CharacterInfo;