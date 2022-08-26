import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useReducer } from 'react'
import { Styles } from './styles'
import { MainWrapper, ButtonOpacityLarge } from './components'

interface StateProps {
  counter: number
}

interface ActionProps {
  type: string
  payload: number
}

const COUNTER_INCREMENT = 10

const reducer = (state: StateProps, action:ActionProps) => {
  const { type, payload } = action
  const { counter } = state
  switch(type) {
    case 'INCREMENT':
      return {...state, counter: counter + payload}
    case 'DECREMENT':
      return {...state, counter: counter - payload}
    default:
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0})
  return (
    <MainWrapper>
      <Text style={Styles.H1_BOLD}>Counter Screen</Text>
      <Text style={Styles.H2}>Current Count: {state.counter}</Text>
      <ButtonOpacityLarge
        onPress={() => dispatch({ type: 'INCREMENT',  payload: COUNTER_INCREMENT})}
        title='Increase'
      />
      <ButtonOpacityLarge
        onPress={() => dispatch({ type: 'DECREMENT',  payload: COUNTER_INCREMENT})}
        title='Decrease'
      />
    </MainWrapper>
  )
}

export { CounterScreen }

const styles = StyleSheet.create({})