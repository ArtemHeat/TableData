import {CHANGE_SORT_ORDER, CHANGE_SORT_TYPE} from '../constants';

const defaultSort = {
  sortType: 'id',
  isAscending: true
};

export default (sortState = defaultSort, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_SORT_TYPE: return {...sortState, sortType: payload.sortType, isAscending: payload.isAscending};
    case CHANGE_SORT_ORDER: return {...sortState, isAscending: payload.isAscending};
  };

  return sortState;
};