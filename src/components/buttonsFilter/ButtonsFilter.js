import './buttonsFilter.scss';

const ButtonsFilter = (props) => {
    const buttonsData = [
        {name: 'All', label: 'All'},
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'search__buttons-btn search__buttons-btn__active' : 'search__buttons-btn';
        return (
            <button 
                key={name}
                type="button" 
                className={clazz}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    });
    return (
        <div className="search__buttons">
            <span className="search__buttons-subtitle">Or filter</span>
            {buttons}
        </div>
    )
}

export default ButtonsFilter;