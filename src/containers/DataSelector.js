import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import {smallDataLoad, largeDataLoad, changePage, changeDetailedInf} from '../AC';

class DataSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  onSmallDataSelect = (e) => {
    const {loaded, loading, smallDataLoad, changePage, changeDetailedInf} = this.props;
    changeDetailedInf(-1, '', '', '');
    smallDataLoad();
    changePage(1);
  };

  onLargeDataSelect = (e) => {
    const {loaded, loading, largeDataLoad, changePage, changeDetailedInf} = this.props;
    changeDetailedInf(-1, '', '', '');
    largeDataLoad();
    changePage(1);
  };

  render() {
    const {loaded, loading, isLargeDataLoaded} = this.props;
    return (
      <div>
          <Button
            className="small-data-btn"
            onClick={this.onSmallDataSelect} 
            disabled={loading || loaded && !isLargeDataLoaded}
          >
            Small Data
          </Button>
          <Button
              className="large-data-btn"
              onClick={this.onLargeDataSelect}
              disabled={loading || loaded && isLargeDataLoaded}
            >
              Large Data
            </Button>
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.persons.loading,
  loaded: state.persons.loaded,
  isLargeDataLoaded: state.persons.isLargeDataLoaded
}),{ smallDataLoad, largeDataLoad, changePage, changeDetailedInf })(DataSelector);
