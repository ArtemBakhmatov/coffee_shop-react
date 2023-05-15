import './cardListItem.scss';

import aromisticoCofee from '../../resources/img/types_of_coffee/aromistico_cofee.webp';

const CardListItem = () => {
    return (
        <li className="cardList__item">
            <div className="cardList__item-img">
                <img src={aromisticoCofee} alt="aromistico_cofee"/>
            </div>
            
            <div className="cardList__item-title">
                AROMISTICO Coffee 1 kg
            </div>
            <div className="cardList__item-city">
                Brazil
            </div>
            <div className="cardList__item-price">
                6.99$
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