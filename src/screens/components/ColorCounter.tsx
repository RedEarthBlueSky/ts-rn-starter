import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Styles } from '../styles'
import { ButtonOpacityLarge } from '../components'

type colorCounterProps = {
  color: string
  onIncrease: () => void
  onDecrease: () => void
}

const ColorCounter = ({ 
  color, 
  onIncrease, 
  onDecrease 
}: colorCounterProps): JSX.Element => {
  return (
    <View>
      <Text style={Styles.H2}>{color}</Text>
      <ButtonOpacityLarge
        onPress={() => onIncrease()}
        title={`Increase ${color}`}
      />
      <ButtonOpacityLarge
        onPress={() => onDecrease()}
        title={`Decrease ${color}`}
      />
    </View>
  )
}

export { ColorCounter }

const styles = StyleSheet.create({})