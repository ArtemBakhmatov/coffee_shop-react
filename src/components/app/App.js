import Header from "../header/Header";
import MainBg from "../mainBg/mainBg";
import CofeeInfo from "../coffeeInfo/CofeeInfo";
import Footer from "../footer/Footer";
import SearchPanel from "../searchPanel/SearchPanel";
import ButtonsFilter from "../buttonsFilter/ButtonsFilter";
import CardList from "../cardList/CardList";

const App = () => {
    return (
        <>
            <Header/>
            <MainBg/>
            <CofeeInfo/>
            <div className="search">
                <div className="container search__flex">
                    <SearchPanel/>
                    <ButtonsFilter/>   
                </div>
            </div>
            <CardList/>
            <Footer/>
        </>
    )
}

export default App;




