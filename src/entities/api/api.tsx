import { useFetch } from "../../shared/api/api";

import { GET_CHARACTER, GET_ALL_CHARACTERS, GET_ALL_EPISODES, GET_EPISODE } from "./query";

function GetAllCharacters () {
    const res = useFetch(GET_ALL_CHARACTERS());
    return res;
}

function GetAllEpisodes () {
    const res = useFetch(GET_ALL_EPISODES());
    return res;
}

function GetEpisode (id: number) {
    const res = useFetch(GET_EPISODE(id));
    return res;
}

function GetCharacter (id: number) {
    const res = useFetch(GET_CHARACTER(id));
    return res;
}

export {GetAllCharacters, GetAllEpisodes, GetEpisode, GetCharacter};