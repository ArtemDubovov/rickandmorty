import { FC, useCallback } from 'react'
import { IButtonFavoriteProps } from './types'

import './styles/style.css'

const ButtonFavorite: FC<IButtonFavoriteProps> = ({
    isFavorite,
    id,
    onPress,
}) => {
    const handleClick = useCallback(() => {
        onPress(!isFavorite, id)
    }, [onPress, id, isFavorite])

    return (
        <button
            className={
                isFavorite ? 'favorite-btn--enable' : 'favorite-btn--disable'
            }
            onClick={handleClick}
        ></button>
    )
}

export default ButtonFavorite
