const themesReducer = (state = 'theme1', action) => {
  switch (action.type) {
    case '':
      return;
    default:
      return state;
  }
}

export default themesReducer;