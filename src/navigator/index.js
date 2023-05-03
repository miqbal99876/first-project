//import liraries
import React from 'react';
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
const Stack = createNativeStackNavigator();

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={Home} />
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

        
        {/* <Stack.Screen name="Drawer" component={MyDrawer} /> */}
        {/* <Stack.Screen name="Drawer" component={CustomDrawer} /> */}
       
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigators;