import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import Bold from '../../typography/bold-text'
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import Regular from '../../typography/regular-text';
import { Loader } from '../loader'
type props = {
    onPress: () => void
    title: string
    disabled?:boolean
    loading?:boolean
    textStyle?:StyleProp<ViewStyle>
    containerStyle?:StyleProp<ViewStyle>
}
export const PlusButton = (props: props) => {
    const {
        onPress,
        title,
    } = props;
    return (
        <TouchableOpacity style={styles.plusContainer} onPress={onPress}>
            <Regular style={styles.plusText} label={'+'}/>
        </TouchableOpacity>
    )
};
export const PrimaryButton = (props: props) => {
    const {
        onPress,
        title,
        disabled,
        loading,
        textStyle,
        containerStyle,
    } = props;
    return (
        <TouchableOpacity disabled={disabled||loading} style={[styles.primaryContainer,containerStyle,{backgroundColor:`${colors.black}${disabled?'50':''}`}]} onPress={onPress}>
            {loading?
            <Loader/>
            :<Bold style={[styles.primaryText,textStyle]} label={title}/>}
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
  plusContainer: {
    position: 'absolute',
    bottom: mvs(40),
    ...colors.shadow,
    backgroundColor: colors.primary,
    right: mvs(20),
    justifyContent: 'center',
    alignItems: 'center',
    width: mvs(50),
    height: mvs(50),
    borderRadius: mvs(50 / 2),
  },
  plusText: {
    color: colors.white,
    fontSize: mvs(25),
    alignSelf: 'center',
  },
  primaryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    height: mvs(52),
    borderRadius: mvs(10),
    alignSelf:'center',
    marginTop:10,
  },
  primaryText: {
    color: colors.white,
    fontSize: 13,
    fontWeight:'bold'
  },
});