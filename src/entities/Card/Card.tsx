import {FC} from "react";

import { allCharactersType } from "../api/types";

import './style.css';
import Button from "../../shared/ui/ButtonLink/ButtonLink";


interface CardProps {
    character: allCharactersType,
}

const Card: FC<CardProps> = ({character}) => {
    const {name, image, id} = character;
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