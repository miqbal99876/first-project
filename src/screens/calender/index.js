import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,FlatList, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import IP from '../IP';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selected,setSelected]=useState(0)
  const[time,setTime]=useState([]);

useEffect(()=>{
  getTimeTable();
},[
  
])
const getTimeTable=()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(IP.IP+"post/getTimeTable?section="+global?.user?.section, requestOptions)
    .then( response => response.json())
    .then(result =>{
      if(result.length==0){
     Alert.alert('No Content to show')
    } else{setTime(result)}})
    .catch(error => console.log('error', error));
}
const onDayPress = (day)=> {
  setSelectedDate(day.dateString)
}
  return (
    <View style={styles.container}>
      {/* <FlatList
      data={time}
      keyExtractor={(item)=>item.id}
      renderItem={(({item})=>(
        <View>
<Text>{item?.slot},{item?.wednesday}</Text>
{console.log('slots>>>>>>',item)}
        </View>

      ))}
    /> */}
      <View style={{marginTop: 20,flexDirection:'row',justifyContent:'center'}}>
     
     
        {['Monthly','Weekly','Daily'].map((item,index)=>(
  <TouchableOpacity key={index} onPress={()=>setSelected(index)}
  style={{
    backgroundColor: selected===index?colors.black :colors.DEFAULT_GREY,
    height: mvs(40),
    width: mvs(80),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:10,
    borderRadius:5
    
  }}>
  <Text style={{color: colors.white,fontWeight:'bold'}}>{item}</Text>
</TouchableOpacity>
        ))}
      
      </View>
 
      <Calendar
     
     onDayPress={onDayPress}
     markedDates={{[selectedDate]: {selected: true}}}
     theme={{
       backgroundColor: '#ffffff',
       calendarBackground: '#ffffff',
       textSectionTitleColor: '#b6c1cd',
       textSectionTitleDisabledColor: '#d9e1e8',
       selectedDayBackgroundColor: '#00adf5',
       selectedDayTextColor: '#ffffff',
       todayTextColor: '#00adf5',
       dayTextColor: '#2d4150',
       textDisabledColor: '#d9e1e8',
       dotColor: '#00adf5',
       selectedDotColor: '#ffffff',
       arrowColor: 'orange',
       disabledArrowColor: '#d9e1e8',
       monthTextColor: 'blue',
       indicatorColor: 'blue',
       textDayFontFamily: 'monospace',
       textMonthFontFamily: 'monospace',
       textDayHeaderFontFamily: 'monospace',
       textDayFontWeight: '300',
       textMonthFontWeight: 'bold',
       textDayHeaderFontWeight: '300',
       textDayFontSize: 20,
       textMonthFontSize: 20,
       textDayHeaderFontSize: 20,
     }}
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
