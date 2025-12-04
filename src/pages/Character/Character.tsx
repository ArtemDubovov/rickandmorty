import { useParams } from "react-router-dom";
import { GetCharacter } from "../../entities/api/api";
import CharacterInfo from "../../entities/CharacterInfo/CharacterInfo";
import Loader from "../../shared/ui/Loader/Loader";
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage";



const Character = () => {
    let { id } = useParams();
    if (!id) {
        return <></>; // Сделать переход на error
    }
    const {loading, error, data} = GetCharacter(id);
    console.log(data);

    return(
        <>
            {loading && <Loader />}
            {error && <ErrorMessage message={error.message}/>}
            <CharacterInfo id={id}/>
        </>
    )
}

export default Character;