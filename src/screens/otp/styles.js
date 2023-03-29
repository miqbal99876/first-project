import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";
export default styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: mvs(24),
      fontWeight: 'bold',
      color: colors.black,
      textAlign: 'center',
      marginTop: mvs(20),
      marginBottom:mvs(10)
    },
    subtitle:{
      fontSize: mvs(16),
      fontWeight: 'bold',
      color: colors.border,
      textAlign:'center'
    
    },
  
    otpContainer: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center'
    },
    otpInput: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor:colors.DEFAULT_WHITE,
      borderRadius: 5,
      marginHorizontal: 10,
      fontSize: 20,
      textAlign: 'center',
      marginTop:mvs(20),
      elevation:5,
      backgroundColor:colors.DEFAULT_WHITE,
      marginBottom:mvs(20)
    },
    time:{color:colors.DEFAULT_GREEN,textAlign:'center', marginBottom:mvs(20)},
    subcontainer:{justifyContent:'center',alignItems:'center',marginBottom:mvs(30)},
    receive:{color:colors.border,fontWeight:'bold'},
    resend:{color:colors.black,fontWeight:'bold',marginLeft:5}
  });