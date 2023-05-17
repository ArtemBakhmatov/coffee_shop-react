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

const App = () => {

    const data = [  // массив данных (представляем как будто что они с сервера)
        {
            id: 1,
            img: solimoCofee,
            alt: 'solimo_cofee',
            name: 'Solimo Coffee Beans 2 kg',
            country: 'Brazil',
            price: 10.73,
            like: false
        },
        {
            id: 2,
            img: prestoCofee,
            alt: 'presto_cofee',
            name: 'Presto Coffee Beans 1 kg',
            country: 'Columbia',
            price: 15.99,
            like: true
        },
        {
            id: 3,
            img: aromisticoCofee,
            alt: 'aromistico_cofee',
            name: 'AROMISTICO Coffee 1 kg',
            country: 'Kenya',
            price: 16.99,
            like: false
        },
    ];


    return (
        <>
            <Header/>
            <MainBg/>
            <CofeeInfo/>
            <section className="search">
                <div className="container search__flex">
                    <SearchPanel/>
                    <ButtonsFilter/>   
                </div>
                <div className="container">
                    <CardList data={data} />
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default App;




