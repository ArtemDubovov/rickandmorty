import { FC, useCallback } from "react";

import ButtonTag from "../../shared/ui/Buttons/ButtonTag";
import useStoreApp from "../../App/providers/store";

import './styles/style.css';

const TagList: FC = () => {
    const {tags, updateTag, resetPage} = useStoreApp();

    const handleUpdateTag = useCallback((name: string, value: string) => {
        updateTag(name, value);
        resetPage();

    }, [updateTag, resetPage]);
    return(
        <>
            {tags && tags.map(tag =>
                <ButtonTag
                    defaultValue={tag.value}
                    key={tag.name}
                    fn={handleUpdateTag}
                    tagName={tag.name}
                    keys={tag.keys}
                />
            )}
        </>
    )
}

export default TagList;