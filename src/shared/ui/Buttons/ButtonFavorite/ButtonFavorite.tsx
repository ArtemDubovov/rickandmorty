import {FC, useState} from "react";
import useStoreApp from "../../../../App/providers/store";
import { IButtonFavoriteProps } from "./types";

import './styles/style.css';

/* -------------------------------------------------------------------------- */
/*                           Добавить пропс onPress                           */
/* -------------------------------------------------------------------------- */
const ButtonFavorite: FC<IButtonFavoriteProps> = ({isFavorite, id}) => {
    const [favorite, setFavorite] = useState(isFavorite);
    // const {addFavorites, removeFavorites} = useStoreApp(); // Норм? Или лучше в shared прокидывать пропсами

    /* -------------------------------------------------------------------------- */
    /*                                 useCallback                                */
    /* -------------------------------------------------------------------------- */
    const handleClick = () => {
        setFavorite((prev) => !prev);
        if (!favorite) {
            addFavorites(+id);
        } else {
            removeFavorites(+id);
        }
    }

    return(
        <button
            className={isFavorite ? 'favorite-btn--enable' : 'favorite-btn--disable'}
            onClick={handleClick}>
        </button>
    )
}

export default ButtonFavorite;