import {FC, useState} from "react";

import './style.css';
import useStoreApp from "../../../App/providers/store";

interface IButtonFavoriteProps {
    isFavorite: boolean;
    id: string;
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

const ButtonFavorite: FC<IButtonFavoriteProps> = ({isFavorite, id, addFavorite, removeFavorite}) => {
    const [favorite, setFavorite] = useState(isFavorite);
    return(
        <button className={isFavorite ? 'favorite-btn--enable' : 'favorite-btn--disable'} onClick={() => {
            if (favorite) {
                removeFavorite(id);
            } else {
                addFavorite(id);
            }
            setFavorite(!favorite);
        }}>
        </button>
    )
}

export default ButtonFavorite;