//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { Row } from './row';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { mvs } from '../../config/metrices';
import {colors} from '../../config/colors';

const HomeHeader = ({navigation}) => {
    const toggleDrawer1 = () => {
      navigation.toggleDrawer()
    };
  
    return (
      <View style={styles.container}>
        <Row
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: mvs(16),
            marginTop: mvs(16),
          }}>
          <Row style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={toggleDrawer1}>
              <Octicons name="three-bars" size={25} color={colors.black} />
            </TouchableOpacity>
            <Text style={{marginLeft: 20}}>SOCIO</Text>
          </Row>
          <Row style={{alignItems: 'center'}}>
            <Ionicons
              name="search"
              size={25}
              color={colors.black}
              style={{marginRight: 20}}
            />
            <Octicons
            onPress={()=>{
              navigation.navigate('Notification')
            }}
              name="bell-fill"
              size={25}
              color={colors.black}
              style={{marginRight: 20}}
            />
            <Image
              source={require('../../assets/coffees/imag2.jpg')}
              style={{height: 30, width: 30, borderRadius: 15}}
              resizeMode="contain"
            />
          </Row>
        </Row>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
      
    },
});

//make this component available to the app
export default HomeHeader;
