import { FC } from "react";

import CardList from "../../widgets/CardList";
import Pagination from "../../widgets/Pagination";
import TagList from "../../widgets/TagList";

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