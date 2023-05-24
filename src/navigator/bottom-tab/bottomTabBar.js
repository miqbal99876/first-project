import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/colors';
import Home from '../../screens/home';
import Personal from '../../screens/personal';
import { styles } from './bottomTamBar.style';
import { mvs } from '../../config/metrices';
import Class from '../../screens/class';
import CalendarScreen from '../../screens/calender';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
function BottomTabBar() {
  const [notifications, setNotifications] = useState(0);
  const [allNotifications, setAllNotifi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Home');

  const navigation = useNavigation();
 
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {paddingVertical: 5,
           position: 'absolute',borderTopLeftRadius:20,
            height: 70,elevation:10,backgroundColor:'white',borderTopEndRadius:20,},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor:colors.DEFAULT_GREEN,
          tabBarInactiveTintColor:colors.black,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <View style={styles.container}>
                <Ionicons
                  name={'compass-outline'}
                  size={30}
                  color={
                    focused
                      ? colors.DEFAULT_GREEN
                      : colors.black
                  }></Ionicons>
                <Text style={[styles.tabText, {color: color}]}>
                 Biit
                </Text>
              </View>
            );
          },
        }}
      />
        <Tab.Screen
        name="Personal"
        component={Personal}
        options={{
          tabBarActiveTintColor:colors.DEFAULT_GREEN,
          tabBarInactiveTintColor:colors.black,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <View style={styles.container}>
               <Image source={require('../../assets/icons/personal.png')}style={{height:mvs(30),width:mvs(30)}}/>
                <Text style={[styles.tabText, {color: color}]}>
             Personal
                </Text>
              </View>
            );
          },
        }}
      />
          <Tab.Screen
        name="Class"
        component={Class}
        options={{
          tabBarActiveTintColor:colors.DEFAULT_GREEN,
          tabBarInactiveTintColor:colors.black,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <View style={styles.container}>
               <Image source={require('../../assets/icons/class.png')}style={{height:mvs(30),width:mvs(30)}}/>
                <Text style={[styles.tabText, {color: color}]}>
                Class
                </Text>
              </View>
            );
          },
        }}
      />
           <Tab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          tabBarActiveTintColor:colors.DEFAULT_GREEN,
          tabBarInactiveTintColor:colors.black,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <View style={styles.container}>
               <Image source={require('../../assets/icons/calender.png')}style={{height:mvs(30),width:mvs(30)}}/>
                <Text style={[styles.tabText, {color: color}]}>
                Calender
                </Text>
              </View>
            );
          },
        }}
      />
            <Tab.Screen
        name="Student"
        component={Personal}
        options={{
          tabBarActiveTintColor:colors.DEFAULT_GREEN,
          tabBarInactiveTintColor:colors.black,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <View style={styles.container}>
               <Image source={require('../../assets/icons/student.png')}style={{height:mvs(30),width:mvs(30)}}/>
                <Text style={[styles.tabText, {color: color}]}>
                Student
                </Text>
              </View>
            );
          },
        }}
      />

{/* </Stack.Navigator> */}
    </Tab.Navigator>
  );
}

export default BottomTabBar;
