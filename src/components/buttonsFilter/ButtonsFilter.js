import './buttonsFilter.scss';

const ButtonsFilter = () => {
    return (
        <div className="search__buttons">
            <span className="search__buttons-subtitle">Or filter</span>
            <button type="button" className="search__buttons-btn">All</button>
            <button type="button" className="search__buttons-btn">Brazil</button>
            <button type="button" className="search__buttons-btn">Kenya</button>
            <button type="button" className="search__buttons-btn">Columbia</button>
        </div>
    )
}

export default ButtonsFilter;