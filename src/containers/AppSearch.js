import React from 'react';
import {connect} from 'react-redux';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import {changeSearch, makeSearchQuery, changePage} from '../AC';

class AppSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  onSearchValueChange = (value) => {
    const changeSearch = this.props.changeSearch;
    changeSearch(value);
  };

  onSearchClick = () => {
    const makeSearchQuery = this.props.makeSearchQuery;
    const changePage = this.props.changePage;
    makeSearchQuery(this.props.searchValue);
    changePage(1);
  };

  render() {
    return (
      <div>
        <TextBox
          value={this.props.searchValue}
          onChange={this.onSearchValueChange}
        />
        <Button onClick={this.onSearchClick} >Search</Button>
      </div>
    );
  }
}

export default connect((state) => ({
  searchValue: state.searching.searchValue,
  searchQuery: state.searching.searchQuery
}), { changeSearch, makeSearchQuery, changePage })(AppSearch);