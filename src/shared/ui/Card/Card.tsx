import {FC} from "react";

import { allCharactersType } from "../../../entities/api/types";

import './style.css';
import Button from "../Button/ButtonLink";

interface CardProps {
    character: allCharactersType,
}

const Card: FC<CardProps> = ({character}) => {
    const {name, created, status, image, id} = character;
    const url = `/card/${id}`;
    return(
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <Button text='More' link={url}/>
        </div>       
    )
}

export default Card;