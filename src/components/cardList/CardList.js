import CardListItem from '../cardListItem/CardListItem';
import './cardList.scss';

const CardList = () => {
    return (
        <ul className="container cardList">
                <CardListItem/>
                <CardListItem/>
                <CardListItem/>
                <CardListItem/>
        </ul>
    )
}

export default CardList;