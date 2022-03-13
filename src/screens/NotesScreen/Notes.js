import React, {useRef} from 'react';
import {TextInput} from 'react-native';

const Notes = props => {
  const noteRef = useRef();

  return (
    <>
      <TextInput
        value={props.title}
        style={{fontSize: 24}}
        placeholder="Title"
        returnKeyType="next"
        onSubmitEditing={() => {
          noteRef.current.focus();
        }}
        blurOnSubmit={false}
        onChangeText={title => {
          props.setTitle(title);
        }}
      />

      <TextInput
        value={props.note}
        style={{fontSize: 20}}
        placeholder="Note"
        ref={noteRef}
        multiline={true}
        onChangeText={note => {
          props.setNote(note);
        }}
      />
    </>
  );
};

export default Notes;
