//import liraries
import React, { useState,useEffect} from 'react';
import { View, Text, StyleSheet,TextInput, Image, ScrollView,KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../../config/colors';
import { Row } from '../../components/atoms/row';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import { mvs } from '../../config/metrices';
import IP from '../IP';
import CreateGroup from '../createGroup';
import { useIsFocused } from '@react-navigation/native';

// create a component
const Friends = ({navigation}) => {
    const[search, setSearch]=useState('')
    const[data, setData]=useState([])
    
let isfoc=useIsFocused()

    
      const getGroups=async()=>{
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        // console.log('global.user.userType',global.user)
       await fetch(IP.IP+"Friends/getFriends?user_id="+global?.user?.CNIC, requestOptions)
          .then(response => response.json())
          .then(result =>
            { 
              if(result.length>0)
              {
              setData(result)
              }
              else{
                Alert.alert('No Friends');

              }
          })
         
          .catch(error => console.log('error>>>>ssss>>>>>>>', error));
      }
   


    useEffect(()=>{
getGroups();
    },[isfoc])
    return (
      <View style={styles.container}>
      
        <Row
          style={{
            justifyContent: 'space-between',
            paddingHorizontal: mvs(16),
            marginTop: 16,
           
          }}>
            
          <Icon name={'arrow-back'} size={25} color={colors.black} onPress={()=>navigation.goBack()}/>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.black}}>
          Friends
          </Text>
          <Text style={{color: colors.black}}></Text>
          <TouchableOpacity onPress={()=>navigation.navigate('AddFriends')}>
          <Icons name={'plus'} size={25} color={colors.black} />
          </TouchableOpacity>
        </Row>
        {/* search */}
        <View style={styles. textinputview}>
        
      <Icons name="search" size={20} color="#333" style={styles.icon} />
      <TextInput
        placeholder="Search here"
        style={styles.input}
        placeholderTextColor="#999"
        value={search}
        onChangeText={(str)=>setSearch(str)}
      />
    
    </View>
    <ScrollView>
    {/* card */}
{data.map((item,index)=>{
  console.log(item);
  return(
    <TouchableOpacity key={index} onPress={()=>navigation.navigate('ChatScreen',item)}>
    <Row  style={{backgroundColor:colors.DEFAULT_WHITE,marginHorizontal:16,marginTop:20,elevation:10,padding:5,marginBottom:10}}>
    {
                item?.profileImage !== null ?
                  <Image
                    source={{ uri: IP.path + 'Images/' + item?.profileImage }}
                    style={{height:60,width:60,borderRadius:30}}

                  />
   : <Image source={require('../../assets/images/cover.png')}style={{height:60,width:60,borderRadius:30}}/>
    
    }

    <View style={{marginLeft:16}}>
        <Text style={{color:colors.black,fontWeight:'bold'}}>{item?.name}</Text>
        <Text>{item?.email}</Text>
    </View>
   </Row>
   </TouchableOpacity>
  )
}
)}
</ScrollView>
   

      </View>
    );
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white,
    },
    textinputview: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 16,
        marginTop: 20,
        elevation:5
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
export default Friends;