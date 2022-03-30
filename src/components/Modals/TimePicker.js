import * as React from 'react';
import {Button} from 'react-native-paper';
import {TimePickerModal} from 'react-native-paper-dates';
import {Modal, Portal} from 'react-native-paper';
import moment from 'moment';

const TimePicker = ({
  visible,
  setVisible,
  hideTimeModal,
  setTime,
  setAlarmTime,
}) => {
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({hours, minutes}) => {
      setAlarmTime(moment().hours(hours).minutes(minutes).format('hh:mm '));
      setTime(moment().hours(hours).minutes(minutes).format('hh:mm a'));
      setVisible(false);
    },
    [setVisible],
  );

  const date = new Date();

  return (
    <>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={moment().hour()} // default: current hours
        minutes={moment().minutes()} // default: current minutes
        label="Select time" // optional, default 'Select time'
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
      />
    </>
  );
};

export default React.memo(TimePicker);
