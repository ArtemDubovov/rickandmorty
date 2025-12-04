import {FC} from "react";

import { allCharactersType } from "../api/types";

import './style.css';
import Button from "../../shared/ui/ButtonLink/ButtonLink";
import ButtonFavorite from "../../shared/ui/ButtonFavorite/ButtonFavorite";


interface CardProps {
    character: allCharactersType,
    isFavorite: boolean;
    addFavorites: (id: string) => void;
    removeFavorites: (id: string) => void;
}

const Card: FC<CardProps> = ({character, isFavorite, addFavorites, removeFavorites}) => {
    const {name, image, id} = character;
    const url = `/card/${id}`;
    return(
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <Button text='More' link={url}/>
            <ButtonFavorite addFavorite={addFavorites} removeFavorite={removeFavorites} id={id} isFavorite={isFavorite}/>
        </div>       
    )
}

export default Card;