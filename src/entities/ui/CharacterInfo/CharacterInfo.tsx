import {FC, memo} from "react";

import { ICharacterInfoProps } from "./types";

import './styles/style.css';

const CharacterInfo: FC<ICharacterInfoProps> = ({characterData}) => {
    return(
        <>
            <div className="character_info">  
                <img src={characterData.image} alt={characterData.name}/>
                <div className="character_info_content_wrapper">
                    <h2>{characterData.name}</h2>
                    <p>Created: {String(new Date(characterData.created).toLocaleString('en'))}</p>
                    <p>Status: {characterData.status}</p>
                    <p>Episode amount: {characterData.episode?.length}</p>
                </div>
            </div>          
        </>
    )
}

export default memo(CharacterInfo);