import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

export default function Profile() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
    >
      <Text>Index</Text>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})