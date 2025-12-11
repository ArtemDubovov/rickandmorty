export interface IEpisode {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    created: string;
}

export interface IInfo {
    count: number;
    pages: number;
    next: number;
    prev: number;
}


export interface ICharacter {
    id: number;
    name: string;
    status: string;
    type: string;
    gender: string;
    image: string;
    created: string;
    episode: IEpisode[];
}

export interface IDataCharacter {
    info: IInfo;
    results: ICharacter[];
}

export interface IDataCharacters {
    characters: IDataCharacter;
}

export interface IAllCharactersType {
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

export interface IDataCharacterByIDs {
    charactersByIds: ICharacter[]
}
