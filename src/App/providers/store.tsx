import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { IStoreApp } from './types'
import { removeID, updateStatusTag } from 'helpers'

const useStoreApp = create<IStoreApp>()(
    persist(
        (set) => ({
            page: 1,
            pageCount: 0, // ?? нужно ли хранить? можно тянуть при загрузке страницы.
            favorites: [1, 2, 3, 4, 5, 6, 7, 8, 9], // Возможно лучше Set
            searchInputStore: '',
            tags: [
                {
                    name: 'status',
                    value: '',
                    keys: ['', 'alive', 'dead', 'unknown'],
                },
                {
                    name: 'gender',
                    value: '',
                    keys: ['', 'female', 'male', 'genderless', 'unknown'],
                },
            ],
            setSearchInputStore: (input: string) =>
                set(() => ({ searchInputStore: input })),
            incrPage: () =>
                set((state: IStoreApp) => ({ page: state.page + 1 })),
            decrPage: () =>
                set((state: IStoreApp) => ({ page: state.page - 1 })),
            resetPage: () => set(() => ({ page: 1 })),
            updatePage: (newPage: number) => set(() => ({ page: newPage })),

            updatePageCount: (count: number) =>
                set(() => ({ pageCount: count })),

            removeFavorites: (id: number) =>
                set((state: IStoreApp) => ({
                    favorites: removeID(state.favorites, id),
                })),
            addFavorites: (id: number) =>
                set((state: IStoreApp) => ({
                    favorites: [...state.favorites, id],
                })),

            updateTag: (name: string, value: string) =>
                set((state: IStoreApp) => ({
                    tags: updateStatusTag(state.tags, name, value),
                })),
        }),
        { name: 'Rick-N-Morthy-store' }
    )
)

export default useStoreApp
export type { IStoreApp }
