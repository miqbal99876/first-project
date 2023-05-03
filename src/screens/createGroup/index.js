//import liraries
import React, {  useEffect,useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput,KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/colors';
import { Camera, Pic } from '../../assets/images';
import { mvs } from '../../config/metrices';
import PrimaryInput from'../../components/atoms/inputs';
import { PrimaryButton } from '../../components/atoms/buttons';
import { log } from 'react-native-reanimated';

// create a component
const CreateGroup = ({navigation}) => {
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[category,setCategory]=useState('')


    useEffect(()=>{
const arr=[1,2,3,4,5];
// arr.push(6);
const arr2=[...arr,7] 
// arr.pop(5)
console.log(arr2);
    },[])
   
    return (
      <KeyboardAvoidingView style={styles.container}>
       
        {/* body */}
        <View style={{paddingHorizontal: 16, marginTop: 10}}>
          <Icon name={'arrow-back'} size={25} color={colors.black} />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: mvs(70),
            }}>
            <Image
              source={Pic}
              style={{height: 150, width: 150, borderRadius: 75}}
            />
            <View style={{position: 'absolute', bottom: 5}}>
              <TouchableOpacity>
                <Image
                  source={Camera}
                  style={{height: 30, width: 30, marginLeft: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <PrimaryInput
            value={title}
            placeholder={'Group Title'}
            onChangeText={str => setTitle(str)}
            placeholderTextColor={colors.black}
          />
          <TextInput
            value={description}
            placeholder={'Description'}
            onChangeText={str => setDescription(str)}
            placeholderTextColor={colors.black}
            style={styles.desc}
            multiline={true}
          />
       
          <PrimaryButton title='Add Members' onPress={()=>navigation.navigate('AddMembers',{description,title})}/>
        </View>
      </KeyboardAvoidingView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: colors.DEFAULT_WHITE,
    },
    desc:{
        height: 125,
        width: '100%',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 5,
        padding: 10,
        textAlignVertical: 'top', // This property will make the text start from the top
      }
});

//make this component available to the app
export default CreateGroup;
