import React from 'react';
import {View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const SearchBar = ({
  navigation,
  searchPhrase,
  setSearchPhrase,
  clicked,
  setClicked,
  handleSearchPhrase,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.search}>
          <Feather
            name="search"
            size={24}
            color="black"
            onPress={() => setClicked(!clicked)}
          />
          <View style={styles.textInput}>
            <TextInput
              style={styles.input}
              placeholder="Search"
              value={searchPhrase}
              onChangeText={text => {
                setSearchPhrase(text);
                handleSearchPhrase(text);
              }}
            />
          </View>
        </View>
      </View>

      <Entypo
        name="cross"
        size={24}
        color="black"
        onPress={() => {
          setSearchPhrase('');
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: widthPercentage('2%'),
    backgroundColor: '#ecf0f1',
    padding: heightPercentage('0.5%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  search: {
    paddingLeft: widthPercentage('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    paddingLeft: widthPercentage('2%'),
  },
  rightspace: {
    paddingRight: widthPercentage('5%'),
  },
  input: {
    color: 'black',
    fontSize: 18,
  },
});
