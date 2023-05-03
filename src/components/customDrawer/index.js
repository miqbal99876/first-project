import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../config/colors';
import { TextIcon } from '../texticon';
import { Row } from '../atoms/row';
import { Diary, Gallery1, Logout } from '../../assets/images';
import { mvs } from '../../config/metrices';

const CustomDrawer = ({navigation}) => {
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
        <View style={{marginTop: mvs(70)}}>
          <TextIcon title={'Teacher'} icon={'user'} />
          <TextIcon title={'Friends'} icon={'adduser'} />
<TouchableOpacity onPress={()=>navigation.navigate('GroupsScreen')}>
          <TextIcon title={'Groups'} icon={'addusergroup'} />
          </TouchableOpacity>

          <TextIcon
            title={'Gallery'}
            image={Gallery1}
            imageStyle={{height: 25, width: 25}}
          />
          <TextIcon
            title={'Diary'}
            image={Diary}
            imageStyle={{height: 25, width: 25}}
          />
          <TextIcon
            title={'Logout'}
            image={Logout}
            imageStyle={{height: 25, width: 25}}
          />

          {/* <Image source={Gallery1} style={{height:20,width:20,}} /> */}
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  container: {
      flex: 1,
    backgroundColor:colors.white
  },
});