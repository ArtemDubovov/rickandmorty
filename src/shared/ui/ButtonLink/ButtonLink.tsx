import {FC} from "react";

import './style.css';
import { Link } from "react-router-dom";

interface IButtonProps {
    text: string,
    link: string
}

const Button: FC<IButtonProps> = ({text, link}) => {
    return(
        <Link className="button" to={link}>
            {text}
        </Link>

    )
}

export default Button;