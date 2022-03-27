import React from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ReminderCard from './ReminderCard';

const Reminder = ({navigation, reminder}) => {
  const {gridView} = useSelector(state => state.userReducer);
  let numCols = gridView ? 2 : 0;
  const renderItem = ({item}) => (
    <ReminderCard navigation={navigation} item={item} gridView={gridView} />
  );

  return (
    <>
      <FlatList
        numColumns={numCols}
        data={reminder}
        renderItem={renderItem}
        key={numCols}
      />
    </>
  );
};

export default Reminder;
