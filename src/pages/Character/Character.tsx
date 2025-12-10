import { FC } from "react";

import { useParams } from "react-router-dom";
import Error from "../Error";
import CharacterInfo from "../../entities/ui/CharacterInfo";

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