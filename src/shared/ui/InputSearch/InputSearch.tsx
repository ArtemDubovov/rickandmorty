import {FC, memo, useState} from "react";

import './styles/style.css';

interface IInputSearch {
    updateSearchValue: (newValue: string) => void; 
    defaultValue: string;
}

const InputSearch: FC<IInputSearch> = ({updateSearchValue, defaultValue}) => {
    const [value, setValue] = useState(defaultValue);
    let handleChange = (value: string) => {
        updateSearchValue(value);
        setValue(value);
    }
    return(
        <input onChange={(e) => handleChange(e.target.value)} value={value} />
    )
}

export default memo(InputSearch);