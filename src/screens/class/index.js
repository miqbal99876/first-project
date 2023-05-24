// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';

// const YourComponent = () => {
//   const [currentDayLectures, setCurrentDayLectures] = useState([]);
//   const [timetable, setTimetable] = useState([]);


//   const currentDate = new Date();
// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const currentDayOfWeek = daysOfWeek[currentDate.getDay()];


// const fridayLectures = timetable.filter(lecture => lecture.wednesday);

// console.log("filteredtimetable",fridayLectures);

// console.log('current day',currentDayOfWeek);


//   const gettimeTable=()=>{
//     var requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     };
    
//     fetch("http://192.168.0.116/BiitSocioApis/api/post/getTimeTable?section=BCS-8C&userType=1", requestOptions)
//       .then(response => response.json())
//       .then(result => {
//         console.log('result>>>>>>>>>', result);
//         if (result == "Something went wrong try Again!") {
//           setTimetable([])
//         } else {
//           setTimetable(result)
//         }
//       })
//       .catch(error => console.log('error', error));
//   }

//   useEffect(() => {
  
//     gettimeTable();

   
//   }, []);

//   return (
//     <View style={{flex:1}}>
//       <Text>Today's Lectures:</Text>
//       {timetable.map((lecture) => (
//         <View key={lecture.id} style={{flexDirection:'row'}}>
//           <Text>Slot: {lecture.slot}</Text>

          
//           <Text> {lecture.friday}</Text> 
          
//         </View>
//       ))}
//     </View>
//   );
// };

// export default YourComponent;
//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList, Alert, } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { mvs } from '../../config/metrices';
import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import HomeHeader from '../../components/atoms/homeHeader';
import PrimaryInput from '../../components/atoms/inputs';
import IP from '../IP';
import Video from 'react-native-video';
import Share from 'react-native-share';



// create a component
const Class = ({ navigation,route }) => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(1);
  const [hide, setHide] = useState(null)
  const [value, setValue] = useState(3);
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [showAlert, setShowAlert] = useState(false); 
  const [react, setReact] = useState(''); 
  const[likes,setLikes]=useState([])
  const[filter,setFilter]=useState([])

  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const currentTime = `${hours}:${minutes}:${seconds}`;
  const year1 = `${day}/${month}/${year}`

  console.log('current user ',global.user);
  console.log(year1);
 const screenMapping = {
    'BIIT': 'BiitScreen',
    'Personal': 'Personal',
    'Societies': 'SocietiesScreen',
    'Calendar': 'CalendarScreen',
    'Class': 'ClassScreen',
   
  };
  useEffect(() => {
    // console.log(IP);
    getPost();
    getReact();
  
    // removeReact();
  }, [refresh])
  const getPost = async (id=3) => {
 

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    console.log(global?.user?.CNIC);
    await fetch(IP.IP + "post/getPosts?cnic="+global.user.CNIC+ "&pageNumber=1&fromWall=" +id, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('posts result ', result);
        if(result=='No more posts'){
          return Alert.alert('No more posts')
        }
        else if (result == "Something went wrong try Again!") {
          setData([])
        } else {
          setData(result);
          global.post=result
        }
      })

      .catch(error => console.log('error', error));
  }
  const addReact = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "postId": id,
      "userid": global?.user?.CNIC,
      "emogie": "like"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(IP.IP + "Reacts/addReaction", requestOptions)
      .then(response => response.json())
      .then(result =>{ console.log('result>>>>>>>>', result);getReact(id);setRefresh(true)})
      .catch(error => console.log('error', error));
  }

  const deletePost = (id) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(IP.IP + "Post/deletePost?post_id=" +id, requestOptions)
      .then(response => response.json())
      .then(result => {setRefresh(!refresh)})
      .catch(error => console.log('error', error));
  }
  const addComment = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "userId": global.user.cnic,
      "postId": id,
      "dateTime": year1,
      "repliedOn": 82,
      "text": comment
    });



    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(IP.IP + "comments/addComment", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // Reload the page to show the latest comments
        setRefresh(!refresh)
        setComment('')
      })
      .catch(error => console.log('error', error));
  }
  const getComment = (id) => {


    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(IP.IP + "comments/getComment?post_id=" +id, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('result>>>>>>>>>', result);
        if (result == "Something went wrong try Again!") {
          setComments([])
        } else {
          setComments(result)
        }
      })
      .catch(error => console.log('error', error));
  }

  const onShare = async (item) => {


    const shareOptions = {
      message: item.post.description, // The text of the post
      url: IP.path + 'postImages/' + item.post?.text, // The URL of the image to be shared
      title: 'Share', // The title of the sharing dialog
    };
    try {
      console.log(shareOptions);
      const result = await Share.open(shareOptions);
      if (result.action === Share.sharedAction) {
        Alert.alert('Post shared successfully');
      } else if (result.action === Share.dismissedAction) {
        Alert.alert('Post sharing dismissed');
      }
    } catch (error) {
      Alert.alert(error.message);
    }


    return (
      <View>
        <Image source={{ uri: post.imageUrl }} style={{ width: 200, height: 200 }} />
        <Text>{post.text}</Text>
        <Button title="Share" onPress={onShare} />
      </View>
    );
  }

const getReact=async(react)=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(IP.IP+"Reacts/getReactions?post_id="+react, requestOptions)
    .then(response =>response.json())
    .then(result => {console.log('get reaction>>>>>>>>',result);setRefresh(true)})
    .catch(error => console.log('error', error));
}



const filteredPosts = data.filter(post => console.log('admin posts',post));
console.log('filteredPosts>>>>>>>>>>',filteredPosts);

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
        <TouchableOpacity onPress={() => navigation.navigate('NewPost',{data:'Class'})}>
          <Ionicons name="camera-outline" size={50} color={colors.border} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Users')}
          style={styles.iconContainer}>
          <Ionicons name="person-add" size={24} color="black" />
        </TouchableOpacity>
      </Row>
      {/* post */}
      <FlatList
        data={data}
        renderItem={({ item }) => {
          // console.log('this dat',item?.post?.type==="text")
          // console.log('itemm',item.post.likesCount);

          // console.log(item.post.name)
         
          console.log('postId>>>>>>>>>',item.post.id);

          
          //   ?item?.post?.user 
          //  :JSON.parse(item?.post?.user)
          const user =JSON.parse(item?.post?.user)
           console.log('userrrrrr',user?.name)
           const dateTimeString =item?.post?.dateTime
           const dateOnly = dateTimeString.split(" ")[0];
           
           console.log(dateOnly);


          return (
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
                <Row style={{ alignItems: 'center' }}>
             
                  <Image
                    // source={{uri:IP.path+'Images/'+user?.profileImage}}
                    source={require('../../assets/images/eid.png')}
                    style={styles.postimg}
                  />
                  {/* {console.log(typeof(JSON.parse(item?.post?.user)),'--------------item-----------------')} */}
                  <Text style={{ color: colors.black, marginLeft: 10 }}>{user?.name}</Text>
                </Row>
                <Row style={{ alignItems: 'center' }}>
                  <Text style={{ color: colors.black }}>{dateOnly}</Text>
                  <TouchableOpacity onPress={() => setShowAlert(true)}>
                    <Entypo
                      name="dots-three-vertical"
                      size={25}
                      color={colors.black}
                    />
                  </TouchableOpacity>
                  {showAlert && (
                    Alert.alert(
                      'Delete Post or Pin',
                      'Are you sure you want to delete or Pin this post?',
                      [
                        {
                          text: 'Cancel',
                          onPress: () => setShowAlert(false),
                          style: 'cancel'
                        },
                        { text: 'OK', onPress: () => {deletePost(item.post.id);setShowAlert(false)}},
                     
                      ],
                      { cancelable: false }
                    )
                  )}
                </Row>
              </Row>
              <Text style={{ color: colors.black, marginTop: mvs(20), marginBottom: 5 }}>
                {item?.post?.description}
              </Text>
              {console.log(IP.path + 'postImages/' + item.post?.text, item?.post?.type)}
              {
                item?.post?.type == "image" ?
                  <Image
                    source={{ uri: IP.path + 'postImages/' + item.post?.text }}
                    style={{ width: '100%', height: 420, backgroundColor: 'black' }}

                  />
                  :
                  null
              }
              {
                item?.post?.type == "video" ?


                  <Video source={{ uri: IP.path + 'postImages/' + item.post.text }}   // Can be a URL or a local file.
                    // Callback when video cannot be loaded
                    style={{
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
                <Row style={{ justifyContent: 'space-evenly' }}>
                  <TouchableOpacity onPress={() => { setHide(item.post.id); getComment(item?.post?.id) }}>
                    <Ionicons
                      name="chatbubble-ellipses-outline"
                      size={25}
                      color={colors.black}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addReact(item.post.id)}>

   <Ionicons
   style={{ marginLeft: 10 }}
   name={item.isLiked?"heart":"heart-outline"}
   size={25}
   color={item.isLiked?"red":"black"}
 />
   </TouchableOpacity>
                  <TouchableOpacity onPress={() => onShare(item)}>
                    <Icon
                      style={{ marginLeft: 10 }}
                      name="send-o"
                      size={25}
                      color={colors.black}
                    />
                  </TouchableOpacity>

                </Row>
                <Text style={{ color: colors.black }}>{item?.post?.CommentsCount == null ? "0 comment" : item?.post?.CommentsCount + "comments"}</Text>
              </Row>
              {/* {console.log(hide,'find>>>>>>>>>>>>',data.find(ele=>ele?.post?.id===hide)?.post.id)} */}
              {item.post.id === hide && (
                <View>
                  <Row style={{ justifyContent: 'space-between' }}>
                    <TextInput
                      placeholder='Write Comment here.....'
                      value={comment}
                      onChangeText={(str) => setComment(str)}
                      multiline={true}
                      placeholderTextColor={'black'}
                      style={{ borderWidth: 1, width: '80%' }} />
                    <TouchableOpacity onPress={() => { addComment(item.post.id); setHide(null); setComment('');setReact(item.post.id) }} style={{ padding: 10, backgroundColor: 'blue', borderRadius: 10 }}>
                      <Text style={{ color: 'white' }}>Send</Text>
                    </TouchableOpacity>
                  </Row>
                  <View style={{ height: 80, width: '100%', elevation: 5, backgroundColor: 'white' }}>
                    {/* {console.log(comments?.length,'--------------------')} */}
                    <FlatList data={comments}

                      renderItem={({ item }) => {
                        // console.log('comments>>>>>>>>>>>',item);
                        return (
                          <ScrollView>
                            <Text style={{ color: 'black', marginLeft: 10 }}>{item?.text}</Text>

                          </ScrollView>

                        )
                      }}
                    />
                  </View>
                </View>
              )}

              <Text style={{ borderBottomWidth: 0.7, borderColor: colors.border, }}></Text>

              <Row
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 16,
                  marginBottom: 16,
                  margin: 5,
                }}>
                <Text>Liked by</Text>
                <Text style={{ color: colors.black }}> Shahid</Text>
                <Text> and</Text>
                <Text style={{ color: colors.black }}>1 More User</Text>
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
          {['BIIT', 'Personal', 'Societies', 'Calendar', 'Class'].map((item, index) => (
            <TouchableOpacity onPress={() => {
              setSelected(index); // Set the selected index
              const screenName = screenMapping[item];
              // console.log('screen name',index,item);
              // navigation.navigate(screenName,{index}); // Navigate to the corresponding screen
              if (item == "BIIT") {
                navigation.navigate(screenName, { index });
               
              } else if (item == 'Student') {
                getPost(1)

              }
              else if (item == 'Groups') {
                navigation.navigate(screenName, { index });

              } else if (item == 'Class') {
                navigation.navigate(screenName, { index });


              } else if (item == 'Personal') {
                navigation.navigate(screenName, { index });


              } else if (item == 'Societies') {
                navigation.navigate(screenName, { index });

              } else if (item == 'Calendar') {
                navigation.navigate(screenName, { index });


              }
            }}
              key={index}
              style={{
                backgroundColor: selected === index ? colors.black : colors.DEFAULT_GREY,
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
  input: {

    borderWidth: 0.7,
    width: '60%',
    borderRadius: 20,
    padding: 10,
    height: 45,
  },
  search: {
    // backgroundColor: 'red',

    marginTop: mvs(35),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(16)
  },
  searchimg: { height: mvs(50), width: mvs(50), borderRadius: 25 },
  postimg: { height: mvs(50), width: mvs(50), borderRadius: 10 },
});

//make this component available to the app
export default Class;

