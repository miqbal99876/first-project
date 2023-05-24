import React from "react";
import { Image, Text, View } from "react-native";
import { Row } from "../atoms/row";
import { colors } from "../../config/colors";
import Octicons from 'react-native-vector-icons/Octicons';
import { mvs } from "../../config/metrices";

export const StoryCard=({style})=>{



    return(
        <View style={style}>
        <View style={{backgroundColor:colors.white,elevation:5,marginHorizontal:5,paddingBottom:5}}>
        <Text style={{marginBottom: 10}}>Your Stories</Text>
        <Row>
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.black,
                height: mvs(80),
                width: mvs(70),
                borderRadius: 10,
              }}>
              <Octicons
                name={'plus'}
                size={25}
                color={colors.DEFAULT_WHITE}
              />
            </View>
            <Text
              style={{fontSize: 12, fontWeight: 'bold', color: colors.black}}>
              Your Story
            </Text>
          </View>
          {[1, 2, 3].map((item, index) => (
            <View key={index} style={{alignItems: 'center', marginLeft: 10,flex:1}}>
              <Image
                source={require('../../assets/images/cover2.png')}
                style={{height: 80, width: 70, borderRadius: 10}}
                resizeMode="contain"
              />
              <Text style={{fontSize: 10}}>Programing</Text>
            </View>
          ))}
        </Row>
      </View>
      </View>
    )
}