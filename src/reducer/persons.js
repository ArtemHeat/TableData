import {START, SUCCESS, FAIL, LARGE_DATA_LOAD, SMALL_DATA_LOAD} from '../constants';

const defaultState = {
  loading: false,
  loaded: false,
  isLargeDataLoaded: false,
  persons: []
}

export default (personsState = defaultState, action) => {
  const {type, response, status} = action;

  switch (type) {
    case SMALL_DATA_LOAD + START:
      return {...personsState, loading: true, loaded: false, isLargeDataLoaded: false};
    case SMALL_DATA_LOAD + SUCCESS:
      return {...personsState, loading: false, loaded: true, isLargeDataLoaded: false, persons: response};
    case SMALL_DATA_LOAD + FAIL:
      return {...personsState, loading: false, loaded: false, isLargeDataLoaded: false, status};

    case LARGE_DATA_LOAD + START:
      return {...personsState, loading: true, loaded: false, isLargeDataLoaded: false};
    case LARGE_DATA_LOAD + SUCCESS:
      return {...personsState, loading: false, loaded: true, isLargeDataLoaded: true, persons: response};
    case LARGE_DATA_LOAD + FAIL:
      return {...personsState, loading: false, loaded: false, isLargeDataLoaded: false, status};
  };

  return personsState;
};