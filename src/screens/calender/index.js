import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import IP from '../IP';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [startedDate, setStartedDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [evenModal, setEventModal] = useState(false)
  const [selected, setSelected] = useState(0)
  const [time, setTime] = useState([]);

  const [loginData, setLoginData] = useState([])
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@user')
      const jsonValue = data != null ? JSON.parse(data) : null;
      setLoginData(jsonValue)
      getTimeTable(jsonValue);
    } catch (e) {
      // error reading value
    }
  }

  const getTimeTable = (user) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(IP.IP + "post/getTimeTable?section=" + user.section, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.length == 0) {
          Alert.alert('No Content to show')
        } else { setTime(result) }
      })
      .catch(error => console.log('error', error));
  }
  const onDayPress = (day) => {
    setSelectedDate(day.dateString)
  }
  const onDayLongPress = (day) => {
    setStartedDate(day.dateString)
    setEventModal(true)
    console.log(day.dateString, 'day long');

  }

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>


        {['Monthly', 'Weekly', 'Daily'].map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setSelected(index)}
            style={{
              backgroundColor: selected === index ? colors.black : colors.DEFAULT_GREY,
              height: mvs(40),
              width: mvs(80),
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
              borderRadius: 5

            }}>
            <Text style={{ color: colors.white, fontWeight: 'bold' }}>{item}</Text>
          </TouchableOpacity>
        ))}

      </View>

      <Calendar
        onDayPress={onDayPress}
        onDayLongPress={onDayLongPress}

        markedDates={{
          [selectedDate]: { selected: true, color: 'red' },
          [startedDate]: { selected: true, color: 'blue', endingDay: true, },
        }}
      // theme={{
      //   backgroundColor: '#ffffff',
      //   calendarBackground: '#ffffff',
      //   textSectionTitleColor: '#b6c1cd',
      //   textSectionTitleDisabledColor: '#d9e1e8',
      //   selectedDayBackgroundColor: '#00adf5',
      //   selectedDayTextColor: '#ffffff',
      //   todayTextColor: '#00adf5',
      //   dayTextColor: '#2d4150',
      //   textDisabledColor: '#d9e1e8',
      //   dotColor: '#00adf5',
      //   selectedDotColor: '#ffffff',
      //   arrowColor: 'orange',
      //   disabledArrowColor: '#d9e1e8',
      //   monthTextColor: 'blue',
      //   indicatorColor: 'blue',
      //   textDayFontFamily: 'monospace',
      //   textMonthFontFamily: 'monospace',
      //   textDayHeaderFontFamily: 'monospace',
      //   textDayFontWeight: '300',
      //   textMonthFontWeight: 'bold',
      //   textDayHeaderFontWeight: '300',
      //   textDayFontSize: 20,
      //   textMonthFontSize: 20,
      //   textDayHeaderFontSize: 20,
      // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default CalendarScreen;
