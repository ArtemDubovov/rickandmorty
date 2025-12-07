import { FC } from 'react';

import './style.css';

import useStoreApp from "../../App/providers/store";
import BtnPagination from "../../shared/ui/BtnPagination/BtnPagination";

const Pagination: FC = () => {
    const {page, pageCount, decrPage, incrPage} = useStoreApp();

    return(
        <div>
            {page - 1 > 0 && <BtnPagination fn={decrPage} page={page - 1}/>}
            <BtnPagination page={page}  disabled/>
            {page + 1 <= pageCount &&<BtnPagination page={page + 1} fn={incrPage}/>}
        </div>
    )
}

export default Pagination;