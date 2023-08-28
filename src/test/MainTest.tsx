import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector  } from 'react-redux';
import { RootState, getUsers, signIn, signUp, useAppDispatch, userReducer } from '../presentation/shared-state';
import { Users } from '../domain';
import { getBannsers } from '../presentation/shared-state/redux/reducers/BannerReducer';
import { Banners } from '../domain/entity/Banner';
import { getQuantityGift } from '../presentation/shared-state/redux/reducers/QuantityGift';
import { QuantityGift } from '../domain/entity/QuantityGift';

const MainTest = () => {

  const dispatch = useAppDispatch();

  //lấy list User từ store
  // const listUsers : Users[] = useSelector<RootState, Users[]>(
  //   (state) => state.user.usersData
  // );

  // const listBanner : Banners[] = useSelector<RootState, Banners[]>(
  //   (state) => state.banner.banners
  // );

  const listQuantityGift : QuantityGift[] = useSelector<RootState, QuantityGift[]>(
    (state) => state.quantityGift.list
  );


  useEffect(() => {

    //lấy list User từ firebase
    // dispatch(getUsers(3));
    // dispatch(getBannsers());
    dispatch(getQuantityGift());
    
    return () => {}
  }, [])
  

  const user: Users = {
    keyUser: '0',
    rank: 1,
    name: 'Long',
    avatar: '',
    phone: '0943055138',
    point: 100
  };

  const onClick = () => {
    // dispatch(signIn('0943055138'))
    // dispatch(signUp(user));
    // dispatch(getUsers(3));
  }

  return (
    <View style={styles.stylesContainer}>
      <Text style={styles.textOutput}>{listQuantityGift.length}</Text>
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