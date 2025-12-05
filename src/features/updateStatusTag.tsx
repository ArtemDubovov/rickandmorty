export const updateStatusTag = (state : {name: string, value: string}[], tagName: string, value: string) => {
    const res = state.map(tag => tag.name === tagName ? {...tag, value} : tag);
    return res;
}