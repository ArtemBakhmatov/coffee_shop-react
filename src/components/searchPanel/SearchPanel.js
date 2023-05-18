import React from 'react';
import './searchPanel.scss';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term); // term это перем-я из строки 13
    }

    render() {
        return (
            <div className="search__panel">
                <span className="search__panel-subtitle">Lookiing for</span>
                <input 
                    type="text" 
                    placeholder="start typing here..." 
                    className="search__panel-input"
                    value={this.state.term}
                    onChange={this.onUpdateSearch} />
            </div>
            
        )
    }
}

export default SearchPanel;