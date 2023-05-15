import './coffeeInfo.scss';

const CofeeInfo = () => {
    return (
        <section className="coffeeInfo">
            <div className="container">
                <div className="coffeeInfo__block">
                    <h2 className="coffeeInfo__title">Accounting</h2>
                    <h3 className="coffeeInfo__text">Total amount of coffee: </h3>
                    <h3 className="coffeeInfo__text">Favourites: </h3>
                </div>
            </div>
        </section>
    )
}

export default CofeeInfo;
