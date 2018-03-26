import React from 'react';
import {connect} from 'react-redux';
import AppTableHeader from './AppTableHeader';
import AppTableRow from './AppTableRow';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import {changeNumberOfPages, changeDetailedInf} from '../AC';

// this.props.persons received from App.js
// and already filtered in App.js according to the search query

class AppTable extends React.Component {
  constructor(props) {
    super(props);
  }

  getSortFunction = (sortType, isAscendingSort) => {
    if (sortType === 'firstName' ||
      sortType === 'lastName' ||
      sortType === 'email' ||
      sortType === 'phone'
    ) {
      return (a,b) => {
        if(a[sortType].toLowerCase() > b[sortType].toLowerCase()) {
          return isAscendingSort ? 1 : -1;
        }
        if(a[sortType].toLowerCase() < b[sortType].toLowerCase()) {
          return isAscendingSort ? -1 : 1;
        }
      };
    }
    if (sortType === 'id') {
      return (a,b) => {
        if(parseInt(a[sortType], 10) > parseInt(b[sortType], 10)) {
          return isAscendingSort ? 1 : -1;
        }
        if(parseInt(a[sortType], 10) < parseInt(b[sortType], 10)) {
          return isAscendingSort ? -1 : 1;
        }
      };
    }
  };

  componentDidUpdate() {
    const {changeNumberOfPages, persons} = this.props;
    const numberOfPages = persons.length % 50
      ? Math.floor(persons.length / 50) + 1
      : persons.length / 50;
    
    changeNumberOfPages(Math.max(1, numberOfPages));
  };

  onTbodyClick = (e) => {
    const {changeDetailedInf} = this.props;
    const detailedId = parseInt(e.target.parentNode.children[0].textContent);
    const detailedFirstName = e.target.parentNode.children[1].textContent;
    const detailedLastName = e.target.parentNode.children[2].textContent;
    const detailedEmail = e.target.parentNode.children[3].textContent;
    changeDetailedInf(detailedId, detailedFirstName, detailedLastName, detailedEmail);
  };

  render() {
    const {loading,loaded, status, sortType, isAscendingSort} = this.props;
    if (!loaded && !loading) return <h1>Please select small or large data</h1>;
    if (loading) return <Loader/>;
    if (status) return (<ErrorMessage status={status}/>);

    const {renderedPage} = this.props;
    return (
      <table>
        <thead>
          <AppTableHeader />
        </thead>
        <tbody onClick={this.onTbodyClick} >
          {this.props.persons.sort(this.getSortFunction(sortType, isAscendingSort))
          .map((person, index) => {
            if(
              index >= ((renderedPage - 1) * 50)
              && index <= ((renderedPage - 1) * 50 + 49)
            ){
              return (
                <AppTableRow
                  key={index}
                  person={person}
                  tabindex={index}
                />
              );
            }
          })}
        </tbody>
      </table>
    );
  }
}

export default connect((state) => ({
  sortType: state.sorting.sortType,
  isAscendingSort: state.sorting.isAscending,
  loading: state.persons.loading,
  loaded: state.persons.loaded,
  status: state.persons.status,
  renderedPage: state.page.renderedPage
}), {changeNumberOfPages, changeDetailedInf})(AppTable);