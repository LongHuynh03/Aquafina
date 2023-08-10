import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { AuthenNavigator } from './Authen/AuthenNavigator'

const RootNavigation = () => {
  return (
    <NavigationContainer>
        <AuthenNavigator/>
    </NavigationContainer>
  )
}

export default RootNavigation