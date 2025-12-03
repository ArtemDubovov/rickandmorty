import { useFetch } from "../../shared/api/api";

import { GET_CHARACTER, GET_ALL_CHARACTERS, GET_ALL_EPISODES, GET_EPISODE, GET_INFO_PAGE } from "./query";

function GetAllCharacters (page: string) {
    const res = useFetch(GET_ALL_CHARACTERS(page));
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

export {GetAllCharacters, GetAllEpisodes, GetEpisode, GetCharacter, GetInfoPages};