import { FC } from "react";
import { IButtonTagProps } from "./types";
import './styles/style.css';

const ButtonTag: FC<IButtonTagProps> = ({tagName, fn, keys, defaultValue = ''}) => {
    // Убрать
    const handleButton = (e: string) => {
        fn(e);
    }
    return(
        <div className="tag-wrapper">
            <label className="tag-label" htmlFor={tagName}>Choose {tagName}: </label>
            <select className="tag-select" id={tagName} defaultValue={defaultValue} onChange={(e) => handleButton(e.target.value)} >
                <option className="tag-option" value="" selected disabled hidden></option>
                {keys && keys.map(k => <option value={k}>{k}</option>)}
            </select>
        </div>
        
    )
}

export default ButtonTag;