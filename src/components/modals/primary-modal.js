

import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Modal from 'react-native-modal';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import Bold from '../typography/bold-text';
const PrimaryModal = ({ buttonTitle = 'Dispatch Button',
    visible = false,
    choosePhotoFromLibrary,
    takePhotoFromCamera,
}) => {
    return (
        <Modal
            style={{ margin: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            // backdropColor={'rgba(0, 0, 0, 0.5)'}
            backdropOpacity={0.7}
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={choosePhotoFromLibrary}>
                        <Bold label={'Gallery'} color={colors.black} fontSize={20}></Bold>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={takePhotoFromCamera}>
                        <Bold label={'Camera'} color={colors.black} fontSize={25}></Bold>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        width: mvs(200), height: mvs(150),
        borderRadius: 30
     }
});
export default PrimaryModal;