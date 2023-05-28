//import liraries
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


// create a component
const Splash = ({ navigation }) => {
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@user')
      const jsonValue = data != null ? JSON.parse(data) : null;
      setTimeout(() => {
        jsonValue !== null ? navigation.replace('Drawer') : navigation.replace('Login')
      }, 2000)
    } catch (e) {
      // error reading value
    }
  }
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.jpg')}
        style={{ alignSelf: 'center', width: 100, height: 100, marginTop: 10 }} />
      <Text style={styles.logo}>BIIT SOCIAL</Text>
    </View>
  );
};

export default Splash;

