import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Styles } from './styles'
import { MainWrapper, ColorCounter } from './components'

const COLOR_INCREMENT = 15

const SquareScreen = () => {
  const [ red, setRed ] = useState(0)
  const [ green, setGreen ] = useState(0)
  const [ blue, setBlue ] = useState(0)

  const setColor = (color: string, change: number) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <MainWrapper>
      <Text style={Styles.H1_BOLD}>SquareScreen</Text>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
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