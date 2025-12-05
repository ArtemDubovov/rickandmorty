import React, { ChangeEvent, FC } from "react";

import './style.css';

interface ITageButtonProps {
    tagName: string;
    fn: (value: string) => void;
    keys: string[] | undefined
}

const TagButton: FC<ITageButtonProps> = ({tagName, fn, keys}) => {
    const handleButton = (e: ChangeEvent<HTMLSelectElement>) => {
        fn(e.target.value);
    }
    return(
        <select onChange={(e) => handleButton(e)} >
            <option value="" selected disabled hidden>{`Select ${tagName}:`}</option>
            {keys && keys.map(k => <option value={k}>{k}</option>)}
        </select>
    )
}

export default TagButton;