import React from "react";

import Header from "../header/Header";
import MainBg from "../mainBg/mainBg";
import CofeeInfo from "../coffeeInfo/CofeeInfo";
import Footer from "../footer/Footer";
import SearchPanel from "../searchPanel/SearchPanel";
import ButtonsFilter from "../buttonsFilter/ButtonsFilter";
import CardList from "../cardList/CardList";

import solimoCofee from '../../resources/img/types_of_coffee/solimo_cofee.webp';
import prestoCofee from '../../resources/img/types_of_coffee/presto_cofee.webp';
import aromisticoCofee from '../../resources/img/types_of_coffee/aromistico_cofee.webp';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [  // массив данных (представляем как будто что они с сервера)
                {
                    id: 1,
                    img: solimoCofee,
                    alt: 'solimo_cofee',
                    name: 'Solimo Coffee Beans 2 kg',
                    country: 'Brazil',
                    price: 10.73,
                    like: false,
                    favourites: true
                },
                {
                    id: 2,
                    img: prestoCofee,
                    alt: 'presto_cofee',
                    name: 'Presto Coffee Beans 1 kg',
                    country: 'Columbia',
                    price: 15.99,
                    like: true,
                    favourites: false
                },
                {
                    id: 3,
                    img: aromisticoCofee,
                    alt: 'aromistico_cofee',
                    name: 'AROMISTICO Coffee 1 kg',
                    country: 'Kenya',
                    price: 16.99,
                    like: false,
                    favourites: false
                }
            ],
            term: '',
            filter: 'All'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // 1 cпособ
            //const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            // return {
            //     data: newArr
            // }

            // 2 способ
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleLike = (id) => {
    //      1 способ
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);
    //         const old = data[index];
    //         const newItem = {...old, like: !old.like}; // Тут лежит новый объект
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //         return {
    //             data: newArr
    //         }
    //     })

        // 2 способ
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, like: !item.like}
                }
                return item;
            })
        }))
    }

    onToggleFavourites = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, favourites: !item.favourites}
                }
                return item;
            })
        }))
    }

    searchCard = (items, term) => { // поиск карточки
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1; // -1 означает если ничего не найдено
        })
    }

    onUpdateSearch = (term) => {                // обновление поиска 
        this.setState({term: term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter: filter});
    }

    render() {
        const {data, term, filter} = this.state;

        const cards = this.state.data.length;
        const likes = this.state.data.filter(item => item.like).length;
        const favourites = this.state.data.filter(item => item.favourites).length;

        const visibleData = this.filterPost(this.searchCard(data, term), filter);
        return (
            <>
                <Header/>
                <MainBg/>
                <CofeeInfo cards={cards} likes={likes} favourites={favourites} />
                <section className="search">
                    <div className="container search__flex">
                        <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                        <ButtonsFilter filter={filter} onFilterSelect={this.onFilterSelect} />   
                    </div>
                    <div className="container">
                        <CardList 
                            data={visibleData}
                            onDelete={this.deleteItem}
                            onToggleLike={this.onToggleLike}
                            onToggleFavourites={this.onToggleFavourites} />
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}

export default App;




