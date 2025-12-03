import {FC} from "react";

import './style.css';
import { Link } from "react-router-dom";

interface BtnPaginationProps {
    page: string,
    url: string
}

const BtnPagination: FC<BtnPaginationProps> = ({page, url}) => {
    return(
        <Link to={url} className="btn-pagination">
            {page}
        </Link>
    )
}

export default BtnPagination;