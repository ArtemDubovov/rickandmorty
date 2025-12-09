import {FC} from "react";
import { IErrorMessageProps } from "./types";

const ErrorMessage:FC<IErrorMessageProps> = ({message}) => {
    return(
        <div>
            Error - {message}
        </div>
    )
}

export default ErrorMessage;