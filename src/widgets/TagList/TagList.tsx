import { FC } from "react";

import ButtonTag from "../../shared/ui/Buttons/ButtonTag";
import useStoreApp from "../../App/providers/store";

import './styles/style.css';

const TagList: FC = () => {
    const {tags, updateTag, resetPage} = useStoreApp();
    return(
        <>
            {tags?.map(tag => <ButtonTag defaultValue={tag.value} key={tag.name} fn={(value) => {
                updateTag(tag.name, value);
                resetPage();
            }} tagName={tag.name} keys={tag.keys}/>)}
        </>
    )
}

export default TagList;