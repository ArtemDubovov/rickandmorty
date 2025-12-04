import {FC} from "react";

import './style.css';

interface IBtnPaginationProps {
    page: number,
    fn?: () => void,
    disabled?: boolean
}

const BtnPagination: FC<IBtnPaginationProps> = ({page, fn, disabled = false}) => {
    return(
        <button disabled={disabled} onClick={fn} className="btn-pagination">
            {page}
        </button>
    )
}

export default BtnPagination;