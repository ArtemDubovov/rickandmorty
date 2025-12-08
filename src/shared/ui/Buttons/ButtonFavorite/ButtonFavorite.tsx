import {FC, useState} from "react";

import './styles/style.css';
import useStoreApp from "../../../../App/providers/store";

interface IButtonFavoriteProps {
    isFavorite: boolean;
    id: string | number;
}

const ButtonFavorite: FC<IButtonFavoriteProps> = ({isFavorite, id}) => {
    const [favorite, setFavorite] = useState(isFavorite);
    const {addFavorites, removeFavorites} = useStoreApp(); // Норм? Или лучше в shared прокидывать пропсами
    
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