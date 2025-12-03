import { FC, memo } from "react";

import './style.css';
import { getDecrPage, getIncrPage } from "../../features/pagination/pagination";

interface PaginationProps {
    pages: {
        prev: number;
        current: number;
        next: number;
    },
    setPages: React.Dispatch<React.SetStateAction<{
        prev: number;
        current: number;
        next: number;
    }>>
}

const Pagination: FC<PaginationProps>  = ({pages, setPages}) => {
    const incrPage = () => {
        setPages(getIncrPage(pages));

    }

    const decrPage = () => {
        setPages(getDecrPage(pages));
    }
    return(
        <div>
            <>      
                {pages.prev > 0 && <button onClick={decrPage}>{pages.prev}</button>}
                <button disabled>{pages.current}</button>
                <button onClick={incrPage}>{pages.next}</button>
            </>
        </div>
    )
}

export default memo(Pagination);