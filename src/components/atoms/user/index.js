import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, StyleProp, TextStyle, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import Bold from '../../../typography/bold-text';
import Regular from '../../../typography/regular-text';
import { Row } from '../row';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);


const User = ({
  style,
  title,
  label,
  containerStyle,
  imageSource,
  imageStyle,
  onPress,
  loader,
  ...props
}) => {
  // const [jahaz,setJahaz]=useState(loader)
    return (
    <TouchableOpacity onPress={onPress}>

      <ShimmerPlaceholder visible={loader}> 
      <Row style={[styles.container, containerStyle]}>
     
          <Image source={imageSource} style={[styles.image, imageStyle]} />
        
        <View style={{ marginLeft: 10, }}>
          <Bold color={colors.black}>{title}</Bold>
          <Regular>{label}</Regular>
        </View>
      </Row>
      </ShimmerPlaceholder>
      <Text style={styles.line} />
     
    </TouchableOpacity>
   

  )
}
export default User;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: mvs(16),
    marginTop: 10,
    marginBottom: 5
  },
  title: {
    fontSize: mvs(18),
    color: colors.primary,
  },
  back: {
    marginRight: mvs(20),
  },
  image: {
    height: mvs(64),
    width: mvs(64)
  },
  line: { borderBottomWidth: 0.5, borderBottomColor: 'rgba(0, 0, 0, 0.3)', marginTop: -15 }
});