import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/colors';
import { Row } from '../../components/atoms/row';



const PermissionScreen = ({ navigation }) => {
  const [teacherSelected, setTeacherSelected] = useState(false);
  const [studentSelected, setStudentSelected] = useState(false);

  const handleTeacherSelection = () => {
    setTeacherSelected(!teacherSelected);
  };

  const handleStudentSelection = () => {
    setStudentSelected(!studentSelected);
  };

  const handleSave = () => {
    // handle saving the selected permissions
  };

  return (
    <View style={styles.container}>
      <Row alignItems={'center'} style={{justifyContent:'space-between',width:'70%',marginTop:20,paddingHorizontal:16}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={'arrow-back'} size={25} color={colors.black} />

        </TouchableOpacity>
        <Text style={styles.headerText}>Permissions</Text>
      </Row>
      <View style={styles.permissionContainer}>
        <TouchableOpacity style={styles.permissionItem} onPress={handleTeacherSelection}>
          <Text style={styles.permissionText}>Select Teachers</Text>
          {teacherSelected && <Image source={require('../../assets/images/cover.png')} style={styles.checkMark} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.permissionItem} onPress={handleStudentSelection}>
          <Text style={styles.permissionText}>Select Students</Text>
          {studentSelected && <Image source={require('../../assets/images/cover.png')} style={styles.checkMark} />}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  backArrow: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  permissionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  permissionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  checkMark: {
    width: 20,
    height: 20,
  },
  saveButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 20,
  },

  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PermissionScreen;