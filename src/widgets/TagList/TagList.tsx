import { FC } from "react";

import TagButton from "../../shared/ui/TagButton/TagButton";
import useStoreApp from "../../App/providers/store";

const TagList: FC = () => {
    const {tags, updateTag, resetPage} = useStoreApp();
    console.log(tags, ' tags------------');
    return(
        <>
            {tags?.map(tag => <TagButton defaultValue={tag.value} key={tag.name} fn={(value) => {
                updateTag(tag.name, value);
                resetPage();
            }} tagName={tag.name} keys={tag.keys}/>)}
        </>
    )
}

export default TagList;