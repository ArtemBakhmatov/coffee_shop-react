import './searchPanel.scss';

const SearchPanel = () => {
    return (
        <div className="search__panel">
            <span className="search__panel-subtitle">Lookiing for</span>
            <input 
            type="text" 
            placeholder="start typing here..." 
            className="search__panel-input" />
        </div>
        
    )
}

export default SearchPanel;