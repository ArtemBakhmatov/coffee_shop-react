import { NavLink } from "react-router-dom";
import './error.scss';

import errorGif from '../../resources/img/404.gif';
const Error = () => {
    return (
        <div className="error">
            <div className="error__gif">
                <img src={errorGif} alt="error" />
            </div>
            <div className="error__message">
                Страница не найдена! Вернуться на 
                <NavLink 
                    style={({ isActive }) => ({ color: isActive ? '#7c7c7c' : '' })}
                    to="/" 
                    className="error__link"
                    >Главную</NavLink>
            </div>
        </div>
    )
}

export default Error;