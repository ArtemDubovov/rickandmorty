interface IPagesData {
    prev: number,
    current: number,
    next: number,
}

const getIncrPage = (pages: IPagesData) => {
    return {
        prev: pages.current,
        current: pages.current + 1,
        next: pages.current + 2,
    }


}

const getDecrPage = (pages: IPagesData) => {
    return {
        prev: pages.current - 2,
        current: pages.current - 1,
        next: pages.current,
    }
}

export { getIncrPage, getDecrPage };
export type { IPagesData };