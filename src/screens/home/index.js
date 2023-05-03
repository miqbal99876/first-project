//import liraries
import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList, } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { mvs } from '../../config/metrices';
import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import HomeHeader from '../../components/atoms/homeHeader';
import PrimaryInput from '../../components/atoms/inputs';
import IP from '../IP';
import Video from 'react-native-video';



// create a component
const Home = ({navigation}) => {
  const [search,setSearch]=useState('');
  const [selected,setSelected]=useState(0);
  const [value,setValue]=useState(3);

  const [data,setData]=useState([]);
  const[like,setLike]=useState(false)
// console.log('api>>>>>>>>dtata',);
var postId
// console.log('posrt>>>>',postId);

  const screenMapping = {
    'BIIT': 'BiitScreen',
    'Personal': 'Drawer',
    'Societies': 'SocietiesScreen',
    'Calendar': 'CalendarScreen',
    'Class': 'ClassScreen',
    'Student': 'StudentScreen',
    'Groups': 'GroupsScreen',
  };
  useEffect(()=>{
    // console.log(IP);
getPost();
removeReact();
  },[])
  const getPost=async(id=3)=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    console.log(global?.user?.CNIC);
   await fetch(IP.IP+"post/getPosts?cnic="+global?.user?.CNIC+"&&pageNumber=1&&fromWall="+id, requestOptions)
      .then(response => response.json())
      .then(result =>{
        console.log('result>>>>>>>>>',result);
        if(result=="Something went wrong try Again!")
        {
          setData([])
        }else{
        setData(result)
        }
      })
     
      .catch(error => console.log('error', error));
  }
  const addReact=()=>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "postId": postId,
  "userid": global.user.cnic,
  "emogie": "like"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(IP.IP+"Reacts/addReaction", requestOptions)
  .then(response => response.json())
  .then(result =>setLike(result))
  .catch(error => console.log('error', error));
  }
  const removeReact=()=>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "postId": postId,
  "userid": global.user.CNIC,
  "emogie": "like"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch( "http://192.168.0.110/BiitSocioApis/api/Reacts/deleteReact", requestOptions)
  .then(response => response.json())
  .then(result => console.log('result>>>>>><<<<<<<<<',result))
  .catch(error => console.log('error', error));
  }
    return (
      <View style={styles.container}>
        <HomeHeader navigation={navigation} />

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
          <TouchableOpacity onPress={()=>navigation.navigate('NewPost')}>
          <Ionicons name="camera-outline" size={50} color={colors.border} />
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => navigation.navigate('BIIT')}
              style={styles.iconContainer}>
              <Ionicons name="person-add" size={24} color="black" />
            </TouchableOpacity>
        </Row>
        {/* post */}
      <FlatList
      data={data}
      renderItem={({item})=>{
        // console.log('this data')
        // console.log('itemm',item.post.likesCount);
        const user=JSON.parse(item.post.user);
        console.log(item.post.user,'user.....')
       postId = item.post.id;
        // console.log('postId>>>>>>>>>',postId);
        return(
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
                source={{uri:IP.path+'Images/'+user?.profileImage}}
                style={styles.postimg}
              />
              <Text style={{color: colors.black, marginLeft: 10}}>{user.name}</Text>
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
           {item?.post?.description}
          </Text>
          {
            item?.post?.type=="image"?
            <Image
            source={{uri:IP.path+'postImages/'+item.post?.text}}
            style={{width:300,height:420}} 
    
            />
            :
            null
          }
           {
            item?.post?.type=="video"?
      
    
            <Video source={{uri: IP.path+'postImages/'+item.post.text}}   // Can be a URL or a local file.
                          // Callback when video cannot be loaded
            style={ {
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }} />
            :
            null
          }
          
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
              <TouchableOpacity onPress={()=>addReact()}>
                {like!=''?
              <Ionicons
                style={{marginLeft: 10}}
                name= {"heart"}
                size={25}
                color={'red'}
              />
            :  <Ionicons
                style={{marginLeft: 10}}
                name= {"heart-outline"}
                size={25}
                color={'black'}
              />
          }
              </TouchableOpacity>
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
        )
      }}
      />
        <View
  style={{
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: mvs(16),
  }}
>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {['BIIT','Personal','Societies','Calendar','Class','Student','Groups'].map((item, index) => (
      <TouchableOpacity onPress={()=>{
        setSelected(index); // Set the selected index
        const screenName = screenMapping[item];
        // console.log('screen name',index,item);
        // navigation.navigate(screenName,{index}); // Navigate to the corresponding screen
        if(item=="BIIT")
        {
          // setValue(3)
          getPost(3)
        }else if(item=='Student')
        {
          getPost(1)

        }
        else if(item=='Groups')
        {
          navigation.navigate(screenName,{index}); 

        } else if(item=='Class')
        {
          getPost(5)

        }else if(item=='Personal')
        {
          console.log(global.user.userType,'123')
          getPost(global.user.userType)
         

        }else if(item=='Societies')
        {
          getPost(6)

        }else if(item=='Calendar')
        {
          getPost(7)

        }
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
