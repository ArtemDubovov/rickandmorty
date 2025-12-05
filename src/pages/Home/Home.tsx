import { FC } from "react";
import useStoreApp, {IStoreApp} from "../../App/providers/store";

import CardList from "../../widgets/CardList/CardList";
import Pagination from "../../widgets/Pagination/Pagination";

const Home: FC = () => {
    const { page} = useStoreApp((state: IStoreApp) => state);


    return(
        <div>
            <Pagination />
            <CardList page={page} favor={false}/>
        </div>
    )
}

export default Home;