import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mvs } from '../../config/metrices';
import { colors } from '../../config/colors';
import { Row } from '../../components/atoms/row';


export default function GroupDetail({route}) {
    const item=route.params.item;
    console.log('item>>>>>>>',item);
  return (
    <View>
      <View>
          <Image
            source={require('../../assets/images/cover.png')}
            style={{width: '100%', height: 150}}
            resizeMode="cover"
          />
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              bottom: mvs(-50),
            }}>
            <Image
              source={require('../../assets/images/cover.png')}
              style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
                borderRadius: 15,
              }}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={{alignSelf: 'center', marginTop: 50}}>
          <Text
            style={{
              alignSelf: 'center',
              color: colors.black,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
          {item?.name}
          </Text>
          <Text style={{alignSelf: 'center', color: colors.black}}>
            {item?.isOfficial?'Official: true':null}
          </Text>
         
        </View>
        <Row style={{paddingHorizontal:mvs(70),justifyContent:'space-between',marginBottom:mvs(30)}}>
            <Text>Admin</Text>
            <Text>{item?.Admin}</Text>

          </Row>
          <Row style={{paddingHorizontal:mvs(70),justifyContent:'space-between',marginBottom:mvs(30)}}>
            <Text>Members</Text>
            <Text>{item?.memberCount==null?'0':null}</Text>

          </Row>
    </View>
  )
}

const styles = StyleSheet.create({})