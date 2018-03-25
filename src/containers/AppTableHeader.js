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

  camelToDash = (str) => {
    return str.replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
  };

  componentDidMount() {
    const {sortType, isAscendingSort} = this.props;
    const tableHead = document.querySelector('thead');
    const btnClasses = tableHead.querySelector(`.${this.camelToDash(sortType)}`).classList;

    if(isAscendingSort) {
      btnClasses.add('ascending');
    } else {
      btnClasses.add('descending');
    }
  }

  onBtnClick = (e) => {
    const {changeSortOrder, changeSortType, sortType, isAscendingSort} = this.props;
    const columnName = this.camelize(e.target.textContent.toLowerCase());
    const tableHead = document.querySelector('thead');
    const btnClasses = tableHead.querySelector(`.${this.camelToDash(columnName)}`).classList;

    if(sortType === columnName) {
      changeSortOrder(!isAscendingSort);
      btnClasses.toggle('ascending');
      btnClasses.toggle('descending');
    } else {
      if(tableHead.querySelector('.ascending')) {
        tableHead.querySelector('.ascending').classList.remove('ascending');
      }
      if(tableHead.querySelector('.descending')) {
        tableHead.querySelector('.descending').classList.remove('descending');
      }
      
      changeSortOrder(true);
      changeSortType(columnName);
      btnClasses.add('ascending');
    }
  };

  render() {

    return (
      <tr>
        <th>
          <Button className="id" onClick={this.onBtnClick}>id</Button>
        </th>
        <th>
          <Button className="first-name" onClick={this.onBtnClick}>first name</Button>
        </th>
        <th>
          <Button className="last-name" onClick={this.onBtnClick}>last name</Button>
        </th>
        <th>
          <Button className="email" onClick={this.onBtnClick}>email</Button>
        </th>
        <th>
          <Button className="phone" onClick={this.onBtnClick}>phone</Button>
        </th>
      </tr>
    );
  }
}

export default connect((state) => ({
  sortType: state.sorting.sortType,
  isAscendingSort: state.sorting.isAscending
}), { changeSortType, changeSortOrder })(AppTableHeader);
