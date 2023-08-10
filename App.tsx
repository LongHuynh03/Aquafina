import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './src/components/header/Header'
import Login from './src/containers/Authen/Login'
import Register from './src/containers/Authen/Register'
import SendOTP from './src/containers/Authen/SendOTP'
import RootNavigation from './src/navigaton/RootNavigation'

const App = () => {
  return (
    <RootNavigation/>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  }
})