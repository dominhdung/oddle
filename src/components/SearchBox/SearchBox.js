import React from 'react';
import _ from 'lodash';


class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    if (_.isEmpty(props.searchCriterias)) {
      this.state = {
        searchCriterias: [
          {
            name: 'q',
            value: '',
          },
        ],
      };
    } else {
      this.state = {
        searchCriterias: props.searchCriterias,
      };
    }

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(event) {
    this.setState(
      ...this.state,
      {
        searchCriterias: [
          {
            name: 'q',
            value: event.target.value,
          },
        ],
      },
    );
  }

  render() {
    return (
      <form className="search_box" onSubmit={(e) => { e.preventDefault(); this.props.handleSearchFormSubmit(this.state.searchCriterias); }}>
        <input
          className="search_input"
          placeholder="Enter login name here"
          onChange={this.handleSearchInputChange}
          value={_.find(this.state.searchCriterias, ['name', 'q']).value || ''}
        />
        <button className="search_button" type="submit">Search</button>
      </form>
    );
  }
}

SearchBox.propTypes = {
    handleSearchFormSubmit: React.PropTypes.func,
    searchCriterias: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string,
        value: React.PropTypes.string,
    })),
};
export default SearchBox;
