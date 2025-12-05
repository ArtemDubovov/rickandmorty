import {FC, memo, useCallback, useState} from "react";

import './style.css';
import { TimeoutInfo } from "rxjs";

interface ISearchInput {
    updateSearchValue: (newValue: string) => void; 
}

const SearchInput: FC<ISearchInput> = ({updateSearchValue}) => {
    const [value, setValue] = useState('');
    let handleChange = (value: string) => {
        updateSearchValue(value);
        setValue(value);
    }
    return(
        <input onChange={(e) => handleChange(e.target.value)} value={value} />
    )
}

export default memo(SearchInput);