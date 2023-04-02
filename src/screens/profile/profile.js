//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,ScrollView ,Switch} from 'react-native';
import { colors } from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { Row } from '../../components/atoms/row';
import { mvs } from '../../config/metrices';
import { StoryCard } from '../../components/storyCard';
import AllPost from '../../components/allpost';



// create a component
const Profile = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={styles.container}>
        <Row
          style={{
            justifyContent: 'space-between',
            paddingHorizontal: mvs(16),
            marginTop: mvs(16),
          }}>
          <Icon name="arrow-back" size={30} color={colors.black} />
          <Text style={{fontWeight: 'bold', color: colors.black, fontSize: 20}}>
            Profile
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Row>
        <View>
          <Image
            source={require('../../assets/images/cover.png')}
            style={{width: '100%', height: 150}}
            resizeMode="cover"
          />
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              bottom: mvs(-50),
            }}>
            <Image
              source={require('../../assets/images/cover.png')}
              style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
                borderRadius: 15,
              }}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={{alignSelf: 'center', marginTop: 50}}>
          <Text
            style={{
              alignSelf: 'center',
              color: colors.black,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Shahid
          </Text>
          <Text style={{alignSelf: 'center', color: colors.black}}>
            shahid@gmail.com
          </Text>
        </View>
        <Row style={{justifyContent: 'space-evenly', marginTop: mvs(20)}}>
          <View style={{alignItems: 'center'}}>
            <Text>Post</Text>
            <Text
              style={{color: colors.black, fontSize: 20, fontWeight: 'bold'}}>
              22
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>Friends</Text>
            <Text
              style={{color: colors.black, fontSize: 20, fontWeight: 'bold'}}>
              22
            </Text>
          </View>
        </Row>
        {/* story */}
       <StoryCard style={{marginTop:10}}/>
       <AllPost/>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    
        backgroundColor:colors.white,
    },
});

//make this component available to the app
export default Profile;
