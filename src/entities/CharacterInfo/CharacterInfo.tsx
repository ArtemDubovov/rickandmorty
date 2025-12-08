import {FC, memo} from "react";

import { GetCharacter } from "../api/api";
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage";
import Loader from "../../shared/ui/Loader/Loader";

import './styles/style.css';

const OPTIONS = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

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
                // Создать карточку в shared или норм в 
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