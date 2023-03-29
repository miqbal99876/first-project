//import liraries
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PrimaryButton } from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import styles from './styles';

// create a component
const Login = ({navigation}) => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    return (
      <View style={styles.container}>
        {/* body  */}

        <Text style={styles.logo}>BIIT SOCIO</Text>
        <View style={styles.innercontainer}>
          <Text style={styles.login}>Login</Text>
          <View style={styles.innercontent}>
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
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <Row style={{alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name={'checkbox-blank-outline'}
                  size={35}
                  color={colors.DEFAULT_GREY}
                />
                <Text
                  style={{marginLeft: 10, fontSize: 12, color: colors.black}}>
                  Remember Me
                </Text>
              </Row>
              <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')} style={{marginLeft: 10, fontSize: 12, color: colors.black}}>
              <Text> Forget Password?</Text> 
              </TouchableOpacity>
            </Row>
            <View style={{marginTop:16}}>
            <PrimaryButton title='LOGIN' onPress={()=>navigation.navigate('Home')}/>
            </View>


            {/* <TextInput keyboardType='email-address' secureTextEntry/> */}
          </View>
        </View>
      </View>
    );
};
//make this component available to the app
export default Login;

