import { FC } from "react";

import CardList from "../../widgets/CardList/CardList";
import Pagination from "../../widgets/Pagination/Pagination";
import TagList from "../../widgets/TagList/TagList";

const Home: FC = () => {
    return(
        <div className="page">
            <Pagination />
            <TagList />
            <CardList favor={false}/>
        </div>
    )
}

export default Home;