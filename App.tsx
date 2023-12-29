import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/Home'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Home />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  root:{
    flex:1
  }
})