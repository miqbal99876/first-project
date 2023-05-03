//import liraries
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { PrimaryButton } from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import IP from '../IP';
import styles from './styles';
import { log } from 'react-native-reanimated';

// create a component
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loder, setLoder] = useState(false);
  console.log(IP,'ip')

  const sendToLogin = async () => {
    if (email == '') {
      alert("Enter email")
      return;
    }
    else if (password == '') {
      alert("Enter email")
      return;
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      setLoder(true)
      var raw = JSON.stringify({
        "CNIC": email,
        "password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      console.log('IP.IP>>>>>', IP.IP);

      await fetch(IP.IP + "User/LoginUser", requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.statusCode==300)
          {
            alert(result.message)
            return
          }
          global.user = result?.user;

          navigation.navigate('Drawer')

        })
        .catch(error => console.log('error>>>>>>>>>>>>>>>', error));
    }
    setLoder(false)

  }
  return (
    <View style={styles.container}>
      {/* body  */}
      <Image source={require('../../assets/images/logo.jpg')} style={{ alignSelf: 'center', width: 100, height: 100, marginTop: 10 }} />
      <Text style={styles.logo}>BIIT SOCIO</Text>
      <View style={styles.innercontainer}>

        <Text style={styles.login}>Login</Text>
        <ScrollView  style={styles.innercontent}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>
            You Have Been {'\n'}Missed For Long Time
          </Text>

          <PrimaryInput
            value={email}
            placeholder="Enter Email"
            label={'Email'}
            keyboardType={'email-address'}
            onChangeText={str => setEmail(str)}
          />
          <PrimaryInput
            value={password}
            placeholder="*********"
            label={'Password'}
            secureTextEntry
            onChangeText={str => setPassword(str)}
          />
          <Row
            style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Row style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons
                name={'checkbox-blank-outline'}
                size={35}
                color={colors.DEFAULT_GREY}
              />
              <Text
                style={{ marginLeft: 10, fontSize: 12, color: colors.black }}>
                Remember Me
              </Text>
            </Row>
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={{ marginLeft: 10, fontSize: 12, color: colors.black }}>
              <Text style={{ color: 'black' }}> Forget Password?</Text>
            </TouchableOpacity>
          </Row>
          <View style={{ marginTop: 16 }}>
            <PrimaryButton loading={loder} title='LOGIN' onPress={() => sendToLogin()} />
          </View>


          {/* <TextInput keyboardType='email-address' secureTextEntry/> */}
        </ScrollView>
      </View>
    </View>
  );
};
//make this component available to the app
export default Login;

