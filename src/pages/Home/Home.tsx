import React, { useEffect, useState } from "react";

import { GetAllCharacters, GetCharacter, GetEpisode, GetAllEpisodes } from "../../entities/api/api";
import { allCharactersType } from "../../entities/api/types";

function Home() {
    const {loading, error, info, result} = GetAllCharacters();
    console.log(info);
    return(
        <div>
            {result && result.map((r: allCharactersType) => <div>
                <img src={r.image} alt=""/>
            </div>)}
        </div>
    )
}

export default Home;