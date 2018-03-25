import {CHANGE_SEARCH, CHANGE_SORT_ORDER, CHANGE_SORT_TYPE, MAKE_SEARCH_QUERY,
  SMALL_DATA_LOAD, LARGE_DATA_LOAD, CHANGE_PAGE, CHANGE_NUMBER_OF_PAGES,
  CHANGE_DETAILED_INFORMATION
} from '../constants';

export function changeSearch(searchValue) {
  return {
    type: CHANGE_SEARCH,
    payload: { searchValue }
  }
}

export function makeSearchQuery(searchQuery) {
  return {
    type: MAKE_SEARCH_QUERY,
    payload: { searchQuery }
  }
}

export function changeSortType(sortType) {
  return {
    type: CHANGE_SORT_TYPE,
    payload: { sortType }
  }
}

export function changeSortOrder(isAscending) {
  return {
    type: CHANGE_SORT_ORDER,
    payload: { isAscending }
  }
}

export function smallDataLoad() {
  console.log('small data loading');
  return {
    type: SMALL_DATA_LOAD,
    callAPI: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  }
}

export function largeDataLoad() {
  return {
    type: LARGE_DATA_LOAD,
    callAPI: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  }
}

export function changePage(renderedPage) {
  return {
    type: CHANGE_PAGE,
    payload: { renderedPage }
  }
}

export function changeNumberOfPages(numberOfPages) {
  return {
    type: CHANGE_NUMBER_OF_PAGES,
    payload: { numberOfPages }
  }
}

export function changeDetailedInf(detailedId, detailedFirstName, detailedLastName, detailedEmail) {
  return {
    type: CHANGE_DETAILED_INFORMATION,
    payload: { detailedId, detailedFirstName, detailedLastName, detailedEmail }
  }
}