import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { Styles } from './styles'
import { MainWrapper, ButtonOpacityLarge } from './components'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)
  return (
    <MainWrapper>
      <Text style={Styles.H1_BOLD}>Counter Screen</Text>
      <Text style={Styles.H2}>Current Count: {counter}</Text>
      <ButtonOpacityLarge
        onPress={() => setCounter(counter+1)}
        title='Increase'
      />
      <ButtonOpacityLarge
        onPress={() => setCounter(counter-1)}
        title='Decrease'
      />
    </MainWrapper>
  )
}

export { CounterScreen }

const styles = StyleSheet.create({})