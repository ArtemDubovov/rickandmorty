export const removeID = (arr: number[], id: number) => {
    const index = arr.indexOf(id)
    if (index !== -1) {
        arr.splice(index, 1)
    }
    return [...arr]
}
