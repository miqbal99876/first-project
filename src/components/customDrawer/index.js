import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import { Row } from '../atoms/row';
import { TextIcon } from '../texticon';
import { Permission } from '../../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = ({ navigation }) => {

  const [loginData, setLoginData] = useState([])
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@user')
      const jsonValue = data != null ? JSON.parse(data) : null;
      setLoginData(jsonValue)
    } catch (e) {
      // error reading value
    }
  }

  const onLogoutPress = async () => {
    try {
      await AsyncStorage.removeItem('@user')
      navigation.replace('Login')
    } catch (e) {
      // saving error
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: mvs(16), marginTop: 16 }}>
        <Row>
          <Image
            source={require('../../assets/images/eid.png')}
            style={{ height: 80, width: 80, borderRadius: 10 }}
            resizeMode="cover"
          />
          <View style={{ marginLeft: 16 }}>
            <Text style={{ color: colors.black, fontWeight: 'bold' }}>
              {loginData?.name}
            </Text>
            <Text>{loginData?.email}</Text>
          </View>
        </Row>
        {/* body */}
        <View style={{ marginTop: mvs(70) }}>
          <TextIcon title={'Teacher'} icon={'user'} />
          <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
            <TextIcon title={'Friends'} icon={'adduser'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('GroupsScreen')}>

            <TextIcon title={'Groups'} icon={'addusergroup'} />

          </TouchableOpacity>
          <Row style={{ marginBottom: 16 }}>
            <View style={styles.common}>
              <Image source={require('../../assets/images/gallery1.png')} style={{ height: 30, width: 30 }} />
            </View>
            <Text style={{ marginLeft: 20, fontWeight: 'bold', color: 'black' }}>Gallery</Text>
          </Row>
          <Row style={{ marginBottom: 16 }}>
            <View style={styles.common}>
              <Image source={require('../../assets/images/diary.png')} style={{ height: 30, width: 30 }} />
            </View>
            <Text style={{ marginLeft: 20, fontWeight: 'bold', color: 'black' }}>Diary</Text>
          </Row>

          <Pressable onPress={onLogoutPress}>
            <Row style={{ marginBottom: 16 }}>
              <View style={styles.common}>
                <Image source={require('../../assets/images/logout1.png')} style={{ height: 30, width: 30 }}
                />
              </View>

              <Text style={{ marginLeft: 20, fontWeight: 'bold', color: 'black' }}>Logout</Text>
            </Row>
          </Pressable>
          <Row style={{ marginBottom: 16 }}>
            <View style={styles.common}>
              <Image source={Permission} style={{ height: 30, width: 30 }} /></View>

            <TouchableOpacity onPress={() => navigation.navigate('PermissionScreen')}>
              <Text style={{ marginLeft: 20, fontWeight: 'bold', color: 'black' }}>Give Permissions</Text>
            </TouchableOpacity>
          </Row>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  common: {
    backgroundColor: colors.white, borderRadius: 12, padding: 5, width: 50, elevation: 5, justifyContent: 'center', alignItems: 'center'
  },
});