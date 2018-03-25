import {START, SUCCESS, FAIL, LARGE_DATA_LOAD, SMALL_DATA_LOAD} from '../constants';

const defaultState = {
  loading: false,
  loaded: false,
  persons: []
}

export default (personsState = defaultState, action) => {
  const {type, response, status} = action;

  switch (type) {
    case SMALL_DATA_LOAD + START:
      return {...personsState, loading: true};
    case SMALL_DATA_LOAD + SUCCESS:
      return {loading: false, loaded: true, persons: response};
    case SMALL_DATA_LOAD + FAIL:
      return {...personsState, loading: false, loaded: false, status};

    case LARGE_DATA_LOAD + START:
      return {...personsState, loading: true};
    case LARGE_DATA_LOAD + SUCCESS:
      return {loading: false, loaded: true, persons: response};
    case LARGE_DATA_LOAD + FAIL:
      return {...personsState, loading: false, loaded: false, status};
  };

  return personsState;
};