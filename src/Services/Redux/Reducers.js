import {SET_GRID_VIEW, SET_LABEL_DATA} from './Actions';

const initialState = {
  gridView: false,
  labelData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GRID_VIEW:
      return {...state, gridView: !state.gridView};
    case SET_LABEL_DATA:
      return {...state, labelData: action.payload};
    default:
      return state;
  }
};

export default userReducer;
