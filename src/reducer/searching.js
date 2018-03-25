import {CHANGE_SEARCH, MAKE_SEARCH_QUERY} from '../constants';

const defaultSearch = {
  searchValue: '',
  searchQuery: ''
};

export default (searchState = defaultSearch, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_SEARCH: return {...searchState, searchValue: payload.searchValue};
    case MAKE_SEARCH_QUERY: return {...searchState, searchQuery: payload.searchQuery};
  };

  return searchState;
};