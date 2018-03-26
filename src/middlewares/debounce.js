var timeout;
export default store => next => action => {
  const { debounce } = action;
  if(debounce){
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      next(action)
    }, debounce)
  }else{
    next(action)
  }
}