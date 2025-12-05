import { create } from 'zustand'
import { updateStatusTag } from '../../features/updateStatusTag';
import { removeID } from '../../features/removeID';

interface IStoreApp {
    page: number;
    pageCount: number;
    favorites: Array<number>;
    incrPage: () => void;
    decrPage: () => void;
    resetPage: () => void;
    updatePage: (newPage: number) => void;
    updatePageCount: (count: number) => void;
    removeFavorites: (id: number) => void;
    addFavorites: (id: number) => void;
    tags: {name: string, value: string, keys?: string[]}[],
    updateTag: (name: string, value: string) => void;
}

const useStoreApp = create<IStoreApp>()((set) => ({
  page: 1,
  pageCount: 0,
  favorites: [1, 2, 3],
  tags: [
    {
      name: 'status',
      value: 'alive',
      keys: ['', 'alive', 'dead', 'unknown']
    },
    {
      name: 'gender',
      value: '',
      keys: ['', 'female', 'male', 'genderless', 'unknown'],
    },
  ],
  incrPage: () => set((state: IStoreApp) => ({ page: state.page + 1 })),
  decrPage: () => set((state: IStoreApp) => ({ page: state.page - 1 })),
  resetPage: () => set((state: IStoreApp) => ({ page: 1 })),
  updatePage: (newPage: number) => set({ page: newPage }),

  updatePageCount: (count: number) => set({ pageCount: count }),

  removeFavorites: (id: number) => set((state: IStoreApp) => ({ favorites: removeID(state.favorites, id) })),
  addFavorites: (id: number) => set((state: IStoreApp) => ({ favorites: [...state.favorites, id] })),


  updateTag: (name: string, value: string) => set((state: IStoreApp) => ({ tags: updateStatusTag(state.tags, name, value)})),
}))

export default useStoreApp;
export type {IStoreApp};