//import liraries
import React, { useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { mvs } from '../../config/metrices';
import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import HomeHeader from '../../components/atoms/homeHeader';
import PrimaryInput from '../../components/atoms/inputs';



// create a component
const Home = ({navigation}) => {
  const [search,setSearch]=useState('');
  const [selected,setSelected]=useState(0);
  const screenMapping = {
    'BIIT': 'BiitScreen',
    'Personal': 'Drawer',
    'Societies': 'SocietiesScreen',
    'Calendar': 'CalendarScreen',
    'Class': 'ClassScreen',
    'Student': 'StudentScreen',
  };
    return (
      <View style={styles.container}>
        <HomeHeader />

        <Row style={styles.search}>
          <Image
            source={require('../../assets/coffees/imag2.jpg')}
            style={styles.searchimg}
          />
          <TextInput
            placeholder={"Whats's on your Mind"}
            style={styles.input}
            placeholderTextColor={colors.black}
            value={search}
            onChangeText={str => setSearch(str)}
          />
          <Ionicons name="camera-outline" size={50} color={colors.border} />
        </Row>
        {/* post */}
        <View
          style={{
            backgroundColor: colors.DEFAULT_WHITE,
            elevation: 2,
            paddingHorizontal: mvs(16),
            marginTop: 20,
            borderTopLeftRadius: 10,
            borderTopEndRadius: 10,
          }}>
          <Row
            style={{
              marginTop: mvs(20),
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Row style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/coffees/imag2.jpg')}
                style={styles.postimg}
              />
              <Text style={{color: colors.black, marginLeft: 10}}>Shahid</Text>
            </Row>
            <Row style={{alignItems: 'center'}}>
              <Text style={{color: colors.black}}>5 minutes ago</Text>
              <Entypo
                name="dots-three-vertical"
                size={25}
                color={colors.black}
              />
            </Row>
          </Row>
          <Text style={{color: colors.black, marginTop: mvs(20)}}>
            Some Fun
          </Text>
          {/* like */}
          <Row
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: mvs(30),
              marginBottom: mvs(20),
            }}>
            <Row style={{justifyContent: 'space-evenly'}}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={25}
                color={colors.black}
              />
              <Ionicons
                style={{marginLeft: 10}}
                name="heart"
                size={25}
                color={'red'}
              />
              <Icon
                style={{marginLeft: 10}}
                name="send-o"
                size={25}
                color={colors.black}
              />
            </Row>
            <Text style={{color: colors.black}}>0 comments</Text>
          </Row>
          <Text style={{borderBottomWidth: 0.7,borderColor:colors.border}}></Text>
          <Row
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 16,
              marginBottom: 16,
              margin: 5,
            }}>
            <Text>Liked by</Text>
            <Text style={{color: colors.black}}> Shahid</Text>
            <Text> and</Text>
            <Text style={{color: colors.black}}>1 More User</Text>
          </Row>
        </View>
        <View
  style={{
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: mvs(16),
  }}
>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {['BIIT','Personal','Societies','Calendar','Class','Student'].map((item, index) => (
      <TouchableOpacity onPress={()=>{
        setSelected(index); // Set the selected index
        const screenName = screenMapping[item];
        console.log('screen name',index,item);
        navigation.navigate(screenName,index); // Navigate to the corresponding screen
      }}
        key={index}
        style={{
          backgroundColor:selected===index?colors.black :colors.DEFAULT_GREY,
          borderRadius: 20,
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          marginHorizontal: 5 // Add some margin between each text component
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: colors.DEFAULT_WHITE,
            fontWeight: 'bold',
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: colors.DEFAULT_WHITE,
      
    },
    input:{

        borderWidth: 0.7,
        width:'60%',
       borderRadius: 20,
        padding: 10,
        height:45,
     },
     search:{
        // backgroundColor: 'red',
     
        marginTop: mvs(35),
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:mvs(16)
      },
      searchimg:{height: mvs(50), width: mvs(50), borderRadius: 25},
      postimg:{height: mvs(50), width: mvs(50), borderRadius: 10},
});

//make this component available to the app
export default Home;
