import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <AppBarTab title="Repositories" to="/" />
        <AppBarTab title="Sign in" to="/signin" />
      </ScrollView>
    </View>
  )
}

export default AppBar

