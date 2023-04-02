import React from "react";
import { Image, Text, View } from "react-native";
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
          <AntDesign  name={icon} size={25} color={colors.black} />
          <View style={{marginLeft: 16}}>
            <Text style={{color: colors.black, fontWeight: 'bold'}}>
             {title}
            </Text>
          </View>
        </Row>
        </View>
    )
}