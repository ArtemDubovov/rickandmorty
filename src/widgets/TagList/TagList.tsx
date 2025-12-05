import React from "react";

import TagButton from "../../shared/ui/TagButton/TagButton";
import useStoreApp from "../../App/providers/store";

const TagList = () => {
    const {tags, updateTag} = useStoreApp((store) => store);
    console.log(tags);
    return(
        <>
            {tags.map(tag => <TagButton fn={(value) => updateTag(tag.name, value)} tagName={tag.name} keys={tag.keys}/>)}
        </>
    )
}

export default TagList;