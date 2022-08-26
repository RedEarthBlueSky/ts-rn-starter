import { Text, View } from 'react-native'
import React, { useReducer } from 'react'
import { Styles } from './styles'
import { MainWrapper, ColorCounter } from './components'

const COLOR_INCREMENT = 15

interface ColorState {
  red: number
  green: number
  blue: number
}

interface ColorAction {
  type: string
  payload: number
}

const reducer = (state: ColorState, action: ColorAction) => {
  const { red, green, blue } = state
  const { type, payload } = action
  switch(type) {
    case 'change_red':
      return red + payload < 255 || red - payload > 0 
      ? {...state, red: red + payload}
      : state
    case 'change_green':
      return green + payload < 255 || green - payload > 0 
      ? state 
      : {...state, green: green + payload}
    case 'change_blue':
      return blue + payload < 255 || blue - payload > 0 
      ? state 
      :  {...state, blue: blue + payload}
    default: 
      return state
  }
}

const SquareScreen = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue:0})
  const { red, green, blue } = state
  return (
    <MainWrapper>
      <Text style={Styles.H1_BOLD}>SquareScreen</Text>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red',  payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ type: 'change_red',  payload: -1 * COLOR_INCREMENT})}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue',  payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ type: 'change_blue',  payload: -1 * COLOR_INCREMENT}) }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green',  payload: COLOR_INCREMENT}) }
        onDecrease={() => dispatch({ type: 'change_green',  payload: -1 * COLOR_INCREMENT}) }
        color="Green"
      />
      <View style={[
        Styles.colorBox, 
        {backgroundColor: `rgb(${red}, ${green}, ${blue})`}
      ]}>
      </View>     
    </MainWrapper>
  )
}

export { SquareScreen }