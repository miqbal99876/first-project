//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import { Row } from '../../components/atoms/row';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextIcon } from '../../components/texticon';


// create a component
const Teacher = () => {
    return (
      <View style={styles.container}>
        <View style={{paddingHorizontal: mvs(16), marginTop: 16}}>
          <Row>
            <Image
              source={require('../../assets/images/eid.png')}
              style={{height: 80, width: 80, borderRadius: 10}}
              resizeMode="cover"
            />
            <View style={{marginLeft: 16}}>
              <Text style={{color: colors.black, fontWeight: 'bold'}}>
                Teacher
              </Text>
              <Text>teacher@gmail.com</Text>
            </View>
          </Row>
          {/* body */}
          <View style={{marginTop:mvs(70)}}>

        
         <TextIcon title={'Teacher'} icon={'user'}/>
         <TextIcon title={'Friends'} icon={'adduser'}/>
         <TextIcon title={'Groups'} icon={'addusergroup'}/>
         </View>
        </View>
      </View>   
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       color:colors.DEFAULT_WHITE
    },
});

//make this component available to the app
export default Teacher;
