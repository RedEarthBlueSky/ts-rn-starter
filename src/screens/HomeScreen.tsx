import React from 'react'
import { Text, Button, TouchableOpacity, View } from 'react-native'
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from 'react-navigation'
import { Styles } from './styles'
import { MainWrapper, ButtonOpacityLarge } from './components'

type NavigationProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const HomeScreen = (props: NavigationProps): JSX.Element => {
  return (
    <MainWrapper>
      <Text style={Styles.H1_BOLD}>Home Screen</Text>
      <ButtonOpacityLarge
        onPress={() => props.navigation.navigate('Components')}
        title='Components'
      />
      <ButtonOpacityLarge
        onPress={() => props.navigation.navigate('List')}
        title='Lists Demo'
      />
     <ButtonOpacityLarge
        onPress={() => props.navigation.navigate('ImageScreen')}
        title='Image Screen'
      />
      <ButtonOpacityLarge
        onPress={() => props.navigation.navigate('Counter')}
        title='Counter Screen'
      />
      <ButtonOpacityLarge
        onPress={() => props.navigation.navigate('Colors')}
        title='Color Screen'
      />
      <ButtonOpacityLarge
        onPress={() => props.navigation.navigate('Squares')}
        title='Square Screen'
      />
      <ButtonOpacityLarge
        onPress={() => props.navigation.navigate('Text')}
        title='Text Screen'
      />
    </MainWrapper>
  )
}

export { HomeScreen }