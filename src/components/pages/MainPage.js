import React from "react";

import MainBg from "../mainBg/mainBg";
import About from "../about/About";
import CardList from "../cardList/CardList";

import solimoCofee from '../../resources/img/types_of_coffee/solimo_cofee.webp';
import prestoCofee from '../../resources/img/types_of_coffee/presto_cofee.webp';
import aromisticoCofee from '../../resources/img/types_of_coffee/aromistico_cofee.webp';

class MainPage extends React.Component {
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
                    favourites: false
                },
                {
                    id: 2,
                    img: prestoCofee,
                    alt: 'presto_cofee',
                    name: 'Presto Coffee Beans 1 kg',
                    country: 'Columbia',
                    price: 15.99,
                    like: false,
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
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleLike = (id) => {
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


    render() {
        const {data} = this.state;

        const styleBg = 'mainBg mainBg__mainPage';
        const title = 'Everything You Love About Coffee';
        const styleBeans = 'beans';
        const styleButton = 'mainBg__block';

        const styleImg = 'about__left about__left-none';
        const aboutTitle = 'About Us';
        const aboutUsDescr = 'about__descr';
        const aboutOurBeansDescr = 'about__descr about__descr-aboutOurBeans';
        const aboutRightWidth = 'about__right about__right-width';
        const aboutTitleBottom = 'about__title';
       

        return (
            <>
                <MainBg
                    styleBg={styleBg} 
                    title={title} 
                    styleBeans={styleBeans} 
                    styleButton={styleButton} />
                <About 
                    styleImg={styleImg} 
                    aboutTitle={aboutTitle} 
                    styleBeans={styleBeans} 
                    aboutUsDescr={aboutUsDescr}
                    aboutOurBeansDescr={aboutOurBeansDescr}
                    aboutRightWidth={aboutRightWidth}
                    aboutTitleBottom={aboutTitleBottom} />
                <div className="mainBg__card">
                    <div className="container">
                    <CardList 
                        data={data}
                        onDelete={this.deleteItem}
                        onToggleLike={this.onToggleLike}
                        onToggleFavourites={this.onToggleFavourites} />
                    </div>
                </div>
            </>
        )
    }
}

export default MainPage;
