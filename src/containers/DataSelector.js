import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import {smallDataLoad, largeDataLoad, changePage} from '../AC';

class DataSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  onSmallDataSelect = (e) => {
    const {loaded, loading, smallDataLoad, changePage} = this.props;
    smallDataLoad();
    changePage(1);
    e.target.disabled = true;
    const largeDataBtn = document.querySelector('.large-data-btn');
    largeDataBtn.disabled = false;
  };

  onLargeDataSelect = (e) => {
    const {loaded, loading, largeDataLoad, changePage} = this.props;
    largeDataLoad();
    changePage(1);
    e.target.disabled = true;
    const smallDataBtn=document.querySelector('.small-data-btn');
    smallDataBtn.disabled = false;
  };

  render() {
    return (
      <div>
          <Button className="small-data-btn" onClick={this.onSmallDataSelect}>Small Data</Button>
          <Button className="large-data-btn" onClick={this.onLargeDataSelect}>Large Data</Button>
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.persons.loading,
  loaded: state.persons.loaded
}),{ smallDataLoad, largeDataLoad, changePage })(DataSelector);
