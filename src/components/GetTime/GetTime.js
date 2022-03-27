import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class GetTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
      fDay: '',
      sDay: '',
    };
  }

  componentDidMount() {
    this.Clock = setInterval(() => this.handleTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.Clock);
  }

  handleTime() {
    var date, TimeType, hour, minutes, fullTime, fullDay, shortDay;

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

    day = date.getDay();
    if (day === 1) {
      fullDay = 'Monday';
      shortDay = 'Tuesday';
    }
    if (day === 2) {
      fullDay = 'Tuesday';
      shortDay = 'Tue';
    }
    if (day === 3) {
      fullDay = 'Wednsday';
      shortDay = 'Wed';
    }
    if (day === 4) {
      fullDay = 'Thursday';
      shortDay = 'Thu';
    }
    if (day === 5) {
      fullDay = 'Friday';
      shortDay = 'Fri';
    }
    if (day === 6) {
      fullDay = 'Saturday';
      shortDay = 'Sat';
    }
    if (day === 7) {
      fullDay = 'Sunday';
      shortDay = 'Sun';
    }

    fullTime =
      hour.toString() + ':' + minutes.toString() + ':' + TimeType.toString();

    this.setState({
      time: fullTime,
      fDay: fullDay,
      sDay: shortDay,
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
