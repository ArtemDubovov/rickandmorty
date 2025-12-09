import {FC} from "react";

import Button from "../../../shared/ui/Buttons/ButtonLink/ButtonLink";
import ButtonFavorite from "../../../shared/ui/Buttons/ButtonFavorite/ButtonFavorite";
import { ICardProps } from "./types";

import './styles/style.css';

const Card: FC<ICardProps> = ({character, isFavorite}) => {
    const {name, image, id} = character;
    const URL_CARD = `/card/${id}`;
    return(
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <div className="card_button-wrapper">
                <Button text='More' link={URL_CARD}/>
                <ButtonFavorite id={id} isFavorite={isFavorite}/>
            </div>

        </div>       
    )
}

export default Card;