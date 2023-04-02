//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';
import { colors } from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { Row } from '../../components/atoms/row';
import { mvs } from '../../config/metrices';

// create a component
const Notification = () => {
    return (
      <View style={styles.container}>
        <Row
          style={{
            width: '70%',
            justifyContent: 'space-between',
            paddingHorizontal: mvs(16),
            marginTop: mvs(16),
          }}>
          <Icon name="arrow-back" size={30} color={colors.black} />
          <Text style={{fontWeight: 'bold', color: colors.black, fontSize: 20}}>
            Notification
          </Text>
        </Row>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: mvs(16), marginTop: mvs(16)}}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <Row key={index} style={{justifyContent: 'space-between',marginBottom:30}}>
              <Row>
                <Image
                  source={require('../../assets/images/mattia-righetti-gbBWpX2sXmU-unsplash.jpg')}
                  style={{height: 50, width: 50, borderRadius: mvs(25)}}
                />
                <View style={{marginLeft: 16}}>
                  <Text style={{fontWeight: 'bold', color: colors.black}}>
                    Shahid
                    <Text style={{color: colors.border}}> Like Your Post</Text>
                  </Text>
                  <Text>03/06/2023</Text>
                </View>
              </Row>
              <Image
                source={require('../../assets/images/mountain.jpg')}
                style={{height: 50, width: 50, borderRadius: 5}}
              />
            </Row>
          ))}
        </ScrollView>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    
        backgroundColor:colors.white,
    },
});

//make this component available to the app
export default Notification;
