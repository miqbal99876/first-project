//import liraries
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import styles from './styles';
// create a component
const NewPassword = ({navigation}) => {
    const [npassword, setNpassword]=useState('');
    const [password, setPassword]=useState('');
    return (
      <View style={styles.container}>
        {/* body  */}

        <Text style={styles.logo}>BIIT SOCIO</Text>
        <View style={styles.innercontainer}>
          <Text style={styles.getpassword}>Reset Password?</Text>
          <View style={styles.innercontent}>
            <View style={{marginTop: 20, marginBottom: mvs(20)}}>
              <PrimaryInput
               value={npassword}
              secureTextEntry
                placeholder="New Password"
                onChangeText={str => setNpassword(str)}
              />
                  <PrimaryInput
               value={password}
              secureTextEntry
                placeholder="Confirm Password"
                onChangeText={str => setPassword(str)}
              />
            </View>

            <View style={{marginTop: mvs(20)}}>
              <PrimaryButton
                title="GET EMAIL"
                onPress={() => navigation.navigate('OtpScreen')}
              />
            </View>

            <Text style={styles.goto}>Enter Your New Password Below</Text>

            {/* <TextInput keyboardType='email-address' secureTextEntry/> */}
          </View>
        </View>
      </View>
    );
};



//make this component available to the app
export default NewPassword;

// define your styles
