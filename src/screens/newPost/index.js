//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Row} from '../../components/atoms/row';
import {mvs} from '../../config/metrices';
import DropDownPicker from 'react-native-dropdown-picker';
import PrimaryModal from '../../components/modals/primary-modal';
import ImagePicker from 'react-native-image-crop-picker';
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
const NewPost = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [model,setModal]=useState(false)
    const [image, setImage] = useState(null);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const fromGallery = () => {
        ImagePicker.openPicker({
        //   width: 400,
        //   height: 200,
        //   cropping: true,
        compressImageMaxHeight:800,
        compressImageMaxWidth:800,
          mediaType: 'photo',
          
        }).then((image) => {
          setImage(image.path);
          setImageDimensions({ width: image.width, height: image.height });
          setModal(false)
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
  return (
    <View style={styles.container}>
      {/* header is started */}
      <Row style={styles.header}>
        <Icon name={'arrow-back'} size={25} color={colors.black} />
        <Text style={{color: colors.black, fontWeight: 'bold'}}>New Post</Text>
        <Octicons name={'plus'} size={25} color={colors.black} />
        <View style={styles.btn}>
          <Text style={{color: colors.white}}>Post</Text>
        </View>
      </Row>
      {/* header is just sleeped          */}
      {/* body */}
      <View style={{paddingHorizontal: 16}}>
        <View
          style={{
            height: mvs(200),
            backgroundColor: colors.DEFAULT_GREY,
            marginTop: 16,
            opacity: 0.5,
            paddingTop: 30,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: colors.black,
              fontWeight: 'bold',
              fontSize: mvs(18),
              opacity: 1,
            }}>
            What's on Your Mind
          </Text>
        </View>
      <View style={{marginTop:16,backgroundColor: colors.black}}>
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
});
