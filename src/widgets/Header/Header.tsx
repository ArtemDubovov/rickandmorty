import { FC } from "react";
import Button from "../../shared/ui/Buttons/ButtonLink/ButtonLink";

import './styles/style.css';

interface IHeaderProps {
    links: {path: string, name: string}[];
}

const Header: FC<IHeaderProps> = ({links}) => {
    return(
        <header className="header">
            {
                links.map(link => <Button key={link.path} text={link.name} link={link.path}/>)
            }
        </header>
    )
}

export default Header;