//import liraries
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import HomeHeader from '../../components/atoms/homeHeader';
import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';



// create a component
const SocietiesScreen = ({navigation,route}) => {
  const [search,setSearch]=useState('');
  const [selected,setSelected]=useState();
  console.log('seeeeeeeeee',selected);

  const roll=route?.params

  const screenMapping = {
    'BIIT': 'BiitScreen',
    'Personal': 'PersonalScreen',
    'Societies': 'SocietiesScreen',
    'Calendar': 'CalendarScreen',
    'Class': 'ClassScreen',
    'Student': 'StudentScreen',
  };
  useEffect(()=>{
    const roll=route?.params;
    setSelected(roll)
  },[])
    return (
      <View style={styles.container}>
        <HomeHeader />
        <Row style={{alignItems: 'center', marginHorizontal: 16}}>
          <TouchableOpacity style={{marginRight: 5}}>
            <View
              style={{
                backgroundColor: colors.black,
                height: 80,
                width: 70,
                marginTop: mvs(20),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Octicons name="plus" size={25} color={colors.DEFAULT_WHITE} />
            </View>
            <Text style={{fontSize: 12}}>Your Story</Text>
          </TouchableOpacity>
          {[1, 2, 3].map((it, index) => (
            <View key={index} style={{marginHorizontal: 5, marginTop: 20}}>
              <Image
                source={require('../../assets/coffees/imag2.jpg')}
                style={{height: 80, width: 70, borderRadius: 15}}
              />
              <Text>Programing</Text>
            </View>
          ))}
        </Row>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            paddingHorizontal: mvs(16),
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              'BIIT',
              'Personal',
              'Societies',
              'Calendar',
              'Class',
              'Student',
            ].map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  setSelected(index);
                  const screenName = screenMapping[item];
                  navigation.navigate(screenName);
                }}
                key={index}
                style={{
                  backgroundColor:
                    selected === index ? colors.black : colors.DEFAULT_GREY,
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  marginHorizontal: 5, // Add some margin between each text component
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: colors.DEFAULT_WHITE,
                    fontWeight: 'bold',
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: colors.DEFAULT_WHITE,
      
    },
    input:{

        borderWidth: 0.7,
        width:'60%',
       borderRadius: 20,
        padding: 10,
        height:45,
     },
     search:{
        // backgroundColor: 'red',
     
        marginTop: mvs(35),
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:mvs(16)
      },
      searchimg:{height: mvs(50), width: mvs(50), borderRadius: 25},
      postimg:{height: mvs(50), width: mvs(50), borderRadius: 10},
});

//make this component available to the app
export default SocietiesScreen;
