export const SET_GRID_VIEW = 'SET_GRID_VIEW';
export const SET_LABEL_DATA = 'SET_LABEL_DATA';

export const setGridView = gridView => dispatch => {
  dispatch({
    type: SET_GRID_VIEW,
    payload: gridView,
  });
};

export const setLabelData = labelData => dispatch => {
  dispatch({
    type: SET_LABEL_DATA,
    payload: labelData,
  });
};
