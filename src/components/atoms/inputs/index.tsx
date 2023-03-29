import React from 'react'
import { KeyboardTypeOptions, NativeSyntheticEvent, StyleProp, StyleSheet, TextInput, TextInputFocusEventData, View, ViewStyle } from 'react-native'
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import Regular from '../../typography/regular-text';

 const PrimaryInput = (props) => {
    const {
        onChangeText,
        value,
        style,
        label,
        placeholder='type here',
        labelStyle,
        containerStyle,
        secureTextEntry,
        keyboardType,
        onBlur

    } = props;
    return (
      <View style={[styles.Container, containerStyle]}>
        <Regular style={[styles.labelStyle, labelStyle]} label={label} />
      <TextInput
          onBlur={onBlur}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={[styles.textInput, style]}
        />
      </View>
    );
};

export default React.memo(PrimaryInput)
const styles = StyleSheet.create({
    Container:{
        borderBottomWidth:0.7,
        paddingTop:mvs(7),
        marginBottom:mvs(15),
    },
    textInput:{
        color:colors.black,
        textAlignVertical:'center',
        height:mvs(40),
    },
    labelStyle:{
        color:colors.primary,
    },
})