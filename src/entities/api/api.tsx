import { useFetch } from "../../shared/api/api";

import { GET_CHARACTER, GET_ALL_CHARACTERS, GET_ALL_EPISODES, GET_EPISODE, GET_INFO_PAGE, GET_CHARACTERS_BY_ID } from "./query";

function GetAllCharacters (page: string, filter: {name: string, value: string}[] = []) {
    const res = useFetch(GET_ALL_CHARACTERS(page, filter));
    return res;
}

function GetAllEpisodes () {
    const res = useFetch(GET_ALL_EPISODES());
    return res;
}

function GetEpisode (id: string) {
    const res = useFetch(GET_EPISODE(id));
    return res;
}

function GetCharacter (id: string) {
    const res = useFetch(GET_CHARACTER(id));
    return res;
}

function GetInfoPages () {
    const res = useFetch(GET_INFO_PAGE());
    return res;
}

function GetCharactersByID (arr: Array<number>) {
    const res = useFetch(GET_CHARACTERS_BY_ID(arr));
    return res;
}

export {GetAllCharacters, GetAllEpisodes, GetEpisode, GetCharacter, GetInfoPages, GetCharactersByID};