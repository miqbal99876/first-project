import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Row } from '../row';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { mvs } from '../../../config/metrices';
import { colors } from '../../../config/colors';

const Post=()=>{
 return(
  <View
          style={{
            backgroundColor: colors.DEFAULT_WHITE,
            elevation: 2,
            paddingHorizontal: mvs(16),
            marginTop: 20,
            borderTopLeftRadius: 10,
            borderTopEndRadius: 10,
          }}>
          <Row
            style={{
              marginTop: mvs(20),
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Row style={{alignItems: 'center'}}>
              <Image
                source={require('../../../assets/coffees/imag2.jpg') }
                style={styles.postimg}
              />
              <Text style={{color: colors.black, marginLeft: 10}}>Shahid</Text>
            </Row>
            <Row style={{alignItems: 'center'}}>
              <Text style={{color: colors.black}}>5 minutes ago</Text>
              <Entypo
                name="dots-three-vertical"
                size={25}
                color={colors.black}
              />
            </Row>
          </Row>
         <Image source={require('../../../assets/images/mountain.jpg')} style={{marginTop:20,width:'100%'}}resizeMode='contain'/>
          {/* like */}
          <Row
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: mvs(30),
              marginBottom: mvs(20),
            }}>
            <Row style={{justifyContent: 'space-evenly'}}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={25}
                color={colors.black}
              />
              <Ionicons
                style={{marginLeft: 10}}
                name="heart"
                size={25}
                color={'red'}
              />
              <Icon
                style={{marginLeft: 10}}
                name="send-o"
                size={25}
                color={colors.black}
              />
            </Row>
            <Text style={{color: colors.black}}>0 comments</Text>
          </Row>
          <Text style={{borderBottomWidth: 0.7,borderColor:colors.border}}></Text>
          <Row
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 16,
              marginBottom: 16,
              margin: 5,
            }}>
            <Text>Liked by</Text>
            <Text style={{color: colors.black}}> Shahid</Text>
            <Text> and</Text>
            <Text style={{color: colors.black}}>1 More User</Text>
          </Row>
        </View>
    )
}
export default Post;
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