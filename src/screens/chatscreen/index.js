//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, FlatList } from 'react-native';
import { colors } from '../../config/colors';
import { Row } from '../../components/atoms/row';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import { mvs } from '../../config/metrices';
import IP from '../IP';
import Entypo from 'react-native-vector-icons/Entypo';
import { useIsFocused } from '@react-navigation/native';


// create a component
const ChatScreen = ({ route, navigation }) => {
    const [search, setSearch] = useState('')

    const [data, setData] = useState([])
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const item = route.params

    console.log('itemmmm', item.id);
    // console.log(global.user);


    const getGroups = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        console.log('global.user.userType', global.user)
        await fetch(IP.IP + "groups/getChatOfGroup?id=" + item.id + "&loggedInUserId=" + global.user.CNIC, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
                console.log('result', result);
            })

            .catch(error => console.log('error>>>>>>>>>>>', error));
    }
    const onSend = () => {
        var formdata = new FormData();
        formdata.append("userid", global.user.CNIC);
        formdata.append("chat_id", item.id);
        formdata.append("dateTime",);
        formdata.append("text", inputText);
        formdata.append("image", "");
        formdata.append("type", global.user.userType);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(IP.IP+"chat/addChat", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    
 let d=[...data]
 d.push({message:inputText,sender:true})
 setData(d)
            setInputText('');
     
    
    };
    const renderMessageItem = ({ item }) => {
        const messageStyle = item.sender ? styles.senderMessageContainer : styles.receiverMessageContainer;
        const textStyle = item.sender ? styles.senderMessageText : styles.receiverMessageText;

        return (
            <View style={messageStyle}>
                <Text style={textStyle}>{item.message}</Text>
            </View>
        );
    };


    useEffect(() => {
        getGroups();
    }, [])
    return (
        <View style={styles.container}>

            <Row
                style={{
                    justifyContent: 'space-between',
                    paddingHorizontal: mvs(16),
                    marginTop: 16,

                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name={'arrow-back'} size={25} color={colors.black} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('GroupDetail',{item:item})}>
 <Row style={{}}>
                    <Image source={require('../../assets/images/cover.png')} style={{ height: 60, width: 60, borderRadius: 30 }} />
                    <View style={{ marginLeft: 16 }}>
                        <Text style={{ color: colors.black, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text>CS7A</Text>
                    </View>
                </Row>
                </TouchableOpacity>

                <Entypo
                    name="dots-three-vertical"
                    size={25}
                    color={colors.black}
                />
            </Row>
            {/* search */}
            {/* <View style={styles. textinputview}>
      <Icons name="search" size={20} color="#333" style={styles.icon} />
      <TextInput
        placeholder="Search here"
        style={styles.input}
        placeholderTextColor="#999"
        value={search}
        onChangeText={(str)=>setSearch(str)}
      />
    
    </View> */}

            {/* Chat messages */}
            <FlatList
                data={data}
          
                renderItem={renderMessageItem}
                // keyExtractor={(item) => item.id.toString()}
            />

            {/* Input container */}
            <View style={{ flexDirection: 'row', padding: 8 }}>
                <TextInput
                    style={{ flex: 1, marginRight: 8, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8 }}
                    placeholder="Type a message..."
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: 8, padding: 8 }}
                    onPress={onSend}
                >
                    <Text style={{ color: 'white' }}>Send</Text>
                </TouchableOpacity>
            </View>
            {/* card */}
            {/* {data.map((item,index)=>{
  console.log(item);
  return(
    <TouchableOpacity onPress={()=>navigation.navigate('ChatScreen')}>
    <Row key={index} style={{backgroundColor:colors.DEFAULT_WHITE,marginHorizontal:16,marginTop:20,elevation:10,padding:5}}>
    <Image source={require('../../assets/images/cover.png')}style={{height:60,width:60,borderRadius:30}}/>
    <View style={{marginLeft:16}}>
        <Text style={{color:colors.black,fontWeight:'bold'}}>{item.name}</Text>
        <Text>CS7A</Text>
    </View>
   </Row>
   </TouchableOpacity>
  )
}
)} */}



        </View>
    );
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    textinputview: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 16,
        marginTop: 20,
        elevation: 5
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',

    },
    icon: {
        marginRight: 10,
    },
    senderMessageContainer:{  alignSelf: 'flex-end',
    backgroundColor: 'blue',
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 8,
    padding: 8,
    maxWidth: '75%', 
    },

    senderMessageText: {
        color: 'white',
   
    },
    receiverMessageContainer: 
        {
            alignSelf: 'flex-start',
            backgroundColor: '#ccc',
            borderRadius: 8,
            marginVertical: 4,
            marginHorizontal: 8,
            padding: 8,
            maxWidth: '75%',
    },
    receiverMessageText: {
        color: 'black',
    },
});

//make this component available to the app
export default ChatScreen;