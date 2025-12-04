import { create } from 'zustand'
import { removeID } from '../../features/removeID';



interface IStoreApp {
    page: number;
    pageCount: number;
    favorites: Array<number>;
    incrPage: () => void;
    decrPage: () => void;
    updatePage: (newPage: number) => void;
    updatePageCount: (count: number) => void;
    removeFavorites: (id: number) => void;
    addFavorites: (id: number) => void;
}

const useStoreApp = create<IStoreApp>()((set) => ({
  page: 1,
  pageCount: 0,
  favorites: [1, 2, 3],
  incrPage: () => set((state: IStoreApp) => ({ page: state.page + 1 })),
  decrPage: () => set((state: IStoreApp) => ({ page: state.page - 1 })),
  updatePage: (newPage: number) => set({ page: newPage }),
  updatePageCount: (count: number) => set({ pageCount: count }),
  removeFavorites: (id: number) => set((state: IStoreApp) => ({ favorites: removeID(state.favorites, id) })),
  addFavorites: (id: number) => set((state: IStoreApp) => ({ favorites: [...state.favorites, id] })),
}))

export default useStoreApp;
export type {IStoreApp};