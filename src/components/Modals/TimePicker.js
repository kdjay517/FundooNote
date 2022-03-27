import * as React from 'react';
import {Button} from 'react-native-paper';
import {TimePickerModal} from 'react-native-paper-dates';
import {Modal, Portal} from 'react-native-paper';
import moment from 'moment';

const TimePicker = ({visible, setVisible}) => {
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({hours, minutes}) => {
      setVisible(false);
    },
    [setVisible],
  );

  return (
    <>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12} // default: current hours
        minutes={0} // default: current minutes
        label="Select time" // optional, default 'Select time'
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
      />
    </>
  );
};

export default React.memo(TimePicker);
