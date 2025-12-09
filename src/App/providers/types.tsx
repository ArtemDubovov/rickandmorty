type IStoreApp = {
    page: number;
    pageCount: number;
    favorites: Array<number>;
    searchInputStore: string;
    tags: {name: string, value: string, keys?: string[]}[],
    setSearchInputStore: (input: string) => void;
    incrPage: () => void;
    decrPage: () => void;
    resetPage: () => void;
    updatePage: (newPage: number) => void;
    updatePageCount: (count: number) => void;
    removeFavorites: (id: number) => void;
    addFavorites: (id: number) => void;
    updateTag: (name: string, value: string) => void;
}

export type {IStoreApp};