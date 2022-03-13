export const SET_GRID_VIEW = 'SET_GRID_VIEW';
export const SET_LIST_VIEW = 'SET_LIST_VIEW';

export const setGridView = gridView => dispatch => {
  dispatch({
    type: SET_GRID_VIEW,
    payload: gridView,
  });
};

export const setListView = listView => dispatch => {
  dispatch({
    type: SET_LIST_VIEW,
    payload: listView,
  });
};
