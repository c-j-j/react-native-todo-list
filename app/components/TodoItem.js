import React from 'react'

import { Text } from 'react-native'
import styles from '../styles'

const renderItem = ({item}) => {
  return (<Text style={styles.itemBox}>{item}</Text>)
}

export default renderItem
