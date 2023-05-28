import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/colors';
import Home from '../../screens/home';
import Personal from '../../screens/personal';
import { styles } from './bottomTamBar.style';
import { mvs } from '../../config/metrices';
import Class from '../../screens/class';
import CalendarScreen from '../../screens/calender';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Student from '../../screens/Student';
import Teacher from '../../screens/Teacher_';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
function BottomTabBar() {

  const [notifications, setNotifications] = useState(0);
  const [allNotifications, setAllNotifi] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [initialRoute, setInitialRoute] = useState('Home');

  const navigation = useNavigation();

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@user')
      const jsonValue = data != null ? JSON.parse(data) : null;
      if (jsonValue !== null) {
        setIsAdmin(jsonValue.userType == 3 ? true : false)
        console.log(jsonValue.userType == 3, '-----');
      }
    } catch (e) {
      // error reading value
    }
  }

  return (
    <Tab.Navigator
      // initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 5,
          position: 'absolute', borderTopLeftRadius: 20,
          height: 70, elevation: 10, backgroundColor: 'white', borderTopEndRadius: 20,
        },
      }}>
      {!isAdmin && <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: colors.DEFAULT_GREEN,
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
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
                <Text style={[styles.tabText, { color: color }]}>
                  Biit
                </Text>
              </View>
            );
          },
        }}
      />}
      <Tab.Screen
        name="Personal"
        component={Personal}
        options={{
          tabBarActiveTintColor: colors.DEFAULT_GREEN,
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={styles.container}>
                <Image source={require('../../assets/icons/personal.png')} style={{ height: mvs(30), width: mvs(30) }} />
                <Text style={[styles.tabText, { color: color }]}>
                  Personal
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Student"
        component={Student}
        options={{
          tabBarActiveTintColor: colors.DEFAULT_GREEN,
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={styles.container}>
                <Image source={require('../../assets/icons/student.png')} style={{ height: mvs(30), width: mvs(30) }} />
                <Text style={[styles.tabText, { color: color }]}>
                  Student
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Teacher"
        component={Teacher}
        options={{
          tabBarActiveTintColor: colors.DEFAULT_GREEN,
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={styles.container}>
                {/* <Image source={require('../../assets/icons/student.png')} style={{ height: mvs(30), width: mvs(30) }} /> */}

                <AntDesign name={'user'} size={25} color={colors.black} />
                <Text style={[styles.tabText, { color: color }]}>
                  Teacher
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
          tabBarActiveTintColor: colors.DEFAULT_GREEN,
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={styles.container}>
                <Image source={require('../../assets/icons/class.png')} style={{ height: mvs(30), width: mvs(30) }} />
                <Text style={[styles.tabText, { color: color }]}>
                  Class
                </Text>
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          tabBarActiveTintColor: colors.DEFAULT_GREEN,
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={styles.container}>
                <Image source={require('../../assets/icons/calender.png')} style={{ height: mvs(30), width: mvs(30) }} />
                <Text style={[styles.tabText, { color: color }]}>
                  Calender
                </Text>
              </View>
            );
          },
        }}
      /> */}
      {/* </Stack.Navigator> */}
    </Tab.Navigator>
  );
}

export default BottomTabBar;
