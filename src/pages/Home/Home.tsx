import { FC, useEffect } from "react";

import CardList from "../../widgets/CardList";
import Pagination from "../../widgets/Pagination";
import TagList from "../../widgets/TagList";

import './styles/style.css';
import useStoreApp from "../../App/providers/store";
import { GetAllCharacters } from "../../entities/api";
import Loader from "../../shared/ui/Loader";

const Home: FC = () => {
    const {tags, page, searchInputStore, updatePageCount} = useStoreApp();
    const {loading, data} = GetAllCharacters(String(page), [...tags, {name: 'name', value: searchInputStore}]); // Favor or all
    
    useEffect(() => {
        if (data) {
            updatePageCount(data?.characters.info.pages);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tags, searchInputStore, loading]);

    return(
        <div className="page-home">
            {loading && <Loader />}
            <Pagination />
            <TagList />
            {data && <CardList characters={data.characters.results} favor={false}/>}
        </div>
    )
}

export default Home;