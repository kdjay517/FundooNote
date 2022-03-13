import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import SearchBar from './SearchBar';
import FireStoreDatabase from '../../Services/Data/FireStoreDatabase';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import NotesList from './NoteList';

const SearchNotesScreen = ({navigation}) => {
  const {notesList, fetchingNote} = FireStoreDatabase();

  console.log('note list => ', typeof notesList);

  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [searchNotes, setSearchNotes] = useState({});

  const handleSearchPhrase = text => {
    let data = notesList.filter(
      item =>
        item.Note.toLowerCase().includes(
          text.toLowerCase().trim().replace(/\s/g, ''),
        ) ||
        item.Title.toLowerCase().includes(
          text.toLowerCase().trim().replace(/\s/g, ''),
        ),
    );
    setSearchNotes(data);
  };

  const states = {
    searchPhrase,
  };

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      fetchingNote();
    });
    return unSubscribe;
  }, [navigation, fetchingNote]);

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <SearchBar
          navigation={navigation}
          searchPhrase={searchPhrase}
          setClicked={setClicked}
          setSearchPhrase={setSearchPhrase}
          handleSearchPhrase={handleSearchPhrase}
        />
      </View>
      <View style={styles.notes}>
        <NotesList navigation={navigation} searchNotes={searchNotes} />
      </View>
    </SafeAreaView>
  );
};

export default SearchNotesScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: heightPercentage('2%'),
    padding: 8,
  },
  notes: {
    flex: 1,
    backgroundColor: '#fff',
    padding: heightPercentage('2%'),
    paddingHorizontal: widthPercentage('5%'),
  },
});
