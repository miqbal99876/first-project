import React from "react";
import { Image, Text, View,StyleSheet } from "react-native";
import { Row } from "../atoms/row";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";
import AntDesign from 'react-native-vector-icons/AntDesign';

export const TextIcon=({
    title,
    icon
})=> {
    return(
       <View  style={{marginBottom:16}}>
      
        <Row>
           <View style={styles.common}>
          <AntDesign  name={icon} size={25} color={colors.black} />
          </View>
          <View style={{marginLeft: 16}}>
            <Text style={{color: colors.black, fontWeight: 'bold'}}>
             {title}
            </Text>
          </View>
        </Row>
        </View>
    )
}
const styles=StyleSheet.create({
  common:{
    backgroundColor:colors.white,borderRadius:12,padding:5,width:50,elevation:5,justifyContent:'center',alignItems:'center'

  }
})