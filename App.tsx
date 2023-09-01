import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import RootNavigation from './src/presentation/navigations/RootNavigation'
import { Provider } from 'react-redux'
import { store } from './src/presentation/shared-state'

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  }
})