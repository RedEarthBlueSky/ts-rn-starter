import React, { useState } from 'react'
import { Text, Button, TouchableOpacity } from 'react-native'
import { Styles } from './styles'
import { MainWrapper } from './components'

const HomeScreen = (): JSX.Element => {
  const [disable, setDisable] = useState(false)
  console.log(Styles.ButtonMediumShadow)
  return (
    <MainWrapper>
      <Text style={Styles.H1_BOLD}>Home Screen</Text>
      <Button // very limited options
        onPress={() => console.log('Components Pressed')}
        title="Go to Components Demo" 
        color={'blue'}
        disabled={disable}
      />
      <TouchableOpacity 
        onPress={() => console.log('Lists Pressed')}
        style={Styles.ButtonMediumShadow}
      >
        <Text style={Styles.H3}>Go to Lists Demo</Text>
      </TouchableOpacity>
    </MainWrapper>
  )
}

export { HomeScreen }