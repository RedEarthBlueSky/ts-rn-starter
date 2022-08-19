import React, { useState } from 'react'
import { Text, Button, TouchableOpacity, View } from 'react-native'
import { 
  NavigationScreenProp,
  NavigationScreenParams,
  NavigationState,
} from 'react-navigation'
import { Styles } from './styles'
import { MainWrapper } from './components'

type NavigationProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationScreenParams>
}

const HomeScreen = (props: NavigationProps): JSX.Element => {
  const [disable, setDisable] = useState(false)

  return (
    <MainWrapper>
      <Text style={Styles.H1_BOLD}>Home Screen</Text>
      <View style={Styles.ButtonParent}>
        <Button // very limited options needs a wrapper
          onPress={() => props.navigation.navigate('Components')}
          title="Go to Components Demo" 
          color={'blue'}
          disabled={disable}
        />
      </View>
      <TouchableOpacity 
        onPress={() => props.navigation.navigate('List')}
        style={Styles.ButtonMediumShadow}
      >
        <Text style={Styles.H3}>Go to List Demo</Text>
      </TouchableOpacity>
    </MainWrapper>
  )
}

export { HomeScreen }