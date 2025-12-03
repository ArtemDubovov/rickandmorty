import { useParams } from "react-router-dom";
import { GetCharacter } from "../../entities/api/api";
import CharacterInfo from "../../entities/CharacterInfo/CharacterInfo";



const Character = () => {
    let { id } = useParams();
    if (!id) {
        return <></>; // Сделать переход на error
    }
    const {loading, error, data} = GetCharacter(id);
    console.log(data);

    return(
        <div>
            <CharacterInfo id={id}/>
        </div>
    )
}

export default Character;