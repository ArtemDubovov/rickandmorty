import {FC, memo} from "react";

import { ICharacterInfoProps } from "./types";

import './styles/style.css';
import ErrorMessage from "../../../shared/ui/ErrorMessage";
import Loader from "../../../shared/ui/Loader";
import { GetCharacter } from "../../api";



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
                // Создать карточку в отдельно или норм в 
                <div className="character_info">  
                    <img src={character.image} alt={character.name}/>
                    <div className="character_info_content_wrapper">
                        <h2>{character.name}</h2>
                        <p>Created: {String(new Date(character.created).toLocaleString('en'))}</p>
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