import {FC, memo} from "react";

import { GetCharacter } from "../api/api";
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage";
import Loader from "../../shared/ui/Loader/Loader";

import './styles/style.css';

interface ICharacterInfoProps {
    id: string
}

const CharacterInfo: FC<ICharacterInfoProps> = ({id}) => {
    if (!id) {
        return <ErrorMessage message="ID is not correct."/>;
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

export default memo(CharacterInfo);