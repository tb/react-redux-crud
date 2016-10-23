export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      state = Object.assign({}, state, {
        redirectTo: '/',
        token: action.data.token,
        currentUser: action.data.user
      });
      break;
    case 'LOGOUT':
      state = Object.assign({}, state, {
        redirectTo: '/',
        token: null,
        currentUser: undefined
      });
      break;
  }

  return state;
};
