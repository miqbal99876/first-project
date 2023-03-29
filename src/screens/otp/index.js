import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { PrimaryButton } from '../../components/atoms/buttons';
import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import styles from './styles';


const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (value) => {
    setOtp(value);
  };
 const handleOtpSubmit = () => {
    // Handle OTP submission logic here
  };

  return (
    <View style={styles.container}>
        <View style={{marginTop:mvs(20)}}> 

     <View style={{height:80}}/>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}> We Have Sent A 4 Digits Code{'\n'}To Your Email Adress</Text>
      <View style={styles.otpContainer}>
        {[...Array(4)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={otp[index]}
            onChangeText={handleOtpChange}
          />
        ))}
      </View>
      <Text style={styles.time}>00:58</Text>
      <Row style={styles.subcontainer}>
        <Text style={styles.receive}>Don't Receive The Otp?</Text>
        <Text style={styles.resend}>RESEND OTP</Text>

      </Row>
      <View style={{paddingHorizontal:mvs(16)}}>
      <PrimaryButton title='VERIFY NOW' onPress={()=>navigation.navigate('NewPassword')}/>
      </View>
      
      </View>
    </View>
  );
};
export default OtpScreen;