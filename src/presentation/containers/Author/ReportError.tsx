import { StyleSheet, Text, View, Dimensions, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/background/Background'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../resource'
import LinearGradient from 'react-native-linear-gradient'
import Button from '../../components/button/Button'
import { IMAGE_FOOTER_AUTHEN } from '../../../assets'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'
import { RootState, signOut, useAppDispatch } from '../../shared-state'
import { useSelector } from 'react-redux'
import { DialogLogOut } from '../../components/dialog/Dialog'

const DATA = [
  "1. Bỏ chai Aqufina nhưng hệ thống không nhận diện được",
  "2. Hệ thống không tích điểm",
  "3. Khác"
]

const ReportError: React.FC<HomeDrawerScreenProps<'ReportError'>> = ({ route, navigation }) => {


  const dispatch = useAppDispatch();
  const [showPopupLogOut, setShowPopupLogOut] = useState(false)

  const isLogin: boolean = useSelector<RootState, boolean>(
    (state) => state.user.isLogin
  )

  const menu = () => {
    navigation.openDrawer();
  }

  const logOut = () => {
    dispatch(signOut());
    navigation.navigate('Home');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const goHome = () => {

  }

  return (
    <Background
      type='home'
      centerFocus={goHome}
      leftFocus={menu}
      rightFocus={isLogin ? () => setShowPopupLogOut(true) : () => navigation.navigate('LogIn')}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Nội dung báo lỗi</Text>
        <SelectDropdown
          data={DATA}
          buttonStyle={styles.selectDropdown}
          buttonTextStyle={styles.textDefault}
          rowTextStyle={styles.textDropdown}
          renderDropdownIcon={isOpened => {
            return <FontAwesomeIcon name={isOpened ? 'chevron-up' : 'chevron-down'} color={Colors.BLUE_KV} size={12} />;
          }}
          dropdownIconPosition='right'
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem);
          }}
          defaultButtonText={'Nội dung báo lỗi'}
        />
        <TextInput
          style={styles.boxInfor}
          placeholder='Thông tin liên hệ ( Email/Số điện thoại )'
        />
        <TextInput
          multiline
          numberOfLines={10}
          maxLength={100}
          style={styles.boxDes}
          placeholder='Mô tả lỗi'
          textAlignVertical='top'
        />
        <View style={styles.footer}>
          <Image source={{ uri: IMAGE_FOOTER_AUTHEN }} style={styles.imgFooter} />
          <LinearGradient colors={[Colors.WHITE_0, Colors.WHITE_93, Colors.WHITE]} style={styles.boxButton}>
            <Button
              containerStyle={styles.btnLogin}
              titleStyle={styles.titleLogin}
              title='Gửi'
            />
          </LinearGradient>
        </View>
      </View>
      <DialogLogOut
        isVisible={showPopupLogOut}
        onPressCancel={() => setShowPopupLogOut(false)}
        onPressLogout={logOut}
      />
    </Background>
  )
}

export default ReportError

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.get('screen').width * 0.04,
    backgroundColor: Colors.WHITE,
    height: Dimensions.get('screen').height - Dimensions.get('screen').height * 0.09
  },
  textTitle: {
    color: Colors.RED,
    fontSize: 22,
    fontWeight: '900',
    lineHeight: 26.4,
    textAlign: 'center',
    marginVertical: Dimensions.get('screen').height * 0.03
  },
  selectDropdown: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Colors.BLUE_100,
  },
  textDefault: {
    color: Colors.GRAY_4,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    textAlign: 'left'
  },
  textDropdown: {
    color: Colors.GRAY_5,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    textAlign: 'left',
  },
  boxInfor: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Colors.BLUE_100,
    color: Colors.GRAY_4,
    marginVertical: Dimensions.get('screen').height * 0.02,
  },
  boxDes: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: Colors.BLUE_100,
    color: Colors.GRAY_4,
  },
  footer: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
  },
  imgFooter: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.45,
  },
  boxButton: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.2,
    padding: Dimensions.get('screen').width * 0.04,
    bottom: - Dimensions.get('screen').height * 0.01,
    // bottom: 0,
    alignItems: 'center',
  },
  btnLogin: {
    backgroundColor: Colors.BLUE_500,
    marginTop: - Dimensions.get('screen').height * 0.05,
    borderColor: Colors.BLUE_500,
  },
  titleLogin: {
    color: Colors.WHITE,
  },
})