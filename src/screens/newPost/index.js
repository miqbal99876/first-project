//import liraries
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { default as Icon, default as Ionicons } from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Row } from '../../components/atoms/row';
import PrimaryModal from '../../components/modals/primary-modal';
import { colors } from '../../config/colors';
import IP from '../IP';
import BottomTabBar from '../../navigator/bottom-tab/bottomTabBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const NewPost = ({ navigation, route }) => {

  const selectedScreen = route?.params.data;

  console.log('selected Screen', selectedScreen);
  const [desc, setDesc] = useState(''); console.log(desc);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null); console.log(value);
  const [model, setModal] = useState(false)
  const [image, setImage] = useState(null);
  //  const[desciplines,setDescipline]=useState([]);console.log(desciplines.sections)
  const [upload, setUpload] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [section, setSection] = useState([]); console.log('>>>>>>>>>>>', section);
  const [selected, setSelected] = useState('');
  const [hide, setHide] = useState(false)

  const [desciplines, setDesciplines] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]); console.log('>>>>>>>>>>>', selectedItems)
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Month is zero-indexed, so we add 1 to get the actual month value
  const year = currentDate.getFullYear();
  console.log(day + "-" + month + "-" + year);
  const arr = selectedItems;
  const str = arr.join(", ");

  const [loginData, setLoginData] = useState([])
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@user')
      const jsonValue = data != null ? JSON.parse(data) : null;
      setLoginData(jsonValue)
      getdesciplines(jsonValue);
    } catch (e) {
      // error reading value
    }
  }

  const fromGallery = () => {
    ImagePicker.openPicker({
      //   width: 400,
      //   height: 200,
      //   cropping: true,
      compressImageMaxHeight: 800,
      compressImageMaxWidth: 800,
      mediaType: 'photo',

    }).then((image) => {
      console.log('image object ', image);
      setImage(image.path);
      setImageDimensions({ width: image.width, height: image.height });
      setModal(false)
      var filename = image.path.substring(image.path.lastIndexOf('/') + 1);
      setUpload({
        uri: image.path,
        type: image.mime,
        name: filename,
      })
    });
  };
  const fromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      //   cropping: true,
      mediaType: 'photo',
    }).then((image) => {
      setImage(image.path);
      setModal(false)

    });
  };
  const uploadPosts = () => {


    if (selectedScreen == 'Home') {
      id = loginData?.userType
      if (loginData?.userType === id) {
        id = loginData?.userType
      }

    } else if (selectedScreen == 'Personal') {
      id = loginData?.userType
    } else if (selectedScreen == 'class') {
      id = 5
    }
    if (loginData?.userType === 3) {
      setSelected('All')
    } else {
      setSelected(str)
    }


    var formdata = new FormData();
    formdata.append("postedBy", loginData?.CNIC);
    formdata.append("postFor", selected);
    formdata.append("description", desc);
    formdata.append("dateTime", day + "-" + month + "-" + year);
    formdata.append("type", "image");
    formdata.append("fromWall", id);
    formdata.append("user", JSON.stringify(loginData));
    formdata.append("image", upload);
    console.log(upload);
    // console.log('i>>>>>>>>>>>>',!upload?.type?'text': upload?.type.split('/')[0]==='image'?'image':'video','-----------');
    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,


    };

    fetch(IP.IP + "Post/addPost", requestOptions)
      .then(response => {
        if (!response.ok) {
          Alert.alert('Please Enter Post title, image and section details ')
        }
        return response.json();
      })
      .then(result => {
        if (result == 'Post Added Successfully!') {

          navigation.navigate(selectedScreen);
        } else {
          Alert.alert(' Something went wrong try Again! ')
        }

      })
      .catch(error => console.log('error', error));
  }

  const getdesciplines = (user) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(IP.IP + "user/getDescipline?cnic=" + user.CNIC + "&fromWall=" + user.userType, requestOptions)
      .then(response => response.json())
      .then(data => { setDesciplines(data); console.log(data); })
      .catch(error => console.log('error', error));
  }

  // useEffect(() => {
  // }, [])


  const toggleItemSelection = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  return (
    <ScrollView style={styles.container}>
      {/* header is started */}
      <Row style={styles.header}>
        <Icon name={'arrow-back'} size={25} color={colors.black} onPress={() => navigation.goBack()} />
        <Text style={{ color: colors.black, fontWeight: 'bold' }}>New Post</Text>
        <Octicons name={'plus'} size={25} color={colors.black} />
        <View style={styles.btn}>
          <TouchableOpacity onPress={uploadPosts}>
            <Text style={{ color: colors.white }}>Post</Text>
          </TouchableOpacity>
        </View>
      </Row>
      {/* header is just sleeped          */}
      {/* body */}
      <View style={{ paddingHorizontal: 16 }}>
        <View style={{ marginTop: 16 }}>
          <TextInput
            multiline
            numberOfLines={4} // Set the initial number of lines
            style={styles.textInput}
            placeholder="Enter your text here..."
            placeholderTextColor={colors.black}
            value={desc}
            onChangeText={(str) => setDesc(str)}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{
                width: '100%',
                height: 200, backgroundColor: colors.black, borderRadius: 10,
              }}
              resizeMode="cover"
            />
          )
            : (
              <Image
                source={require('../../assets/images/mattia-righetti-gbBWpX2sXmU-unsplash.jpg')}
                style={{ height: 250, width: '100%', backgroundColor: colors.black, borderRadius: 10 }}
                resizeMode="cover"
              />
            )}

        </View>
        {loginData?.userType === 3 ?
          <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 20, alignSelf: 'center' }}>
            <Text style={{ color: 'white' }}>All</Text>
          </TouchableOpacity>
          : null}

        <TouchableOpacity style={{ padding: 20 }} onPress={() => setHide(!hide)}>
          <Text>You want to select more?</Text>
        </TouchableOpacity>
        {hide ?
          <View>
            {desciplines.map((item, index) => (
              <View key={index}>
                <Text style={{ color: 'green', fontSize: 20, fontWeight: 'bold' }}>{item.category}</Text>
                {item.isString ? (
                  <View>
                    <FlatList data={item.data}
                      keyExtractor={(item, index) => index.toString()}
                      numColumns={3}
                      renderItem={({ item }) => {
                        return (
                          <TouchableOpacity onPress={() => toggleItemSelection(item)} onLongPress={() => toggleItemSelection(item)} style={{ justifyContent: 'center', alignItems: 'center', flex: 1, paddingVertical: 10, }}>
                            <Text style={{ backgroundColor: selectedItems.includes(item) ? 'green' : 'grey', padding: 5, borderRadius: 5, color: 'white' }}>{item}</Text>
                          </TouchableOpacity>
                        )
                      }} />
                  </View>
                ) : (
                  <View>
                    {item.users.map((user, innerIndex) => (
                      <TouchableOpacity onPress={() => toggleItemSelection(user)} onLongPress={() => toggleItemSelection(user?.name)} key={innerIndex} style={{ paddingVertical: 15, alignItems: 'center', }}>
                        <Text style={{ backgroundColor: selectedItems.includes(user) ? 'green' : 'grey', padding: 5, borderRadius: 5, color: 'white' }}>{user.name}</Text>

                        {/* Render other user information as needed */}
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            ))}</View>
          : null}
        <TouchableOpacity onPress={() => setModal(true)} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='camera-outline' size={35} color={colors.black} />
          <Text style={{ marginLeft: 10, color: colors.black, fontWeight: 'bold' }}>Click Here To Choose</Text>
        </TouchableOpacity>


        <PrimaryModal visible={model} choosePhotoFromLibrary={() => { setModal(false), fromGallery() }}
          takePhotoFromCamera={() => { setModal(false), fromCamera() }} />
      </View>
    </ScrollView>
  );
};
//make this component available to the app
export default NewPost;
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DEFAULT_WHITE,
  },
  header: {
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 16,
  },
  btn: {
    height: 30,
    width: 60,
    backgroundColor: colors.black,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 200,
    width: '100%',
    // borderColor: 'gray',
    // borderWidth: 1,
    backgroundColor: 'gray',
    opacity: 0.5,
    padding: 20,
    textAlignVertical: 'top',
    fontSize: 18,
    borderRadius: 10,
    fontWeight: 'bold'
  },
  container1: {
    justifyContent: 'center', alignItems: 'center',

  },
  text: {
    backgroundColor: 'grey',
    fontSize: 16,
    padding: 10,
    borderRadius: 10,

    textAlign: 'center'
  },
});
