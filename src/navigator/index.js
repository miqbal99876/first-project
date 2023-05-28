//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import ForgetPassword from '../screens/forgetPassword';
import OtpScreen from '../screens/otp';
import NewPassword from '../screens/newPassword';
import Home from '../screens/home';
import SocietiesScreen from '../screens/societies';
import BiitScreen from '../screens/biit';
import CalendarScreen from '../screens/calender';
import NewPost from '../screens/newPost';
import Notification from '../screens/notification';
import Profile from '../screens/profile/profile';
import Teacher from '../screens/teacher';
import Groups from '../screens/groups';
import GroupsScreen from '../screens/groups';
import AddMembers from '../screens/addmembers';
import { MyDrawer } from './drawar';
import ChatScreen from '../screens/chatscreen';
import CreateGroup from '../screens/createGroup';
import Personal from '../screens/personal';
import Friends from '../screens/friends';
import AddFriends from '../screens/add-friends';
import PermissionScreen from '../screens/give-permission';
import Users from '../screens/users';
import ClassScreen from '../screens/class';
import GroupDetail from '../screens/Group-details/group-detail';
import BottomTabBar from './bottom-tab/bottomTabBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

function Navigators() {

  const [logedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@user')
      const jsonValue = data != null ? JSON.parse(data) : null;
      setLoggedIn(jsonValue !== null ? true : false)
    } catch (e) {
      // error reading value
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        //</NavigationContainer> initialRouteName={logedIn ? 'Drawer' : 'Login'}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="SocietiesScreen" component={SocietiesScreen} />
        <Stack.Screen name="BiitScreen" component={BiitScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Teacher" component={Teacher} />
        <Stack.Screen name="GroupsScreen" component={GroupsScreen} />
        <Stack.Screen name="NewPost" component={NewPost} />
        <Stack.Screen name="AddMembers" component={AddMembers} />
        <Stack.Screen name="Drawer" component={MyDrawer} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        {/* <Stack.Screen name="Personal" component={Personal} /> */}
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="AddFriends" component={AddFriends} />
        <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="ClassScreen" component={ClassScreen} />
        <Stack.Screen name="GroupDetail" component={GroupDetail} />





        {/* <Stack.Screen name="Drawer" component={MyDrawer} /> */}
        {/* <Stack.Screen name="Drawer" component={CustomDrawer} /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigators;