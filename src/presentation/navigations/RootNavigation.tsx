import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import DrawerNavigation from './drawer/DrawerNavigator'

const RootNavigation = () => {
  
  return (
    <NavigationContainer>
        <DrawerNavigation/>
    </NavigationContainer>
  )
}

export default RootNavigation