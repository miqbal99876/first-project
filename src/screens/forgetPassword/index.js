//import liraries
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { PrimaryButton } from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import { mvs } from '../../config/metrices';
import styles from './styles';

// create a component
const ForgetPassword = ({navigation}) => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    return (
      <View style={styles.container}>
        {/* body  */}

        <Text style={styles.logo}>BIIT SOCIO</Text>
        <View style={styles.innercontainer}>
          <Text style={styles.getpassword}>Forget Password?</Text>
          <View style={styles.innercontent}>
            <Text style={styles.title}>
              Enter The Email Associated With Your{'\n'}Account To Receive Reset
              Password Mail{' '}
            </Text>

            <View style={{marginTop: 20, marginBottom: mvs(20)}}>
              <PrimaryInput
              value={email}
                placeholder="Enter Email"
                //   label={'Email'}
                keyboardType={'email-address'}
                onChangeText={str => setEmail(str)}
              />
            </View>

            <View style={{marginTop: mvs(20)}}>
              <PrimaryButton title="GET EMAIL" onPress={()=>navigation.navigate('OtpScreen')} />
            </View>

            <Text style={styles.goto}>Back To Login</Text>

            {/* <TextInput keyboardType='email-address' secureTextEntry/> */}
          </View>
        </View>
      </View>
    );
};



//make this component available to the app
export default ForgetPassword;

// define your styles
