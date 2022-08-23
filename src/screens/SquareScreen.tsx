import { StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'
import { Styles } from './styles'
import { MainWrapper, ColorCounter } from './components'

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
  //  action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  //  state === {red: number, green: number, blue:number} 
  switch(action.colorToChange) {
    case 'red':
      return {...state, red: state.red + action.amount}
    case 'green':
    case 'blue':
    default: 
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue:0})
  //  state === {red: 0, green: 0, blue:0} // initial value

  return (
    <MainWrapper>
      <Text style={Styles.H1_BOLD}>SquareScreen</Text>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Green"
      />
      <View style={[
        styles.colorBox, 
        {backgroundColor: `rgb(${red}, ${green}, ${blue})`}
      ]}>
      </View>     
    </MainWrapper>
  )
}

export { SquareScreen }

const styles = StyleSheet.create({
  colorBox: {
    height: 90, 
    width: 100, 
    alignSelf: 'center',
    marginTop: 10,
  },
})