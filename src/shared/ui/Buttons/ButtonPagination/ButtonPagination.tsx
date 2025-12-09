import {FC} from "react";
import { IButtonPaginationProps } from "./types";
import './styles/style.css';

const ButtonPagination: FC<IButtonPaginationProps> = ({page, fn, disabled = false}) => {
    return(
        <button disabled={disabled} onClick={fn} className="btn-pagination">
            {page}
        </button>
    )
}

export default ButtonPagination;