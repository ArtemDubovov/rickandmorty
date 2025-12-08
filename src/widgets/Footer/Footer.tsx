import { FC } from "react";

import './styles/style.css';

const Footer: FC = () => {
    return(
        <footer className="footer">
            <p className="footer_title">Created by Artem Dubovov</p>
            <a rel="_blank" className="footer_link" href="https://github.com/ArtemDubovov">@github.com</a>
        </footer>
    )
}

export default Footer;