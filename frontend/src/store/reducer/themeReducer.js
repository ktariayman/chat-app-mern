import { createStore } from 'redux';

const initialState = {
  mode: 'light'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODE':
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};
export default reducer;
