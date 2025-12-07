import './style.css';

import useStoreApp, { IStoreApp } from "../../App/providers/store";
import BtnPagination from "../../shared/ui/BtnPagination/BtnPagination";

const Pagination = () => {
    const {page, pageCount, decrPage, incrPage} = useStoreApp((store: IStoreApp) => store);
    console.log(page, pageCount, ': ------------');
    return(
        <div>
            {page - 1 > 0 && <BtnPagination fn={decrPage} page={page - 1}/>}
            <BtnPagination page={page}  disabled/>
            {page + 1 <= pageCount &&<BtnPagination page={page + 1} fn={incrPage}/>}
        </div>
    )
}

export default Pagination;