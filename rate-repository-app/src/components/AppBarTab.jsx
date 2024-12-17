import React from 'react'
import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
  tab: {
    marginRight: 15,
  },
})

const AppBarTab = ({ title, to }) => {
  return (
    <Link to={to} style={styles.tab}>
      <Text color="appBarText" fontWeight="bold">
        {title}
      </Text>
    </Link>
  )
}

export default AppBarTab
