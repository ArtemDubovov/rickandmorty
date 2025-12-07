import {FC, memo, useState} from "react";

import './style.css';

interface ISearchInput {
    updateSearchValue: (newValue: string) => void; 
    defaultValue: string;
}

const SearchInput: FC<ISearchInput> = ({updateSearchValue, defaultValue}) => {
    const [value, setValue] = useState(defaultValue);
    let handleChange = (value: string) => {
        updateSearchValue(value);
        setValue(value);
    }
    return(
        <input onChange={(e) => handleChange(e.target.value)} value={value} />
    )
}

export default memo(SearchInput);