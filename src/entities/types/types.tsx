
/* -------------------------------------------------------------------------- */
/*                       Добавить типизация для episode                       */
/* -------------------------------------------------------------------------- */
interface IAllCharactersType {
    name: string,
    image: string,
    created: string,
    episode: [],
    species: string,
    status: string,
    gender: string,
    id: string,
    location: {
        name: string,
    },

}

export type {IAllCharactersType};