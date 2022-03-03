import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class GetTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
    };
  }

  componentDidMount() {
    this.Clock = setInterval(() => this.handleTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.Clock);
  }

  handleTime() {
    var date, TimeType, hour, minutes, seconds, fullTime;

    date = new Date();

    hour = date.getHours();
    if (hour <= 11) {
      TimeType = 'a.m.';
    } else {
      TimeType = 'p.m.';
    }
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour == 0) {
      hour = 12;
    }

    minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = '0' + minutes.toString();
    }

    fullTime =
      hour.toString() + ':' + minutes.toString() + ':' + TimeType.toString();

    this.setState({
      time: fullTime,
    });
  }

  render() {
    return (
      <View>
        <Text> Edited {this.state.time} </Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create(
// {
//   MainContainer:
//   {
//      justifyContent: 'center',
//      alignItems: 'center',
//      flex:1,
//      margin: 10

//   },

//   TextStyle:
//   {
//      fontSize: 26,
//      textAlign: 'center',
//      color: '#009688',
//      marginBottom: 20,
//   }

// });
