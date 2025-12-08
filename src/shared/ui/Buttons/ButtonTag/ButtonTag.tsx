import { ChangeEvent, FC } from "react";

import './styles/style.css';

interface IButtonTagProps {
    tagName: string;
    fn: (value: string) => void;
    keys: string[] | undefined,
    defaultValue?: string
}

const ButtonTag: FC<IButtonTagProps> = ({tagName, fn, keys, defaultValue = ''}) => {
    const handleButton = (e: ChangeEvent<HTMLSelectElement>) => {
        fn(e.target.value);
    }
    return(
        <select defaultValue={defaultValue} onChange={(e) => handleButton(e)} >
            <option value="" selected disabled hidden>{`Select ${tagName}:`}</option>
            {keys && keys.map(k => <option value={k}>{k}</option>)}
        </select>
    )
}

export default ButtonTag;