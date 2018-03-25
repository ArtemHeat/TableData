import React from 'react';
import {connect} from 'react-redux';
import AppTable from './containers/AppTable';
import AppSearch from './containers/AppSearch';
import DataSelector from './containers/DataSelector';
import Paginator from './containers/Paginator';
import DetailedData from './containers/DetailedData';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  filterData = (data) => {
    const searchQuery = this.props.searchQuery;
    const filteredData = searchQuery
      ? data.filter(person => {
        for (let key in person) {
          if(key === 'address' || key === 'description') break;
          let personProp = '' + person[key];
          if (personProp.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
            return true;
          }
        }
        return false;
      })
    : data;
    return filteredData;
  }

  render() {
    const persons = this.filterData(this.props.persons);
    return(
      <div>
        <DataSelector />
        <AppSearch />
        <Paginator />
        <AppTable persons={persons} />
        <DetailedData />
      </div>
    );
  };
};

export default connect((state) => ({
  searchQuery: state.searching.searchQuery,
  persons: state.persons.persons
}), {})(App);
