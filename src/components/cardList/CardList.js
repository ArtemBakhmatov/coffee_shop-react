import CardListItem from '../cardListItem/CardListItem';
import './cardList.scss';

const CardList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // первый пример (он лучше разворачивает сразу все item-ы)
            <CardListItem key={id} {...itemProps} />

            // второй пример вызовов item-ов
            // <CardListItem 
            //      name={item.name}
            //      img={item.img}
            //      alt={item.alt}
            //      country={item.country}
            //      price={item.price} /> 
            
        )
    });

    console.log(elements);

    return (
        <ul className="container cardList">
                {elements}
        </ul>
    )
}

export default CardList;