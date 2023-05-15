import ListLinks from "../listLinks/listLinks";
import Beans from "../beans/Beans";
import "./footer.scss";

import logoBack from '../../resources/icons/logo_black.svg';

const boolean = true;

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <img src={logoBack} alt="logo_Back" className="header__logo"/>
                    <ListLinks boolean={boolean} />
                </div>
                <div className="footer__bottom">
                    <Beans boolean={boolean} />
                </div>
            </div>
        </footer>
    )
};
export default Footer;