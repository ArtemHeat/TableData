import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import {changeSortType, changeSortOrder} from '../AC';

class AppTableHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  camelize = (str) => {
    if (str.toLowerCase().indexOf(' ') !== -1) {
      const arr = str.split(' ');
  
      for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
  
      return arr.join('');
    }
    return str;
  };

  onBtnClick = (e) => {
    const {changeSortOrder, changeSortType, sortType, isAscendingSort} = this.props;
    const columnName = this.camelize(e.target.textContent.toLowerCase());
    console.log(sortType, columnName);
    if(sortType === columnName) {
      changeSortOrder(!isAscendingSort);
    } else {
      changeSortType(columnName, true);
    }
  };

  render() {
    const columnNames = ['id', 'firstName', 'lastName', 'email', 'phone'];
    const {sortType, isAscendingSort} = this.props;
    const camelToDash = (str) => {
      return str.replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
    };
    const camelToSpace = (str) => {
      return str.replace(/([A-Z])/g, ([letter]) => ` ${letter.toLowerCase()}`);
    };
    const renderArrow = (columnName) => {
      return (sortType === columnName && isAscendingSort) ? ' ascending'
        : (sortType === columnName && !isAscendingSort) ? ' descending'
        : '';
    };
    return (
      <tr>
        {columnNames.map((item, index) => {
          return (
            <th key={`${index}${item}`}>
              <Button
                className={`${camelToDash(item)}${renderArrow(item)}`}
                onClick={this.onBtnClick}
              >
                {camelToSpace(item)}
              </Button>
            </th>
          );
        })}
      </tr>
    );
  }
}

export default connect((state) => ({
  sortType: state.sorting.sortType,
  isAscendingSort: state.sorting.isAscending
}), { changeSortType, changeSortOrder })(AppTableHeader);
