import { useFetch } from "../../shared/api/api";

import { GET_CHARACTER_QUERY, GET_ALL_CHARACTERS_QUERY, GET_ALL_EPISODES_QUERY, GET_EPISODE_QUERY, GET_INFO_PAGE_QUERY, GET_CHARACTERS_BY_ID_QUERY } from "./query";

function GetAllCharacters (page: string, filter: {name: string, value: string}[] = []) {
    const res = useFetch(GET_ALL_CHARACTERS_QUERY(page, filter));
    return res;
}

function GetAllEpisodes () {
    const res = useFetch(GET_ALL_EPISODES_QUERY());
    return res;
}

function GetEpisode (id: string) {
    const res = useFetch(GET_EPISODE_QUERY(id));
    return res;
}

function GetCharacter (id: string) {
    const res = useFetch(GET_CHARACTER_QUERY(id));
    return res;
}

function GetInfoPages () {
    const res = useFetch(GET_INFO_PAGE_QUERY());
    return res;
}

function GetCharactersByID (arr: Array<number>) {
    const res = useFetch(GET_CHARACTERS_BY_ID_QUERY(arr));
    return res;
}

export {GetAllCharacters, GetAllEpisodes, GetEpisode, GetCharacter, GetInfoPages, GetCharactersByID};