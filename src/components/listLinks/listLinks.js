import { NavLink } from 'react-router-dom';

import './listLinks.scss';

function ListLinks(props) {

    const itemBlack = 'listLinks__item listLinks__item-black',
          itemWhite = 'listLinks__item',
          linkBlack = 'listLinks__link listLinks__link-black',
          linkWhite = 'listLinks__link';

    return (
        <nav className="listLinks">
            <ul className="listLinks__list">
                <li className={props.boolean ? itemBlack : itemWhite} title='Тут ссылки пока пустые' >
                    <NavLink 
                        style={({ isActive }) => ({ color: isActive ? '#7c7c7c' : '' })}
                        to="/" 
                        className={props.boolean ? linkBlack: linkWhite} >Coffee house</NavLink>
                </li>

                <li className={props.boolean ? itemBlack : itemWhite} title='Тут ссылки пока пустые'>
                    <NavLink 
                        style={({ isActive }) => ({ color: isActive ? '#7c7c7c' : '' })}
                        to="/CoffeePage"  
                        className={props.boolean ? linkBlack: linkWhite} >Our coffee</NavLink>
                </li>

                <li className={props.boolean ? itemBlack : itemWhite} title='Тут ссылки пока пустые'>
                    <NavLink 
                        style={({ isActive }) => ({ color: isActive ? '#7c7c7c' : '' })}
                        to="/GoodsPage" 
                        className={props.boolean ? linkBlack: linkWhite} >For your pleasure</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default ListLinks;

