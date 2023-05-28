import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useEffect } from 'react'
import IP from '../IP'
import { useState } from 'react'
import { colors } from '../../config/colors'
import { Row } from '../../components/atoms/row'

const Users = ({ navigation }) => {
  const [user, setUsers] = useState([]);
  const [loginData, setLoginData] = useState([])
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@user')
      const jsonValue = data != null ? JSON.parse(data) : null;
      setLoginData(jsonValue)
      getAllUsers(jsonValue);
    } catch (e) {
      // error reading value
    }
  }

  const getAllUsers = (user) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(IP.IP + "User/getAllUsers?pageNo=1&cnic=" + user.CNIC, requestOptions)
      .then(response => response.json())
      .then(result => setUsers(result))
      .catch(error => console.log('error', error));
  };

  const sendFriendRequest = (val) => {
    console.log('vcvvvvvvvvv', val);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "RequestedBy": loginData.CNIC,
      "RequestedTo": val,
      "status": "pending"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(IP.IP + "Friends/sendFriendRequest", requestOptions)
      .then(response => response.json())
      .then(result => Alert.alert(result))
      .catch(error => console.log('error', error));
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 16,
          height: 64,
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}
      >
        <TouchableOpacity
          style={{ position: 'absolute', left: 16 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Users
        </Text>
      </View>
      {user?.map((item, index) => {
        console.log('all users', item.countFriends);
        return (

          <View key={index} style={{ backgroundColor: colors.DEFAULT_WHITE, marginHorizontal: 16, marginTop: 20, elevation: 10, padding: 5, marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Row>
              {item?.user?.profileImage !== null ?
                <Image
                  source={{ uri: IP.path + 'Images/' + item?.user?.profileImage }}
                  style={{ height: 60, width: 60, borderRadius: 30 }} />
                : <Image source={require('../../assets/images/cover.png')} style={{ height: 60, width: 60, borderRadius: 30 }} />}

              <View style={{ marginLeft: 16 }}>
                <Text style={{ color: colors.black, fontWeight: 'bold' }}>{item?.user?.name}</Text>
              </View>
            </Row>
            <TouchableOpacity onPress={() => sendFriendRequest(item?.user?.CNIC)} disabled={item?.countFriends === 1}>
              <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: item.countFriends ? colors.DEFAULT_GREEN : colors.DEFAULT_YELLOW, padding: 10, width: 100 }}>
                <Text style={{ color: colors.white }}>{item.countFriends ? 'Friend' : 'Add'}</Text>

                {/* <Text style={{color:colors.white}}>Add</Text> */}
              </View>
            </TouchableOpacity>

          </View>
        )
      }
      )}
    </View>
  )
}
export default Users
const styles = StyleSheet.create({})