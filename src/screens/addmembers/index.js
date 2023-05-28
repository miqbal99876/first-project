//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../../config/colors';
import { Row } from '../../components/atoms/row';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import { mvs } from '../../config/metrices';
import IP from '../IP';
import AsyncStorage from '@react-native-async-storage/async-storage';


// create a component
const AddMembers = ({ navigation, route }) => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])


  const [loginData, setLoginData] = useState([])
  useEffect(() => {
    getData()
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

  const apiGetFriends = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(IP.IP + "Friends/getFriends?user_id=" + loginData?.CNIC, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.length == 0) {
          Alert.alert('Please add Friends to Create group')
        }
        {
          // console.log(result[0]);
          setData(result)
        }
      })
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    apiGetFriends()
  }, [])

  const sendToapi = () => {
    let count = 0;
    let cnic = '';
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.selected) {
        count++;
        if (cnic.length > 1) {
          cnic += ',' + item.CNIC
        } else {
          cnic += item.CNIC
        }
      }
    }
    if (count == 0) {
      alert("Please select users!")
      return
    }
    var formdata = new FormData();
    formdata.append("admin", loginData?.CNIC);
    formdata.append("description", route?.params?.description);
    formdata.append("name", route?.params?.title);
    formdata.append("profile", "null");
    formdata.append("isOfficial", loginData.userType == "1" ? false : true);
    formdata.append("memberCount", count);
    formdata.append("users", cnic);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(IP.IP + "/groups/addgroup", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.statusCode == 200) {
          console.log(88);
          navigation.navigate('GroupsScreen')
        }
      })
      .catch(error => console.log('error', error));
  }
  return (
    <View style={styles.container}>

      <Row
        style={{
          justifyContent: 'space-between',
          paddingHorizontal: mvs(16),
          marginTop: 16,

        }}>
        <Icon name={'arrow-back'} size={25} color={colors.black} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.black }}>
          Add Members
        </Text>
        <TouchableOpacity onPress={() => {
          sendToapi()
        }}>
          <Text style={{ color: colors.black }}>Create</Text>
        </TouchableOpacity>

      </Row>
      {/* search */}
      <View style={styles.textinputview}>
        <Icons name="search" size={20} color="#333" style={styles.icon} />
        <TextInput
          placeholder="Search here"
          style={styles.input}
          placeholderTextColor="#999"
          value={search}
          onChangeText={(str) => setSearch(str)}
        />

      </View>
      <ScrollView>
        {/* card */}
        {data.map((item, index) => (
          <TouchableOpacity onPress={() => {
            let value = [...data]
            if (item.selected) {
              item.selected = false
            } else {
              item.selected = true
            }
            value[index] = item
            setData(value)
          }}>
            <Row key={index} style={{ backgroundColor: item.selected ? colors.DEFAULT_GREEN : colors.DEFAULT_WHITE, marginHorizontal: 16, marginTop: 20, elevation: 10, padding: 5 }}>
              <Image source={require('../../assets/images/cover.png')} style={{ height: 60, width: 60, borderRadius: 30 }} />
              <View style={{ marginLeft: 16 }}>
                <Text style={{ color: colors.black, fontWeight: 'bold' }}>{item?.name}</Text>
                <Text>{item?.userType == "3" ? "Admin" : item?.userType == "2" ? "Teacher" : item?.section}</Text>
              </View>
            </Row>
          </TouchableOpacity>
        ))}
      </ScrollView>


    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textinputview: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginTop: 20,
    elevation: 5
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',

  },
  icon: {
    marginRight: 10,
  },
});

//make this component available to the app
export default AddMembers;
