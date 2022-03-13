import {SET_GRID_VIEW, SET_LIST_VIEW} from './Actions';

const initialState = {
  gridView: false,
  listView: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GRID_VIEW:
      return {...state, gridView: action.payload};
    case SET_LIST_VIEW:
      return {...state, listView: action.payload};
    default:
      return state;
  }
};

export default userReducer;
