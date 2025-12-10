interface IButtonFavoriteProps {
    isFavorite: boolean;
    id: number;
    onPress: (value: boolean, id: number) => void;
}

export type {IButtonFavoriteProps};