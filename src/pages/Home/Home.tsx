import React, { useEffect, useState } from "react";

import { GetAllCharacters, GetCharacter, GetEpisode, GetAllEpisodes } from "../../entities/api/api";

import CardList from "../../entities/CardList/CardList";

function Home() {

    return(
        <div>
            <CardList />
        </div>
    )
}

export default Home;