import {CHANGE_PAGE, CHANGE_NUMBER_OF_PAGES} from '../constants';

const defaultPage = {
  renderedPage: 1,
  numberOfPages: 1
};

export default (pageState = defaultPage, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_PAGE: return {...pageState, renderedPage: payload.renderedPage};
    case CHANGE_NUMBER_OF_PAGES: return {...pageState, numberOfPages: payload.numberOfPages}
  };

  return pageState;
};