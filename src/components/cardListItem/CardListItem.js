import React from 'react';
import './cardListItem.scss';

class CardListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false,
            favourites: false
        }
    }
    onLike = () => { 
        // this.setState(({like}) => ({
        //     like: !like
        // }));

        this.setState(state => ({
            like: !state.like
        }));
    }

    onFavourites = () => {
        this.setState(({favourites}) => ({
            favourites: !favourites
        }));
    }

    render() {
        const {img, alt, name, country, price, onDelete} = this.props;
        const {like, favourites} = this.state;

        let classNames = 'cardList__item';
        let classNamesActive = 'cardList__item cardList__item-like';

        const star = 'cardList__item-favourites';
        const starActive = 'cardList__item-favourites cardList__item-favourites__active'
    
        return (
            <li className={like ? classNamesActive : classNames }>
                <div className={favourites ? starActive : star}>
                    <i className="fas fa-star"></i>
                </div>
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
                    <button 
                        type="button"
                        className="cardList__item-button"
                        onClick={this.onLike}>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    <button 
                        type="button"
                        className="cardList__item-button"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <button 
                        type="button"
                        className="cardList__item-button"
                        onClick={this.onFavourites}>
                        <i className="fas fa-star"></i>
                    </button>
                </div>
            </li>
        )
    }
}

export default CardListItem;