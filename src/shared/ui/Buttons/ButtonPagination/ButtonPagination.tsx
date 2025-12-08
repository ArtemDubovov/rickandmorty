import {FC} from "react";

import './styles/style.css';

interface IButtonPaginationProps {
    page: number,
    fn?: () => void,
    disabled?: boolean
}

const ButtonPagination: FC<IButtonPaginationProps> = ({page, fn, disabled = false}) => {
    return(
        <button disabled={disabled} onClick={fn} className="btn-pagination">
            {page}
        </button>
    )
}

export default ButtonPagination;