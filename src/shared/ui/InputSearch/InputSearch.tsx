import { FC, memo, useState } from 'react'
import { IInputSearch } from './types'

import './styles/style.css'

const InputSearch: FC<IInputSearch> = ({ updateSearchValue, defaultValue }) => {
    const [value, setValue] = useState(defaultValue)
    let handleChange = (value: string) => {
        updateSearchValue(value)
        setValue(value)
    }
    return (
        <div>
            <label>Enter name: </label>
            <input
                className="input-search"
                onChange={(e) => handleChange(e.target.value)}
                value={value}
            />
        </div>
    )
}

export default memo(InputSearch)
