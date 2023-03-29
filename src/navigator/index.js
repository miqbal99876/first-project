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

// import Coffee from '../screens/coffee';
const Stack = createNativeStackNavigator();

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={Home} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigators;