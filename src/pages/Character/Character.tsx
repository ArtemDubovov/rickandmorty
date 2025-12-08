import { FC } from "react";

import { useParams } from "react-router-dom";
import CharacterInfo from "../../entities/CharacterInfo";
import Error from "../Error";

import './styles/style.css';

const Character: FC = () => {
    let { id } = useParams();
    if (!id) {
        return <Error />; // переход на error если нет ID, норм?
    }
    return(
        <div className="page">
            <CharacterInfo id={id}/>
        </div>
    )
}

export default Character;