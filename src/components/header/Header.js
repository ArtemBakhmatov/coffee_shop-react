import ListLinks from "../listLinks/listLinks";
import "./header.scss";

import logoWhite from '../../resources/icons/logo_white.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container container__flex">
                <img src={logoWhite} alt="logo_white" className="header__logo"/>
                <ListLinks/>
            </div>
        </header>
    )
};
export default Header;