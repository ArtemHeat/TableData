import {START, SUCCESS, FAIL} from '../constants'
export default store => next => action => {
  const {callAPI, type, ...rest} = action
  if (!callAPI) return next(action)

  next({
    ...rest, type: type + START
  })

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      next({...rest, type: type + SUCCESS, response: xhr.response});
    } else {
      next({...rest, type: type + FAIL, status: 'Статус ответа ' + xhr.status});
    }
  });

  xhr.addEventListener('error', () =>
    next({...rest, type: type + FAIL, status: 'Произошла ошибка соединения'}))

  xhr.open('GET', callAPI);
  xhr.send();
}