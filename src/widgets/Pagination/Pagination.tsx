import { FC, memo } from "react";

import './style.css';
import { getIncrPage, getDecrPage } from "../../features/pagination.tsx/pagination";
import useStoreApp, { IStoreApp } from "../../App/providers/store";

const Pagination = () => {
    const {page, pageCount, decrPage, incrPage} = useStoreApp((store: IStoreApp) => store);
    
    return(
        <div>
            <>      
                {page - 1 > 0 && <button onClick={decrPage}>{page - 1}</button>}
                <button disabled>{page}</button>
                {page + 1 <= pageCount &&<button onClick={incrPage}>{page + 1}</button>}

            </>
        </div>
    )
}

export default memo(Pagination);