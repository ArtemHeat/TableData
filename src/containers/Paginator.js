import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import {changePage} from '../AC';

class Paginator extends React.Component {
  constructor(props) {
    super(props);
  }

  onNumberBtnClick = (e) => {
    const changePage = this.props.changePage;
    changePage(parseInt(e.target.id, 10));
  };

  onPrevBtnClick = () => {
    const changePage = this.props.changePage;
    const renderedPage = this.props.renderedPage;
    changePage(renderedPage-1);
  };

  onNextBtnClick = () => {
    const changePage = this.props.changePage;
    const renderedPage = this.props.renderedPage;
    changePage(renderedPage+1);
  };

  render() {
    const {renderedPage, numberOfPages, persons} = this.props;
    const numbers = new Array(numberOfPages).fill(0).map((_, index) => index+1);
    return(
      <div className="paginator-section">
        <b>Pages:</b>
        <Button id="previous" disabled={renderedPage === 1} onClick={this.onPrevBtnClick}>
          previous
        </Button>
        {numbers.map((number, index) => {
          return (
            <Button
              key={`${number}${index}`}
              id={number}
              disabled={renderedPage === number}
              onClick={this.onNumberBtnClick}
            >
              {number}
            </Button>
          );
        })}
        <Button id="next" disabled={renderedPage === numberOfPages} onClick={this.onNextBtnClick}>
          next
        </Button>
      </div>
    );
  }
}

export default connect((state) => ({
  persons: state.persons.persons,
  renderedPage: state.page.renderedPage,
  numberOfPages: state.page.numberOfPages
}), {changePage})(Paginator);