import {FC} from "react";

import { IAllCharactersType } from "../api/types";
import Button from "../../shared/ui/Buttons/ButtonLink/ButtonLink";
import ButtonFavorite from "../../shared/ui/Buttons/ButtonFavorite/ButtonFavorite";

import './styles/style.css';

interface ICardProps {
    character: IAllCharactersType,
    isFavorite: boolean;
}

const Card: FC<ICardProps> = ({character, isFavorite}) => {
    const {name, image, id} = character;
    const url = `/card/${id}`;
    return(
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <div className="card_button-wrapper">
                <Button text='More' link={url}/>
                <ButtonFavorite id={id} isFavorite={isFavorite}/>
            </div>

        </div>       
    )
}

export default Card;