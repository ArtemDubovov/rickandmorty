import { FC } from "react";
import Button from "../../shared/ui/ButtonLink/ButtonLink";

import './styles/style.css';

interface ILink  {
    path: string;
    name: string;
}

interface IHeaderProps {
    links: ILink[];
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