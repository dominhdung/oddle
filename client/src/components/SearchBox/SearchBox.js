import React from 'react';
import _ from 'lodash';
import styles from './SearchBox.css';

class SearchBox extends React.Component {
  static propTypes = {
    handleSearchFormSubmit: React.PropTypes.func,
    searchCriterias: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string,
      value: React.PropTypes.string,
    })),
  };

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
      <form className={styles.search_box} onSubmit={(e) => { e.preventDefault(); this.props.handleSearchFormSubmit(this.state.searchCriterias); }}>
        <input
          className={styles.search_input}
          placeholder="Enter login name here"
          onChange={this.handleSearchInputChange}
          value={_.find(this.state.searchCriterias, ['name', 'q']).value || ''}
        />
        <button className={styles.search_button} type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBox;
