import * as React from 'react';
import {Button, Portal, Modal} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import moment from 'moment';
const DatePicker = ({
  visible,
  setVisible,
  hideDayModal,
  setDate,
  showDayModal,
  setFullDate,
}) => {
  const onDismiss = React.useCallback(() => {
    setVisible(false);
    hideDayModal();
  }, [setVisible]);

  const onChange = React.useCallback(
    ({date}) => {
      setDate(moment(date).format('DD MMMM'));
      setFullDate(moment(date).format('YYYY-MM-DD'));
      console.log(date);
      hideDayModal();
    },
    [setVisible],
  );

  const date = new Date();

  return (
    <>
      <Portal>
        <DatePickerModal
          mode="single"
          visible={visible}
          onDismiss={onDismiss}
          date={date}
          onConfirm={onChange}
          saveLabel="Save"
          label="Select date"
          animationType="slide"
        />
      </Portal>
    </>
  );
};

export default React.memo(DatePicker);
