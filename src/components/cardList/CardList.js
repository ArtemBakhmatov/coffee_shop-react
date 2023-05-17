import CardListItem from '../cardListItem/CardListItem';
import './cardList.scss';

const CardList = ({data, onDelete, onToggleLike, onToggleFavourites}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // первый пример (он лучше разворачивает сразу все item-ы)
            <CardListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleLike={() => onToggleLike(id)}
                onToggleFavourites={() => onToggleFavourites(id)} />

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
        <ul className="cardList">
                {elements}
        </ul>
    )
}

export default CardList;