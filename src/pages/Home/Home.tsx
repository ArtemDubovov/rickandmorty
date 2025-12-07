import { FC } from "react";
import useStoreApp, {IStoreApp} from "../../App/providers/store";

import CardList from "../../widgets/CardList/CardList";
import Pagination from "../../widgets/Pagination/Pagination";
import TagList from "../../widgets/TagList/TagList";

const Home: FC = () => {
    const { page} = useStoreApp((state: IStoreApp) => state);

    return(
        <div className="page">
            <Pagination />
            <TagList />
            <CardList page={page} favor={false}/>
        </div>
    )
}

export default Home;