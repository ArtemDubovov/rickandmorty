import { FC } from "react";

import { useParams } from "react-router-dom";
import { GetCharacter } from "../../entities/api";
import CharacterInfo from "../../entities/CharacterInfo";
import Loader from "../../shared/ui/Loader";
import ErrorMessage from "../../shared/ui/ErrorMessage";
import Error from "../Error";

const Character: FC = () => {
    let { id } = useParams();
    if (!id) {
        return <Error />; // переход на error если нет ID, норм?
    }
    const {loading, error, data} = GetCharacter(id);
    console.log(data);

    return(
        <div className="page">
            {loading && <Loader />}
            {error && <ErrorMessage message={error.message}/>}
            <CharacterInfo id={id}/>
        </div>
    )
}

export default Character;