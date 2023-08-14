import 'react-native-gesture-handler'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
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