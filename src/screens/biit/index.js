//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeHeader from '../../components/atoms/homeHeader';
import Post from '../../components/atoms/post';
import { colors } from '../../config/colors';



// create a component
const BiitScreen = () => {
    return (
        <View style={styles.container}>
          <HomeHeader/>
        <View>
        <Post/>

        </View>
     
      
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.DEFAULT_WHITE,
    },
});

//make this component available to the app
export default BiitScreen;
