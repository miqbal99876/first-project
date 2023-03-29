//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Row style={{padding:mvs(16),alignItems:'center'}}>
            <Octicons name='three-bars' size={25}color={colors.black}/>
            <Text>SOCIO</Text>
<Ionicons name='search'size={25}color={colors.black}/>
<Octicons name='bell-fill' size={25}color={colors.black}/>

           </Row>




            </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: colors.DEFAULT_WHITE,
      
    },
});

//make this component available to the app
export default Home;
