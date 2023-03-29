import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.DEFAULT_WHITE,
    },
    logo: {
      fontSize: mvs(24),
      fontWeight: 'bold',
      color: colors.black,
      textAlign: 'center',
      marginTop: mvs(20),
    },
  
    getpassword: {
      fontSize: mvs(20),
      fontWeight: 'bold',
      color: colors.DEFAULT_WHITE,
      textAlign: 'center',
      marginTop: mvs(20),
    },
    innercontainer: {
      backgroundColor: colors.black,
      flex: 1,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      marginTop: 16,
    },
    innercontent: {
      backgroundColor: colors.DEFAULT_WHITE,
      flex: 1,
      marginTop: 16,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: mvs(16),
    },
    title: {
      fontSize: mvs(14),
      fontWeight: 'bold',
      color: colors.border,
      marginTop: mvs(20),
      textAlign: 'center',
    },
    subtitle: {
      fontSize: mvs(16),
      fontWeight: 'bold',
      color: colors.DEFAULT_GREY,
      textAlign: 'center',
    },
    goto: {
      marginTop: 10,
      fontSize: 12,
      color: colors.border,
      textAlign: 'center',
      fontWeight:'bold'
    },
  });