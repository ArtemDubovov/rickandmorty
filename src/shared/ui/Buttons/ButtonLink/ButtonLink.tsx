import {FC} from "react";
import { Link } from "react-router-dom";
import { IButtonProps } from "./types";
import './styles/style.css';



const ButtonLink: FC<IButtonProps> = ({text, link}) => {
    return(
        <Link className="button" to={link}>
            {text}
        </Link>
    )
}

export default ButtonLink;