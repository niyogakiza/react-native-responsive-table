import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { initialDimensions } from '../Hooks/useScreenDimensions'

export const RotationHint = ({ showWhenScreenWidthLessThan, text }) => {
  const { width, height } = initialDimensions
  const isAlreadyInLandscape: boolean = width > height

  const showMessage = width < showWhenScreenWidthLessThan && isAlreadyInLandscape === false
  if (showMessage) {
    return (
      <View>
        <Text style={styles.message}>{text}</Text>
      </View>
    )
  } else return null
}

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    margin: 10
  }
})
RotationHint.defaultProps = {
  showWhenScreenWidthLessThan: 500,
  text: 'Rotate device for more column '
}
