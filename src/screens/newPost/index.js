//import liraries
import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import {colors} from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Row} from '../../components/atoms/row';
import {mvs} from '../../config/metrices';
import DropDownPicker from 'react-native-dropdown-picker';
import PrimaryModal from '../../components/modals/primary-modal';
import ImagePicker from 'react-native-image-crop-picker';
import IP from '../IP';
const SECTIONS = [
    { label: 'BSCS', value: 'BSCS' },
    { label: 'BSIT', value: 'BSIT' },
    { label: 'BBA', value: 'BBA' },
    { label: 'Biology', value: 'Biology' },
    { label: 'Chemistry', value: 'Chemistry' },
    { label: 'Physics', value: 'Physics' },
    { label: 'Mathematics', value: 'Mathematics' },
    { label: 'Psychology', value: 'Psychology' },
    { label: 'Sociology', value: 'Sociology' },
    { label: 'Engineering', value: 'Engineering' },
  ];
// create a component
const NewPost = ({navigation}) => {
  const [desc, setDesc] = useState('');

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);console.log(value);
    const [model,setModal]=useState(false)
    const [image, setImage] = useState(null);
    const [upload, setUpload] = useState(null);console.log(global.user.CNIC);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const currentDate = new Date();

    const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Month is zero-indexed, so we add 1 to get the actual month value
  const year = currentDate.getFullYear();
    console.log( day+"-"+month+"-"+year);
    const fromGallery = () => {
        ImagePicker.openPicker({
        //   width: 400,
        //   height: 200,
        //   cropping: true,
        compressImageMaxHeight:800,
        compressImageMaxWidth:800,
          mediaType: 'photo',
          
        }).then((image) => {
          console.log('image object ',image);
          setImage(image.path);
          setImageDimensions({ width: image.width, height: image.height });
          setModal(false)
          var filename = image.path.substring(image.path.lastIndexOf('/')+1);
       setUpload( {
        uri: image.path,
        namee:filename,
        type: image.mime
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
const uploadPosts=()=>{
  var formdata = new FormData();
  formdata.append("postedBy", global.user.CNIC);
  formdata.append("postFor", value);
  formdata.append("description", desc);
  formdata.append("dateTime", day+"-"+month+"-"+year);
  formdata.append("type", global.user.userType);
  formdata.append("fromWall", global.user.userType);
  formdata.append("user", global.user.name);
  formdata.append("image", upload);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch(IP.IP+"Post/addPost", requestOptions)
    .then(response => response.json())
    .then(result =>{
      console.log(result);
    } )
    .catch(error => console.log('error', error));
}

useEffect(()=>{

},[])



  return (
    <View style={styles.container}>
      {/* header is started */}
      <Row style={styles.header}>
        <Icon name={'arrow-back'} size={25} color={colors.black} />
        <Text style={{color: colors.black, fontWeight: 'bold'}}>New Post</Text>
        <Octicons name={'plus'} size={25} color={colors.black} />
        <View style={styles.btn}>
<TouchableOpacity onPress={uploadPosts}>
          <Text style={{color: colors.white}}>Post</Text>
          </TouchableOpacity>
        </View>
      </Row>
      {/* header is just sleeped          */}
      {/* body */}
      <View style={{paddingHorizontal: 16}}>
        <View style={{marginTop:16}}>
            <TextInput
        multiline
        numberOfLines={4} // Set the initial number of lines
        style={styles.textInput}
        placeholder="Enter your text here..."
        placeholderTextColor={colors.black}
        value={desc}
        onChangeText={(str)=>setDesc(str)}
      />
        </View>
      <View style={{marginTop:16}}>
        {image?(
             <Image
             source={{uri:image}}
             style={{ width:'100%',
                height: 200,backgroundColor: colors.black,borderRadius:10,}}
             resizeMode="cover"
           />
        )
        :(
            <Image
            source={require('../../assets/images/mattia-righetti-gbBWpX2sXmU-unsplash.jpg')}
            style={{height:250,width:'100%', backgroundColor: colors.black,borderRadius:10}}
            resizeMode="cover"
          />
        )}
     
      </View>
     <View style={{marginTop:16,marginBottom:16}}>
     <DropDownPicker
      open={open}
      value={value}
      items={SECTIONS}
      setOpen={setOpen}
      setValue={setValue}
    //   setItems={setItems}
      autoScroll={true}
      placeholder="Select a section"
    
    />
     </View>
     <TouchableOpacity onPress={()=>setModal(true)} style={{flexDirection:'row',alignItems:'center'}}>
        <Ionicons name='camera-outline'size={35}color={colors.black}/>
        <Text style={{marginLeft:10,color:colors.black,fontWeight:'bold'}}>Click Here To Choose</Text>
     </TouchableOpacity>
     

   <PrimaryModal visible={model} choosePhotoFromLibrary={()=>{setModal(false),fromGallery()}}
   takePhotoFromCamera={()=>{setModal(false),fromCamera()}} />
      </View>
    </View>
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
    backgroundColor:'gray',
    opacity:0.5,
    padding: 20,
    textAlignVertical:'top',
    fontSize:18,
    borderRadius:10,
    fontWeight:'bold'
  },
});
