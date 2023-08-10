import { StyleSheet, Dimensions, Text, View, TextProps, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../resources/values/colors'
import { LOGO_QUAFINA } from '../../assets'

interface HeaderProps extends TextProps {

  leftIcon?: React.ReactNode,
  leftFocus?: () => void,
  //
  rightIcon?: React.ReactNode,
  rightFocus?: () => void,

}

const Header: React.FC<HeaderProps> = (props) => {

  const {leftIcon, leftFocus, rightIcon, rightFocus} = props;

  const eventLeft = () => {
    if (leftIcon) {
        return (
            <TouchableOpacity style={styles.button} onPress={leftFocus}>
                {leftIcon}
            </TouchableOpacity>
        );
    }
    return null;
};
const eventRight = () => {
    if (rightIcon) {
        return (
            <TouchableOpacity style={styles.button} onPress={rightFocus}>
                {rightIcon}
            </TouchableOpacity>
        );
    }
    return null;
};

  return (
    <View style={styles.container}>
      <View style={styles.headerFocus}>
          {eventLeft()}
      </View>
      <View style={styles.centerHeader}>
          <Image source={{uri: LOGO_QUAFINA}} style = {styles.img}/>
      </View>
      <View style={styles.headerFocus}>
          {eventRight()}
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Dimensions.get('screen').width * 0.02,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    marginTop: Dimensions.get('screen').height * 0.06 / 2,
  },
  headerFocus: {
    width: Dimensions.get('screen').width * 0.1,
    height: Dimensions.get('screen').width * 0.1,
  },
  centerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width * 0.25,
    height: Dimensions.get('screen').height * 0.04,
  },
  button: {
    width: Dimensions.get('screen').width * 0.1,
    height: Dimensions.get('screen').width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})