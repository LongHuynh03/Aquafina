import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector  } from 'react-redux';
import { RootState, getData, getUsers, signIn, signUp, useAppDispatch, userReducer } from '../presentation/shared-state';
import { Users } from '../domain';
import { getBannsers } from '../presentation/shared-state/redux/reducers/BannerReducer';
import { Banners } from '../domain/entity/Banner';
import { getQuantityGift } from '../presentation/shared-state/redux/reducers/QuantityGift';
import { QuantityGift } from '../domain/entity/QuantityGift';

const MainTest = () => {

  const dispatch = useAppDispatch();

  const userData:Users = useSelector<RootState, Users>(
    (state) => state.user.userData
  )

  const user: getData= {
    phone: '0767375921',
    // phone: '1',
    name: 'long'
  };

  useEffect(() => {
    dispatch(signIn(user))
    return () => {}
  }, [user])
  



  const onClick = () => {
    console.log(userData);
  }

  return (
    <View style={styles.stylesContainer}>
      {/* <Text style={styles.textOutput}>{key}</Text> */}
      <TouchableOpacity onPress={onClick} style = {styles.btn}>
        <Text style={styles.textButton}>Click</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainTest

const styles = StyleSheet.create({
  stylesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOutput: {
  },
  btn: {
      borderWidth: 1,
      width: 100,
      height: 50
  },
  textButton: {},
})