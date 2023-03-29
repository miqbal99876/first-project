import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import * as SVG from '../../assets/modal-svgs/index';
import {mvs} from '../../services/metrices';
import colors from '../../services/colors';
import Modal from 'react-native-modal';
import Bold from '../../presentation/typography/bold-text';
import PrimaryButton from '../buttons/button-primary';
import TextArea from '../input/text-area';
const ReviewModal = ({
  buttonTitle = 'Submit',
  icon = 'Success',
  visible = false,
  onOk,
  onChange,
  onCancel,
}) => {
  const Icon = SVG[icon];

  return (
    <Modal backdropOpacity={0.7} isVisible={visible}>
      <View style={styles.container}>
        <Bold label={'Write review'} color={colors.white} />

        <TextArea onChange={onChange} />

        <PrimaryButton
          title={buttonTitle}
          onClick={onOk}
          style={{marginTop: mvs(25)}}
        />
        <PrimaryButton
          title={'Cancel'}
          onClick={onCancel}
          style={{marginTop: mvs(25)}}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    ...colors.shadow,
    borderRadius: mvs(15),
    paddingVertical: mvs(33),
    paddingHorizontal: mvs(20),
    borderColor: colors.white,
    borderWidth: 0.5,
  },
});
export default ReviewModal;
