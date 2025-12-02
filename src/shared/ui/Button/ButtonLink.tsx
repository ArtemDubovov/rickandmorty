import {FC} from "react";

import './style.css';
import { Link } from "react-router-dom";

interface ButtonProps {
    text: string,
    link: string
}

const Button: FC<ButtonProps> = ({text, link}) => {
    return(
        <Link className="button" to={link}>
            {text}
        </Link>

    )
}

export default Button;