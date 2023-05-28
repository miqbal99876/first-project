//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { Row } from '../../components/atoms/row';
import { mvs } from '../../config/metrices';
import IP from '../IP';

// create a component
const Notification = ({ navigation }) => {

  const [notifications, setNotifications] = useState([]);

  const getNotifications = (id = 2) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(IP.IP + "Notification/getNotification?userId=" + id, requestOptions)
      .then(response => response.json())
      .then(result => setNotifications(result))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    getNotifications();
  }, [])
  return (
    <View style={styles.container}>
      <Row
        style={{
          width: '70%',
          justifyContent: 'space-between',
          paddingHorizontal: mvs(16),
          marginTop: mvs(16),
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={colors.black} />
        </TouchableOpacity>

        <Text style={{ fontWeight: 'bold', color: colors.black, fontSize: 20 }}>
          Notification
        </Text>
      </Row>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: mvs(16), marginTop: mvs(16) }}>
        {notifications.length > 0 && notifications.map((item, index) => (
          <Row key={index} style={{ justifyContent: 'space-between', marginBottom: 30 }}>
            <Row>
              <Image
                source={require('../../assets/images/mattia-righetti-gbBWpX2sXmU-unsplash.jpg')}
                style={{ height: 50, width: 50, borderRadius: mvs(25) }}
              />
              <View style={{ marginLeft: 16 }}>
                <Text style={{ fontWeight: 'bold', color: colors.black }}>
                  {item?.user?.name}
                  <Text style={{ color: colors.border }}>{item?.n?.type}</Text>
                </Text>
                <Text>{item?.n?.dateTime}</Text>
              </View>
            </Row>
            {item?.postImage != null ?
              <Image
                source={{ uri: IP.path + 'postImages/' + item?.postImage }}
                style={{ height: 50, width: 50, borderRadius: 5 }}
              />
              : <Image
                source={require('../../assets/images/mountain.jpg')}
                style={{ height: 50, width: 50, borderRadius: 5 }}
              />}
          </Row>
        ))}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.white,
  },
});

//make this component available to the app
export default Notification;
