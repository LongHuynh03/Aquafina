import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { AuthenNavigator } from './Authen/AuthenNavigator'
import PureGift from '../containers/Author/pure_gift/PureGift'
import ItemPureGift from '../containers/Author/pure_gift/ItemPureGift'
import Footer from '../components/footer/Footer'
import PureWorld from '../containers/Author/pure_world/PureWorld'

const RootNavigation = () => {
  

  return (
    // <NavigationContainer>
    //     <AuthenNavigator/>
    // </NavigationContainer>

    // <PureGift/>
    <PureWorld/>
  )
}

export default RootNavigation