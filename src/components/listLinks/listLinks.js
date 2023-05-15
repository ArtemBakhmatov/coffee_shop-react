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
                    <a 
                        href="#" 
                        className={props.boolean ? linkBlack: linkWhite} >Coffee house</a>
                </li>

                <li className={props.boolean ? itemBlack : itemWhite} title='Тут ссылки пока пустые'>
                    <a 
                        href="#" 
                        className={props.boolean ? linkBlack: linkWhite} >Our coffee</a>
                </li>

                <li className={props.boolean ? itemBlack : itemWhite} title='Тут ссылки пока пустые'>
                    <a 
                        href="#" 
                        className={props.boolean ? linkBlack: linkWhite} >For your pleasure</a>
                </li>
            </ul>
        </nav>
    )
}

export default ListLinks;

