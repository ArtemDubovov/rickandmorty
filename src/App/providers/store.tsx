import { create } from 'zustand'

interface IStoreApp {
    page: number
    pageCount: number
    incrPage: () => void
    decrPage: () => void
    updatePage: (newPage: number) => void
    updatePageCount: (count: number) => void
}

const useStoreApp = create<IStoreApp>()((set) => ({
  page: 1,
  pageCount: 0,
  incrPage: () => set((state: IStoreApp) => ({ page: state.page + 1 })),
  decrPage: () => set((state: IStoreApp) => ({ page: state.page - 1 })),
  updatePage: (newPage: number) => set({ page: newPage }),
  updatePageCount: (count: number) => set({ pageCount: count }),
}))

export default useStoreApp;
export type {IStoreApp};