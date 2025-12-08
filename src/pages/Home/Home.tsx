import { FC } from "react";

import CardList from "../../widgets/CardList";
import Pagination from "../../widgets/Pagination";
import TagList from "../../widgets/TagList";

import './styles/style.css';

const Home: FC = () => {
    return(
        <div className="page-home">
            <Pagination />
            <TagList />
            <CardList favor={false}/>
        </div>
    )
}

export default Home;