import {FC} from "react";
import { Link } from "react-router-dom";

import './styles/style.css';

interface IButtonProps {
    text: string,
    link: string
}

const ButtonLink: FC<IButtonProps> = ({text, link}) => {
    return(
        <Link className="button" to={link}>
            {text}
        </Link>
    )
}

export default ButtonLink;