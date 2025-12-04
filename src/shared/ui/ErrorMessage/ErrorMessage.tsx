import {FC} from "react";

interface IErrorMessageProps {
    message: string
}

const ErrorMessage:FC<IErrorMessageProps> = ({message}) => {
    return(
        <div>
            Error - {message}
        </div>
    )
}

export default ErrorMessage;