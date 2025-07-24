import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Media = () => {
  return (
    <View>
      <Text style={styles.text1}>Media content will apear here when added to your journal</Text>
    </View>
  )
}

export default Media

const styles = StyleSheet.create({

    text1: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
    }
})