import { FC } from 'react';

import useStoreApp from "App/providers/store";
import ButtonPagination from "shared/ui/Buttons/ButtonPagination";

import './styles/style.css';

const Pagination: FC = () => {
    const {page, pageCount, decrPage, incrPage} = useStoreApp();

    return(
        <div className='pagination'>
            {page - 1 > 0 && <ButtonPagination fn={decrPage} page={page - 1}/>}
            <ButtonPagination page={page}  disabled/>
            {page + 1 <= pageCount &&<ButtonPagination page={page + 1} fn={incrPage}/>}
        </div>
    )
}

export default Pagination;