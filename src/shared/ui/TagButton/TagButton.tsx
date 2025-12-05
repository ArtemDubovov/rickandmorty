import { FC, useState } from "react";

import './style.css';

interface ITageButtonProps {
    tagName: string;
    fn: (value: boolean) => void;
}

const TagButton: FC<ITageButtonProps> = ({tagName, fn}) => {
    const [isActive, setIsActive] = useState(false);
    const handleButton = () => {
        setIsActive((isActive) => !isActive);
        fn(isActive);
    }
    return(
        <button onClick={handleButton} className={`tag-button__${isActive ? 'active' : 'inactive'}`}>
            {tagName}
        </button>
    )
}

export default TagButton;