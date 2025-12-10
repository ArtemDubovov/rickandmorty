import {FC, useCallback} from "react";

import Button from "../../../shared/ui/Buttons/ButtonLink/ButtonLink";
import ButtonFavorite from "../../../shared/ui/Buttons/ButtonFavorite/ButtonFavorite";
import { ICardProps } from "./types";

import './styles/style.css';
import useStoreApp from "../../../App/providers/store";

const Card: FC<ICardProps> = ({character, isFavorite}) => {
    const {addFavorites, removeFavorites} = useStoreApp();
    const {name, image, id} = character;
    const URL_CARD = `/card/${id}`;
    const onPress = useCallback((value: boolean, id: number) => {
        if (value) {
            addFavorites(id);
        } else {
            removeFavorites(id);
        }
    }, [addFavorites, removeFavorites]);
    return(
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <div className="card_button-wrapper">
                <Button text='More' link={URL_CARD}/>
                <ButtonFavorite id={+id} onPress={onPress} isFavorite={isFavorite}/>
            </div>

        </div>       
    )
}

export default Card;