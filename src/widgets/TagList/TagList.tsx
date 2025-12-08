import { FC } from "react";

import ButtonTag from "../../shared/ui/Buttons/ButtonTag";
import useStoreApp from "../../App/providers/store";

import './styles/style.css';

const TagList: FC = () => {
    const {tags, updateTag, resetPage} = useStoreApp();

    const handleUpdateTag = (name: string) => {
        return function (value: string) {
            updateTag(name, value);
            resetPage();
        }
    }
    return(
        <>
            {tags && tags.map(tag =>
                <ButtonTag
                    defaultValue={tag.value}
                    key={tag.name}
                    fn={handleUpdateTag(tag.name)}
                    tagName={tag.name}
                    keys={tag.keys}
                />
            )}
        </>
    )
}

export default TagList;