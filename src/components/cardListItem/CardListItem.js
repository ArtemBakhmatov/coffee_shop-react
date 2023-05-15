import './cardListItem.scss';

const CardListItem = ({img, alt, name, country, price, like}) => {

    let classNames = 'cardList__item';
    let classNamesActive = 'cardList__item cardList__item-like';
    
    return (
        <li className={like ? classNamesActive : classNames }>
            <div className="cardList__item-img">
                <img src={img} alt={alt}/>
            </div>
            
            <div className="cardList__item-title">
                {name}
            </div>
            <div className="cardList__item-city">
                {country}
            </div>
            <div className="cardList__item-price">
                {`${price}$`}
            </div>
            <div className="cardList__item-buttons">
                <div className="cardList__item-button">
                    <i className="fa-solid fa-heart"></i>
                </div>
                <div className="cardList__item-button">
                    <i className="fas fa-trash"></i>
                </div>
                <div className="cardList__item-button">
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </li>
    )
}

export default CardListItem;